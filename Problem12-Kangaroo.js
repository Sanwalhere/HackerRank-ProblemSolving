/*

    > Define the kangaroo function with parameters x1, v1, x2, v2.
    > Check if kangaroo 1 cannot catch up or has the same speed as kangaroo 2.
    > Return "NO" if kangaroo 1 cannot catch up.
    > Calculate the number of jumps needed for kangaroo 1 to catch up with kangaroo 2.
    > Check if the number of jumps is a positive integer (meaning kangaroo 1 catches up).
    > Return "YES" if kangaroo 1 catches up.
    > Otherwise, return "NO" if kangaroo 1 cannot catch up.

*/
function kangaroo(x1, v1, x2, v2) {
  if (v1 <= v2) {
    return "NO";
  }
  const jumps = (x2 - x1) / (v1 - v2);
  if (jumps >= 0 && jumps % 1 === 0) {
    return "YES";
  } else {
    return "NO";
  }
}
console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));
