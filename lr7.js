function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

// Тест
const cities = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(cities, 'Lima');
removeElement(cities, 'Berlin'); 
console.log(cities); // ['Kiev', 'Beijing', 'Saratov']