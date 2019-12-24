# BLN CI Uniq Issues Action

GitHub Action that parses existing GitHub `vulnerability` issues and generates a report with new vulnerabilities.

## Inputs

### `vulnerabilities-file-path`

**Required** The path to the [Anchore](https://github.com/anchore/scan-action) generated vulnerability output.

### `vulnerabilities-output-path`

The outputh path for the new (non-duplicated) vulnerabilities that have been detected

## Usage

```yaml
    - name: Find new vulnerabilities
      uses: bluedrop-learning-networks/ci-utils@master
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      with:
        command: report-vulnerabilities
```
