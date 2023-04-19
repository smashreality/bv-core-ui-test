module.exports = {
  transform: {
    '^.+\\.(ts|js)x$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)s$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node', 'tsx'],
};
