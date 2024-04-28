/*
Calculate the total number of pages by considering whether 'n' is even or odd.
Calculate the number of pages to turn from the start ('fromStart') by dividing 'p' by 2 and flooring the result.
Calculate the number of pages to turn from the end ('fromEnd') by subtracting 'p' from 'totalPages', dividing by 2, and flooring the result.
Output the total pages, pages from the start, and pages from the end (for debugging purposes).
Return the minimum of 'fromStart' and 'fromEnd', representing the minimum number of pages to turn to reach page 'p'.
*/

function getMoneySpent(keyboards, drives, b) {
  let maxBudget = -1;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let totalCost = keyboards[i] + drives[j];
      if (totalCost <= b && totalCost > maxBudget) {
        maxBudget = totalCost;
      }
    }
  }

  return maxBudget;
}

console.log(getMoneySpent([5, 1, 1], [4], 5));
