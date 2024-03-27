/*
    In this problem Count the tallest candles in an array by finding their height and returning the count.

    > Define function birthdayCakeCandles to count the number of tallest candles in the input array.
    > Find the tallest candle using Math.max and the spread operator (...).
    > Initialize numberOfTallestCandles to 0.
    > Loop through each candle and increment numberOfTallestCandles if it's equal to the tallest candle.
    > Return numberOfTallestCandles.

*/

let candles = [1, 3, 5, 7, 3, 9, 4, 9, 6, 9];

function birthdayCakeCandles(candles) {
  let tallestCandle = Math.max(...candles);
  let numberOfTallestCandles = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === tallestCandle) {
      numberOfTallestCandles++;
    }
  }
  return numberOfTallestCandles;
}

console.log(birthdayCakeCandles(candles));
