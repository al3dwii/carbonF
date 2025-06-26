module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000/org/1/dashboard"],
      startServerCommand: "pnpm exec next start -p 3000",
      numberOfRuns: 1
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: { "categories:performance": ["error", {minScore: .9}],
                    "categories:accessibility": ["error", {minScore: .9}] }
    }
  }
};
