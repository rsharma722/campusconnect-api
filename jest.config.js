const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  transform: {
    ...tsJestTransformCfg,
  },
  collectCoverageFrom: [
    "src/services/**/*.ts"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"]
};
