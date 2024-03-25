/*
In this problem, The sum of an array should be returned.
    > Passing an array in parentheses.
    > In sum variable, the sum of each element will be stored.
    > Using for loop iterate over each element till the last element of the array.
    > Storing each index value in sum from 0 index till the length of an array.
    > Finally, returning the sum variable, the sum of an array.
*/

let ar = [1, 2, 3, 4, 10, 11];

function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}
