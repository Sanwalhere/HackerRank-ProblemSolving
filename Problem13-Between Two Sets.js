/*

    > Define getTotalX function with parameters a and b.
    > Find max_a as the maximum value in array a and min_b as the minimum value in array b.
    > Initialize evenCollection to count numbers satisfying conditions.
    > Iterate from max_a to min_b.
    > Check if i is divisible by all elements in a and all elements in b are divisible by i.
    > Increment evenCollection if both conditions are met.
    > Return the count of numbers in evenCollection.

*/

function getTotalX(a, b) {
  let max_a = Math.max(...a);
  let min_b = Math.min(...b);
  let evenCollection = 0;

  for (let i = max_a; i <= min_b; i++) {
    if (a.every((num) => i % num === 0) && b.every((num) => num % i === 0)) {
      evenCollection++;
    }
  }
  return evenCollection;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
