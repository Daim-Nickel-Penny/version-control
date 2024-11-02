/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    "src/**/*.ts", // Include only TypeScript files from the src directory
    "!dist/**/*.js", // Exclude all JavaScript files in the dist folder
  ],
  // transform: {
  //   "^.+.tsx?$": ["ts-jest",{}],
  // },
};
