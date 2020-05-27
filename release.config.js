module.exports = {
  branches: ["master"],
  repositoryUrl: "https://github.com/c2r79/react-github-actions",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/github",
    "@semantic-release/release-notes-generator",
  ],
};
