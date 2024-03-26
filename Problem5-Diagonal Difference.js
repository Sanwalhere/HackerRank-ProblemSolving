/*
In this problem the diagonal difference is required in single integer
    > Sum of primary diagonal: arr[0][0] + arr[1][1] + arr[2][2] which is 1+3+8 = 12
    > Sum of secondary diagonal: arr[0][2] + arr[1][1] + arr[2][0] which is 1+3+5 = 9
    > The top two lines are the formulae for 2D array
    > So in this case I used (arr.length -1) - i for multi dimentional array
    > Absolute difference: |12 - 9| = 3
    > To subtract from greater value, Using if statement to return positive value

*/

let arr = [
  [1, 5, 1],
  [1, 3, 7],
  [5, 6, 8],
];

function diagonalDifference(arr) {
  let rowSum = 0;
  let columnSum = 0;

  for (let i = 0; i < arr.length; i++) {
    rowSum += arr[i][i];
    columnSum += arr[arr.length - 1 - i][i];
  }

  if (rowSum > columnSum) {
    return rowSum - columnSum;
  } else {
    return columnSum - rowSum;
  }
}

console.log(diagonalDifference(arr));
