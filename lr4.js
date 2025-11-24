// 1. Цикл for
function sumFor(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// 2. Цикл for..of
function sumForOf(...args) {
  let total = 0;
  for (const num of args) {
    total += num;
  }
  return total;
}

// 3. Цикл while
function sumWhile(...args) {
  let total = 0;
  let i = 0;
  while (i < args.length) {
    total += args[i];
    i++;
  }
  return total;
}

// 4. Цикл do..while
function sumDoWhile(...args) {
  if (args.length === 0) return 0;
  let total = 0;
  let i = 0;
  do {
    total += args[i];
    i++;
  } while (i < args.length);
  return total;
}

function sumReduce(...args) {
  return args.reduce((acc, current) => acc + current, 0);
}

console.log(sumReduce(1, 2, 3));
console.log(sumReduce(0));      
console.log(sumReduce());        
console.log(sumReduce(1, -1, 1)); 