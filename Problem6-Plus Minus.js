/*
In this problem the function returns the decimal numbers according to length of array;
    > Collection the positive, negative and zero values using iteration
    > Divide the positive variable by the length of array
    > Same for negative and zero variables
    > Use toFixed() method for trio variables to make the number decimal as long as needed
    > Finally console the variable seperately, as per problem requirement
*/

let arr = [11, 5, 8, -4, -8, -11, 5, 0, 0];

function plusMinus(arr) {
  let length = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  let positiveFloat = (positive / length).toFixed(6);
  let negativeFloat = (negative / length).toFixed(6);
  let zeroFloat = (zero / length).toFixed(6);

  console.log(positiveFloat);
  console.log(negativeFloat);
  console.log(zeroFloat);
}

plusMinus(arr);
