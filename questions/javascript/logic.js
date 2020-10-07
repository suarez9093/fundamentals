// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }

// console.log(factorial(4));

function isEven(num) {
  if (num < 0) return false;
  if (num === 1) return false;
  if (num === 0) return true;
  return isEven(num - 2);
}

console.log(isEven(3));
