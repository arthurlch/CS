// O(n) O(1)
// find a unique value using pointer in an array

function uniqueValue(arr) {
  //you need to sort the array
  // .sort only sort string by default you need to define func inside
  // to sort numbers
  arr.sort((a, b) => {
    return a - b;
  });
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(uniqueValue([1, 4, 1, 57, 72, 2, 2, 3, 4, 4, 57, 8, 7]));
