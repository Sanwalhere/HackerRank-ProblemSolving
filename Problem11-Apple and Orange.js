/*

Function to count apples and oranges falling close to Sam's house

    range: s to t, trees: apple - a and orange - b, apples and oranges are fallen
    > Initialize counters for apples and oranges close to the house
    > Loop through the apples array to check for apples falling close to the house
    > Calculate the position of the fallen apple and check if it is within the house range
    > Increment the apple counter if it falls within the range
    > Loop through the oranges array to check for oranges falling close to the house
    > Calculate the position of the fallen orange and check if it is within the house range
    > Increment the orange counter if it falls within the range
    > Print the counts of apples and oranges that fell close to the house

*/

function calculateApplesAndOranges(s, t, a, b, apples, oranges) {
  let countApplesNearHouse = 0;
  let countOrangesNearHouse = 0;

  for (let i = 0; i < apples.length; i++) {
    let fallenApplePosition = a + apples[i];
    if (fallenApplePosition >= s && fallenApplePosition <= t) {
      countApplesNearHouse++;
    }
  }

  for (let j = 0; j < oranges.length; j++) {
    let fallenOrangePosition = b + oranges[j];
    if (fallenOrangePosition >= s && fallenOrangePosition <= t) {
      countOrangesNearHouse++;
    }
  }

  console.log(countApplesNearHouse);
  console.log(countOrangesNearHouse);
}
