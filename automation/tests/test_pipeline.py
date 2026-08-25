import json
import sys
import tempfile
import unittest
from pathlib import Path


AUTOMATION_DIR = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(AUTOMATION_DIR))

import discover_papers  # noqa: E402
import merge_papers  # noqa: E402


ARXIV_FEED = """<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:arxiv="http://arxiv.org/schemas/atom">
  <entry>
    <id>http://arxiv.org/abs/2608.12345v2</id>
    <updated>2026-08-24T12:00:00Z</updated>
    <published>2026-08-20T12:00:00Z</published>
    <title>  A Neural Audio Effect for Music Production  </title>
    <summary> We introduce a production-oriented audio effect. </summary>
    <author><name>First Author</name></author>
    <author><name>Second Author</name></author>
    <category term="eess.AS" />
    <arxiv:primary_category term="eess.AS" />
    <arxiv:doi>10.1234/example</arxiv:doi>
  </entry>
</feed>
"""


class DiscoveryTests(unittest.TestCase):
    def test_parse_feed_normalizes_authoritative_metadata(self):
        papers = discover_papers.parse_feed(ARXIV_FEED, "audio-effects")
        self.assertEqual(len(papers), 1)
        paper = papers[0]
        self.assertEqual(paper["sourceId"], "arxiv:2608.12345")
        self.assertEqual(paper["title"], "A Neural Audio Effect for Music Production")
        self.assertEqual(paper["authors"], ["First Author", "Second Author"])
        self.assertEqual(paper["paperUrl"], "https://arxiv.org/abs/2608.12345")
        self.assertEqual(paper["matchedQueries"], ["audio-effects"])

    def test_existing_records_include_title_level_deduplication(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "papers.json"
            path.write_text(
                json.dumps(
                    {
                        "papers": [
                            {
                                "title": "Beyond Dry References: Learning Relative Audio Effects",
                                "source": {"type": "manual", "id": "local-paper"},
                            }
                        ]
                    }
                ),
                encoding="utf-8",
            )
            source_ids, titles = discover_papers.existing_records(path)
            self.assertEqual(source_ids, {"local-paper"})
            self.assertIn("beyonddryreferenceslearningrelativeaudioeffects", titles)


class MergeTests(unittest.TestCase):
    def test_only_high_confidence_includes_are_merged(self):
        candidate = discover_papers.parse_feed(ARXIV_FEED, "audio-effects")[0]
        candidates = {"candidates": [candidate]}
        review = {
            "reviewedAt": "2026-08-25",
            "decisions": [
                {
                    "sourceId": "arxiv:2608.12345",
                    "decision": "include",
                    "confidence": "high",
                    "areas": ["audio-effects"],
                    "summary": {
                        "en": "Introduces a neural audio effect intended for music production workflows.",
                        "zh": "提出一种面向音乐制作流程的神经音频效果器。",
                    },
                    "reason": "The abstract states a direct production contribution.",
                }
            ],
        }
        papers = {"schemaVersion": 1, "updatedAt": "2026-08-01", "papers": []}
        merged, added = merge_papers.merge_records(candidates, review, papers)
        self.assertEqual(added, 1)
        self.assertEqual(merged["papers"][0]["title"], candidate["title"])
        self.assertEqual(merged["papers"][0]["authors"], candidate["authors"])
        self.assertEqual(merged["papers"][0]["curation"], "agent")
        self.assertEqual(merged["papers"][0]["links"][1]["url"], "https://doi.org/10.1234/example")

    def test_unknown_source_id_is_rejected(self):
        with self.assertRaisesRegex(ValueError, "unknown sourceId"):
            merge_papers.merge_records(
                {"candidates": []},
                {
                    "reviewedAt": "2026-08-25",
                    "decisions": [
                        {
                            "sourceId": "arxiv:invented",
                            "decision": "exclude",
                            "confidence": "high",
                            "areas": [],
                            "summary": {"en": "", "zh": ""},
                            "reason": "Not relevant.",
                        }
                    ],
                },
                {"schemaVersion": 1, "updatedAt": "2026-08-01", "papers": []},
            )

    def test_missing_candidate_decision_is_rejected(self):
        candidate = discover_papers.parse_feed(ARXIV_FEED, "audio-effects")[0]
        with self.assertRaisesRegex(ValueError, "did not review every candidate"):
            merge_papers.merge_records(
                {"candidates": [candidate]},
                {"reviewedAt": "2026-08-25", "decisions": []},
                {"schemaVersion": 1, "updatedAt": "2026-08-01", "papers": []},
            )


if __name__ == "__main__":
    unittest.main()
