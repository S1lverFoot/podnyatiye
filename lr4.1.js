function max(matrix) {
  let maxVal = -Infinity;
  
  for (const row of matrix) {
    for (const num of row) {
      if (num > maxVal) {
        maxVal = num;
      }
    }
  }
  
  return maxVal;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);