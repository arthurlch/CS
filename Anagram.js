// Anagram

function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  // create object to deconstruct the strings(arguments)
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exist increment to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);

    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // cant find letter or letter is zero then its not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  }
  return true;
}
