// will sum zero an array using multiple pointer patterm
// complexity of O(n) and O(1)
function sumZero(arr) {
  // define pointers
  let left = 0;
  let right = arr.length - 1;
  //
  while (left < right) {
    // sum is equal to the addition of both pointers
    let sum = arr[left] + arr[right];
    // if sum 0 then return resut
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

function uniqueValue(arr) {
  let left = 0;
  let right = arr.length - 1;
  let counter = 0;
  while (left < right) {
    let sameValue = arr[left === arr[right]];
    if (sameValue) {
      counter++;
    } else if (!sameValue) {
      right--;
    } else {
      left++;
    }
  }
}
