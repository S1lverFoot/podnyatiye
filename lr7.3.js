function difference(array1, array2) {
  return array1.filter(x => !array2.includes(x));
}

/* Оптимизация для больших массивов (через Set для array2):
function difference(array1, array2) {
  const set2 = new Set(array2);
  return array1.filter(x => !set2.has(x));
}
*/

// Тест
const arr1 = [7, -2, 10, 5, 0];
const arr2 = [0, 10];
const resDiff = difference(arr1, arr2);
console.log(resDiff); // [7, -2, 5]