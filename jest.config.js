/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], //ссылка на файл с настройками setup
  moduleNameMapper: {
    "^undici$": "<rootDir>/__mocks__/undici.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
