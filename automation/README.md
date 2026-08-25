# AI paper scout

The paper scout follows a reviewable pipeline:

1. A scheduled GitHub Action retrieves recent metadata from the public arXiv API.
2. DeepSeek classifies direct relevance and writes short English and Chinese summaries.
3. Deterministic scripts restore titles, authors, dates, paper URLs, and DOI values from the original arXiv evidence.
4. Only high-confidence records that pass deterministic validation and unit tests are proposed in a pull request.
5. Merging the pull request updates `main`; a separate workflow then synchronizes the public GitHub Pages branch.

## Repository setup

In GitHub, open **Settings → Secrets and variables → Actions**:

- Add a repository secret named `DEEPSEEK_API_KEY`.
- Under **Actions → General → Workflow permissions**, allow read and write permissions and allow GitHub Actions to create pull requests.

The workflow runs every Monday at 01:00 UTC (09:00 Asia/Shanghai) and can also be started manually from **Actions → Weekly paper scout → Run workflow**.

For unattended publication after validation, add the repository variable `PAPER_SCOUT_AUTO_MERGE` with the value `true`. The safer default is to review and merge the generated pull request manually.

Never commit an API key or place it in workflow-level environment variables.

The curation step uses `deepseek-v4-flash` in non-thinking JSON mode. Set the optional repository or job environment variable `DEEPSEEK_MODEL` only when intentionally testing another compatible model.

## Local checks

```bash
python3 automation/validate_data.py
python3 -m unittest discover -s automation/tests -v
node --check intelligent-audio-production/app.js
```
