/*
Calculate the distance between cat A and the mouse ('distXZ') by taking the absolute difference between 'x' and 'z'.
Calculate the distance between cat B and the mouse ('distYZ') by taking the absolute difference between 'y' and 'z'.
Compare 'distXZ' and 'distYZ' to determine which cat reaches the mouse first or if they reach at the same time.
If 'distXZ' is less than 'distYZ', return "Cat A".
If 'distXZ' is greater than 'distYZ', return "Cat B".
If 'distXZ' is equal to 'distYZ', return "Mouse C".
*/

function catAndMouse(x, y, z) {
  const distXZ = Math.abs(x - z);
  const distYZ = Math.abs(y - z);

  if (distXZ < distYZ) {
    return "Cat A";
  } else if (distXZ > distYZ) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));
