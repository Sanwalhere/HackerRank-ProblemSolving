/*

    In this problem the number of times a player breaks their highest and lowest scores in a given list of scores.

    > Initialize currHighest and currLowest with the first score from the input array.
    > Initialize lowInScores and highInScores as counters.
    > Iterate through scores, updating currHighest, currLowest, and counting changes.
    > Return the counts of changes for highest and lowest scores.

*/

function breakingRecords(scores) {
  let currHighest = scores[0];
  let currLowest = scores[0];
  let lowInScores = 0;
  let highInScores = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > currHighest) {
      currHighest = scores[i];
      highInScores++;
    }

    if (scores[i] < currLowest) {
      currLowest = scores[i];
      lowInScores++;
    }
  }

  return [highInScores, lowInScores];
}

console.log(breakingRecords([3, 4, 1, 36, 0, 28, 35, 5, 24, 42]));
