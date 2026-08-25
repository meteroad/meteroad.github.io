#!/usr/bin/env python3
"""Safely persist the structured Codex job output passed through an environment variable."""

import argparse
import json
import os
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    raw = os.environ.get("CODEX_REVIEW_JSON", "")
    if not raw.strip():
        raise SystemExit("CODEX_REVIEW_JSON is empty")
    parsed = json.loads(raw)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(parsed, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
