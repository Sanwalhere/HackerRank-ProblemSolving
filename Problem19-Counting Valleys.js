/*
Initialize variables 'up' and 'down' to count the number of upward and downward steps.
Iterate through the 'path' array for 'steps' times using a for loop.
Check if the current step is an upward step ("U").
Increment 'up' by 1.
If 'up' becomes 0 (i.e., back to sea level), increment 'down' by 1 to count a valley.
Check if the current step is a downward step ("D").
Decrement 'up' by 1.
Return the total count of valleys ('down').

*/
function countingValleys(steps, path) {
  let up = 0;
  let down = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      up++;
      if (up === 0) {
        down++;
      }
    } else if (path[i] === "D") {
      up--;
    }
  }

  return down;
}
