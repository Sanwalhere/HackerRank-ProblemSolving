/*
  > Create an empty object called 'counts' to store the count of each bird type.
  > Iterate through the 'arr' using forEach method.
  > For each element 'value' in 'arr', update the count of 'value' in 'counts'.
  > Initialize variables 'maxCount' to keep track of the maximum count and
    'mostSighted' to store the most sighted bird type.
  > Iterate through each key in the 'counts' object using a for...in loop.
  > Check if the count of the current bird type is greater than 'maxCount'.
  > If it is greater, update 'maxCount' and 'mostSighted' with the current bird type.
  > Return the 'mostSighted' bird type as a number.

*/
let array = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
let array1 = [1, 4, 4, 4, 5, 3];

function migratoryBirds(arr) {
  const counts = {};
  arr.forEach((value) => {
    counts[value] = (counts[value] || 0) + 1;
  });

  let maxCount = 0;
  let mostSighted = null;
  for (let key in counts) {
    if (counts[key] > maxCount) {
      maxCount = counts[key];
      mostSighted = key;
    }
  }

  return +mostSighted;
}

console.log(migratoryBirds(array1));
