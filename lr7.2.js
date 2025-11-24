function unique(array) {
  return [...new Set(array)];
}

// Тест
const resUnique = unique([2, 1, 1, 3, 2]);
console.log(resUnique); // [2, 1, 3]