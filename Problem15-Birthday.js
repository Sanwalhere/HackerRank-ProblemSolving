/*

    > Define the function birthday with parameters s, d, and m.
    > s is an array of integers, d is the target sum, and m is the number of elements to sum.
    > Initialize a variable count to keep track of the number of valid subarrays.
    > Iterate through the array s, stopping at the last possible starting index for a subarray of length m.
    > Initialize a variable sum to store the sum of elements in the current subarray.
    > Iterate through the current subarray of length m starting from index i.
    > Add the current element to the sum.
    > If the sum of the current subarray is equal to the target sum d, increment the count.
    > Return the final count of valid subarrays.

*/

function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }
    if (sum === d) {
      count++;
    }
  }
  return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 3));
