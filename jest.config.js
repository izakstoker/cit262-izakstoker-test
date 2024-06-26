module.exports = {
    coverageThreshold: {
        './src/*.js': {
            lines: 80,
        },
    },
};

module.exports = {
    roots: ['<rootDir>/tests', '<rootDir>/src'],
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node']
  };