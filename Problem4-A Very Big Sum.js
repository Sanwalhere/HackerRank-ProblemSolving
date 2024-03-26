/*
    In this problem, simply return the sum of an array
    The name of problem looks complex but it's regular sumOfAnArray
*/

function aVeryBigSum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}
