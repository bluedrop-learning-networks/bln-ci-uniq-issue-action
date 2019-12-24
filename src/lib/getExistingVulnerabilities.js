
const { getIssuesForRepo } = require('../utils/octokit');

module.exports = async () => {
  const issues = await getIssuesForRepo();
  return issues.reduce((vulns, issue) => {
    if (!issue.labels.find(({ name }) => name === 'vulnerability')) {
      return vulns;
    }
    return [
      ...vulns,
      ...(JSON.parse(issue.body.split('```')[1])).vulnerabilities,
    ];
  }, []);
};
