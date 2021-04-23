/**
 * @param {string} s
 * @return {string[]}
 */
var list = [];
var path = [];
var restoreIpAddresses = function (s) {
  backTracking(s, 0);
  return list;
};
var backTracking = function (s, startIndex) {
  if (startIndex === s.length) {
    return;
  }
  if (path.length === 3) {
    var str = s.substring(startIndex);
    if (!isValid(str)) {
      return;
    }
    path.push(str);
    list.push(path.join(''));
    path.pop();
    return;
  }

  for (var i = startIndex; i < s.length; i++) {
    var str = s.substring(startIndex, i + 1);
    if (!isValid(str)) {
      break;
    }
    path.push(str + '.');
    backTracking(s, i + 1);
    path.pop();
  }
}

var isValid = function (s) {
  if (s.length === 1) {
    return true;
  }
  if (s[0] === '0') {
    return false;
  }

  return s <= 255;
}

console.log(restoreIpAddresses('25525511135'));