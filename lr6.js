const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('Все аргументы должны быть функциями');
    }
  }

  return (x) => fns.reduce((v, f) => f(v), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log(f1(5)); // 1728

const f2 = pipe(inc, inc);
console.log(f2(7)); // 9

try {
  const f3 = pipe(inc, 7, cube); 
} catch (e) {
  console.error("Ошибка перехвачена:", e.message); 
}