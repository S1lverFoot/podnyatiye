// Оголошення змінних, констант та простих функцій
let myName = 'Jeb';
const Year = 2025;
function greet(name) {
  console.log(`Hello, ${name} ${Year}!`);
}

greet(myName);

// Генерація масивів чисел за допомогою циклів
/**
 *
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
function range(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

/**
 *
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
function rangeOdd(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) { 
      result.push(i);
    }
  }
  return result;
}

const fullRange = range(15, 30);
console.log(fullRange);
const oddRange = rangeOdd(15, 30);
console.log(oddRange);

// Функції
/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const average = (a, b) => (a + b) / 2;

/**
 *
 * @param {number} x
 * @returns {number}
 */
const square = (x) => x ** 2;

/**
 *
 * @param {number} x
 * @returns {number}
 */
const cube = (x) => x ** 3;

/**
 * 
 * @returns {number[]}
 */
function calculate() {
  const results = [];
  for (let i = 0; i <= 9; i++) {
    const sq = square(i);
    const cb = cube(i);
    const avg = average(sq, cb);
    results.push(avg);
  }
  return results;
}

const finalResults = calculate();
console.log(finalResults);
/*
[
  0,    1,    6,   18,   40,
  75, 126, 196, 288, 396
]
*/

// Об'єкти 
function fn() {
  const constObj = { name: 'Marcus Perrson' };
  let letObj = { name: 'Jeb' };
  console.log(constObj.name);
  console.log(letObj.name); 
}

fn();

/**
 *
 * @param {string} name
 * @param {string} number
 * @returns {{name: string, number: string}}
 */
function createUser(name, number) {
  return { name, number };
}

const user = createUser('Markus Persson', '+380445554433');
console.log(user);

// Колекції
const phoneBookArray = [
  { name: 'Marcus Persson', phone: '+380445554433' },
  { name: 'Jeb', phone: '+380445554434' },
];

/**
 *
 * @param {string} name
 * @returns {string | undefined}
 */
function findPhoneByName_Array(name) {
  for (let i = 0; i < phoneBookArray.length; i++) {
    const entry = phoneBookArray[i];
    if (entry.name === name) {
      return entry.phone;
    }
  }
  return 'Not found';
}

console.log('Пошук у масиві:', findPhoneByName_Array('Marcus Persson'));

const phoneBookHash = {
  'Marcus Persson': '+380445554433',
  'Jeb': '+380445554434',
};

/**
 *
 * @param {string} name
 * @returns {string | undefined}
 */
function findPhoneByName_Hash(name) {
  return phoneBookHash[name] || 'Not found';
}

console.log('Пошук у хеші:', findPhoneByName_Hash('Jeb'));

