/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  var list = [], path = [], used = [];

  var isValid = function (used, i) {
    if (used[i] === true) {
      return false;
    }

    var index = path.length;
    for (let j = 0; j < index; j++) {
      if (Math.abs(i - path[j]) === Math.abs(index - j)) {
        return false;
      }
    }

    return true;
  }

  var backTrack = function (n, used) {
    if (n === path.length) {
      list.push(path.slice());
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!isValid(used, i)) {
        continue;
      }
      path.push(i);
      used[i] = true;
      backTrack(n, used);
      path.pop();
      used[i] = false;
    }
  }

  backTrack(n, used);
  return list.map(arr => {
    return arr.map(v => {
      const ret = new Array(n).fill('.');
      ret[v] = 'Q';
      return ret.join('');
    })
  });
};

console.log(solveNQueens(5));