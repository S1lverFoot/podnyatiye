function store(value) {
  return function() {
    return value;
  };
}

// Тест
const read = store(5);
const value = read();
console.log(value); // 5