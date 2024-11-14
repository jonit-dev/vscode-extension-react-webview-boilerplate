/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/jest/setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/jest/__mocks__/fileMock.js",
    "^@components/(.*)$": "<rootDir>/src/webview/components/$1",
    "^@hooks/(.*)$": "<rootDir>/src/webview/hooks/$1",
    "^@services/(.*)$": "<rootDir>/src/webview/services/$1",
    "^@styles/(.*)$": "<rootDir>/src/webview/styles/$1",
    "^@types/(.*)$": "<rootDir>/src/webview/types/$1",
  },
  testMatch: ["**/webview/__tests__/**/*.[t]s?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
