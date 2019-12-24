const core = require('@actions/core');

module.exports = {
  command: core.getInput('command'),
  vulnerabilitiesFilePath: core.getInput('vulnerabilities-file-path'),
  vulnerabilitiesOutputPath: core.getInput('vulnerabilities-output-path'),
};
