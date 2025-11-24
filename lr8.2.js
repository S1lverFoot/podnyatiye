function contract(fn, ...types) {
  return function(...args) {
    const expectedReturnType = types[types.length - 1];
    const expectedArgTypes = types.slice(0, -1);

    if (args.length !== expectedArgTypes.length) {
      throw new TypeError(`Ожидалось аргументов: ${expectedArgTypes.length}, получено: ${args.length}`);
    }

    args.forEach((arg, index) => {
      const expectedType = expectedArgTypes[index];
      const expectedTypeName = expectedType.name.toLowerCase();
      
      if (typeof arg !== expectedTypeName) {
        throw new TypeError(`Аргумент ${index} должен быть ${expectedTypeName}, получен ${typeof arg}`);
      }
    });

    const result = fn(...args);
    const expectedReturnTypeName = expectedReturnType.name.toLowerCase();
    if (typeof result !== expectedReturnTypeName) {
      throw new TypeError(`Результат должен быть ${expectedReturnTypeName}, получен ${typeof result}`);
    }

    return result;
  };
}

// Тест 1 (Числа)
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); // 5

// Тест 2 (Строки)
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); // Hello world!

// Тест 3 (Ошибка)
try {
  addNumbers(2, 'строка');
} catch (e) {
  console.error(e.message); // "Аргумент 1 должен быть number, получен string"
}