require('dotenv').config();

const fs = require('fs');
const { get } = require('lodash');
const logger = require('./utils/logger');
const { vulnerabilitiesOutputPath } = require('./utils/config');
const { owner, repo } = require('./utils/octokit');
const { getExistingVulnerabilities, getNewVulnerabilities } = require('./lib');

const main = async () => {
  try {
    logger.log(`Starting analysis of existing Docker vulnerability issues for ${owner}/${repo}`);

    const existingVulnerabilities = await getExistingVulnerabilities();
    logger.log(`Found ${existingVulnerabilities.length} existing vulnerabilities.`);

    const newVulnerabilities = getNewVulnerabilities({ existingVulnerabilities });
    logger.log(`${newVulnerabilities.vulnerabilities.length} new vulnerabilities found for repo.`);
    fs.writeFileSync(vulnerabilitiesOutputPath, JSON.stringify(newVulnerabilities));
    logger.log(`New vulnerabilities stored in ${vulnerabilitiesOutputPath}`);
    return process.exit(0);
  } catch (e) {
    logger.error(e);
    return process.exit(1);
  }
};

main();
