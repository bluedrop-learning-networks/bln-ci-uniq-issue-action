
const github = require('@actions/github');

const octokit = new github.GitHub(process.env.GITHUB_TOKEN);
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

module.exports.getIssuesForRepo = async () => {
  const { data } = await octokit.issues.listForRepo({ owner, repo });
  return data;
};

module.exports.octokit = octokit;
module.exports.owner = owner;
module.exports.repo = repo;
