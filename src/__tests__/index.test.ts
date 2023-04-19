import { echo } from '../index';

describe('echo', () => {
  test('should echo', () => {
    expect(echo('hello')).toBe('echo: hello');
  });
});
