/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^lodash-es/(.*)$': 'lodash/$1',
  },
};