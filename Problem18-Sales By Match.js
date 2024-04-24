/*

Initialize 'n' to 0 to count pairs of socks.
Create an empty object 'count' to store the count of each type of sock.
Iterate through the array 'ar' using a for loop.
Get the current sock type at index 'i'.
Update the count of 'sock' in 'count' and check if it forms a pair (count[sock] % 2 === 0).
If it forms a pair, increment 'n' by 1.
Return the total number of pairs 'n'.

*/

let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(ar) {
  let n = 0;
  let count = {};
  for (let i = 0; i < ar.length; i++) {
    let sock = ar[i];
    count[sock] = (count[sock] || 0) + 1;
    if (count[sock] % 2 === 0) {
      n++;
    }
  }
  return n;
}
console.log(sockMerchant(ar));
