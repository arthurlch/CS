// Knuth-Morris-Pratt
// Helpful for pattern matching like substring
// found in leetcode question 28 strstr()

// Brute force substring matching

const strStr = function (string, substring) {
  //edge case
  if (substring === "") return 0;
  // String and Substring might not have the same length
  // In this case the loop should start from the string - substring length
  // for example is the string is 8 and the ub string is 5 then 8 - 5 = 3 so
  // the loop will start from the index number 3
  for (let i = 0; i <= string.length - substring.length; i++) {
    // will match string and substring if match is true then return i
    let k = 0;
    for (; k < substring.length; k++) {
      // if the character from string dont match substring then we need to break from the loop
      if (substring[k] !== string[i + k]) break;
    }
    if (k === substring.length) return i;
  }
  return -1;
};

console.log(strStr("abcde", "cde"));

// KMP algorithmn

// Create table

function Table(a) {
  // create an array from index 0
  const table = [0];
  // define i for looping trough table
  // define j = length prefix and suffix
  let i = 1;
  let k = 0;
  while (i < a.length) {
    // if character match them increase i and set k equal to i;
    if (a[i] === a[k]) {
      k += 1;
      table[i] = k;
      i += 1;
      // if k is greater than 0 and that character dont match
      // will reset k to previous index table -1 then while loop again to compare next i from k
    } else if (k > 0) {
      k = table[k - 1];
      // no character match and k is equal to 0 then increment i to check the next character
    } else {
      table[i] = 0;
      i += 1;
    }
  }
  return table;
}

// coding the KMP algo

const strStr = (string, subString) => {
  // filter out if string is empty = ''
  if (subString === "") return 0;
  // build table from Table function
  const Table = buildTable(subString);
  // create our variable k & i
  i = 0;
  k = 0;
  // we loop trough both string and substring
  while (i < string.length && j < subString.length) {
    // if characters match, increse index by one for both string and continue looping
    if (string[i] === subString[k]) {
      i += 1;
      k += 1;
      // if no match return k to previous index k -1
    } else if (j > 0) {
      k = buildTable[k - 1];
      // if no match and k = 0, increment
    } else {
      i += 1;
    }
    // when we got sutsring into string return -1
    if (k === subString.length) return i - k;
  }
  return -1;
};
