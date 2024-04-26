/*
Calculate the total number of pages by considering whether 'n' is even or odd.
Calculate the number of pages to turn from the start ('fromStart') by dividing 'p' by 2 and flooring the result.
Calculate the number of pages to turn from the end ('fromEnd') by subtracting 'p' from 'totalPages', dividing by 2, and flooring the result.
Output the total pages, pages from the start, and pages from the end (for debugging purposes).
Return the minimum of 'fromStart' and 'fromEnd', representing the minimum number of pages to turn to reach page 'p'.
*/

function pageCount(n, p) {
  const totalPages = n % 2 === 0 ? n + 1 : n;
  const fromStart = Math.floor(p / 2);
  const fromEnd = Math.floor((totalPages - p) / 2);

  console.log(totalPages);
  console.log(fromStart);
  console.log(fromEnd);

  return Math.min(fromStart, fromEnd);
}
console.log(pageCount(5, 3));
