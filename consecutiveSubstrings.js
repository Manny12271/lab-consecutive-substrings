function consecutiveSubstrings(string) {
  const result = [];

  for (let start = 0; start < string.length; start++) {
    for (let end = start + 1; end <= string.length; end++) {
      result.push(string.slice(start, end));
    }
  }

  return result;
}

if (require.main === module) {
  console.log("Test 1 - Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Test 2 - Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Test 3 - Expecting: []");
  console.log("=>", consecutiveSubstrings(''));

  console.log("");

  console.log("Test 4 - Expecting: ['a', 'ab', 'abc', 'abca', 'b', 'bc', 'bca', 'c', 'ca', 'a']");
  console.log("=>", consecutiveSubstrings('abca'));

  console.log("");

  console.log("Test 5 - Expecting: ['a', 'aa', 'aaa', 'a', 'aa', 'a']");
  console.log("=>", consecutiveSubstrings('aaa'));
}

module.exports = consecutiveSubstrings;
