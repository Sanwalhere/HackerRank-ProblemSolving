/*
    > Create a function "staircase" that takes an integer "n" as input.
    > Use a loop to iterate from 1 to "n".
    > Inside the loop, calculate the spaces and "#" symbols for each row.
    > Print the spaces and "#" symbols accordingly.
    > Ensure the last row has "n" "#" symbols.
    > Test the function with different inputs to confirm it works correctly.

*/

function staircase(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - (i + 1)) + "#".repeat(i + 1));
  }
}

staircase(6);
