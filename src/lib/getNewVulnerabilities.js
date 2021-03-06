const fs = require('fs');
const { differenceWith, isEqual } = require('lodash');

const config = require('../utils/config');
const logger = require('../utils/logger');

module.exports = ({ existingVulnerabilities }) => {
  let detectedVulnerabilitiesFile;
  try {
    detectedVulnerabilitiesFile = fs.readFileSync(config.vulnerabilitiesFilePath);
  } catch (e) {
    logger.error(`Error reading vulnerabilities file from ${detectedVulnerabilitiesFile}`);
    process.exit(1);
  }
  const detectedVulnerabilities = JSON.parse(detectedVulnerabilitiesFile);
  return {
    ...detectedVulnerabilities,
    vulnerabilities: differenceWith(
      detectedVulnerabilities.vulnerabilities,
      existingVulnerabilities,
      isEqual,
    ),
  };
};
