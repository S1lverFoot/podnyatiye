function noHoistingExample() {
  let text = "Podnyatiye";
  console.log(text);
}
noHoistingExample();
function inc(num) {
  num.n = num.n + 1;
}

const obj = { n: 5 };
inc(obj);

console.dir(obj); // Выведет: { n: 6 }

const sourceArray = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  null, undefined, 'another string', 42, true, 0, -1, 99n, Symbol('id')
];

const dynamicTypeCounts = {};

for (const element of sourceArray) {
  const type = element === null ? 'null' : typeof element;
  
  if (dynamicTypeCounts[type]) {
    dynamicTypeCounts[type]++;
  } else {
    dynamicTypeCounts[type] = 1;
  }
}

console.log("\nРезультат с динамическими ключами:");
console.dir(dynamicTypeCounts);
/* Вывод:
{
  boolean: 4,
  string: 3,
  number: 5,
  null: 1,
  undefined: 1,
  bigint: 1,
  symbol: 1
}
*/