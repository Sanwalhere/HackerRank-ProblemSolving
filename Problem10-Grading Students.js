/*
If a grade is less than 38, keep it unchanged.
If a grade is at least 38 and less than 3 points away from the next multiple of 5,
round it up to that multiple. Otherwise, leave the grade as it is.

Example:
Input: [73, 67, 38, 33]
Output: [75, 67, 40, 33]

// Define a function to round grades
// Loop through grades and round if needed
// Round grades according to specific rules
// Return the rounded grades array
// Call the function and display the result

*/

let arr = [73, 67, 38, 33];

function gradingStudents(grades) {
  let newArr = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 40 && (grades[i] + 1) % 5 === 0) {
      newArr.push(grades[i] + 1);
    } else if (grades[i] >= 40 && (grades[i] + 2) % 5 === 0) {
      newArr.push(grades[i] + 2);
    } else if (grades[i] + 1 === 40) {
      newArr.push(grades[i] + 1);
    } else if (grades[i] + 2 === 40) {
      newArr.push(grades[i] + 2);
    } else if (grades[i] >= 40 && grades[i] % 5 !== 0) {
      newArr.push(grades[i]);
    } else {
      newArr.push(grades[i]);
    }
  }

  return newArr;
}

console.log(gradingStudents(arr));
