/*
    > Create a function called miniMaxSum that takes an array 'arr'.
    > Sort 'arr' in ascending order.
    > Calculate the minimum sum by adding the first four elements of the sorted array.
    > Calculate the maximum sum by adding the last four elements of the sorted array.
    > Log the minimum and maximum sums to the console.

*/

function miniMaxSum(arr) {
  let sorted = arr.sort((a, b) => a - b);

  let minSum = sorted[0] + sorted[1] + sorted[2] + sorted[3];
  let maxSum = sorted[1] + sorted[2] + sorted[3] + sorted[4];

  return `${minSum} ${maxSum}`;
}

console.log(miniMaxSum([1, 3, 5, 6, 7]));
