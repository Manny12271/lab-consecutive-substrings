const consecutiveSubstrings = require('../consecutiveSubstrings');

describe('consecutiveSubstrings', () => {
  test('works with "abc"', () => {
    expect(consecutiveSubstrings('abc')).toEqual(['a', 'ab', 'abc', 'b', 'bc', 'c']);
  });

  test('works with "a"', () => {
    expect(consecutiveSubstrings('a')).toEqual(['a']);
  });

  test('works with an empty string', () => {
    expect(consecutiveSubstrings('')).toEqual([]);
  });

  test('works with repeated characters "aaa"', () => {
    expect(consecutiveSubstrings('aaa')).toEqual(['a', 'aa', 'aaa', 'a', 'aa', 'a']);
  });

  test('works with "abca"', () => {
    expect(consecutiveSubstrings('abca')).toEqual([
      'a', 'ab', 'abc', 'abca',
      'b', 'bc', 'bca',
      'c', 'ca',
      'a'
    ]);
  });
});
