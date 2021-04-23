/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  var alphas = new Array(26).fill(0);
  var aCode = 97;
  var start = 0;
  var end = 0;
  var ret = [];
  var getDis = (s) => {
    return s.charCodeAt() - aCode;
  }
  for (let i = 0; i < S.length; i++) {
    alphas[getDis(S[i])] = i;
  }
  for (let i = start; i <= end && i < S.length; i++) {
    if (alphas[getDis(S[i])] > end) {
      end = alphas[getDis(S[i])];
    }
    if (i == end) {
      ret.push(end - start + 1);
      end++;
      start = end;
    }
  }

  return ret;
};

console.log(partitionLabels('caedbdedda'));