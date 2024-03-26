/*
    Function compareTriplets(a, b) taking two arrays as parameters.
    Declare points variables for tracking points.
    In points array [0, 0], points[0] for Alice's score and points[1] for Bob's score.
    Loop through categories in arrays a and b. The length of array of a and b will be 3 respectively.
    Update points based on rating comparisons.
    Return total points for Alice and Bob as an array.
*/

function compareTriplets(a, b) {
  let points = [0, 0];

  for (let i = 0; i <= 2; i++) {
    if (a[i] > b[i]) {
      points[0]++;
    } else if (a[i] < b[i]) {
      points[1]++;
    }
  }

  return points;
}
