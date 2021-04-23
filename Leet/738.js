/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
  const arr = N.toString().split(''); let j = arr.length;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      arr[i - 1]--;
      j = i;
    }
  }
  while (j < arr.length) {
    arr[j++] = 9;
  }
  return parseInt(arr.join(''))
};

console.log(monotoneIncreasingDigits(45113945))