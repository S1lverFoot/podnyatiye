const composeWithErrorHandling = (...fns) => {
  const listeners = [];

  const composed = (initialValue) => {
    let result = initialValue;

    for (let i = fns.length - 1; i >= 0; i--) {
      try {
        result = fns[i](result);
      } catch (error) {
        listeners.forEach(handler => handler(error));
        return undefined;
      }
    }
    
    return result;
  };

  composed.on = (event, handler) => {
    if (event === 'error') {
      listeners.push(handler);
    }
  };

  return composed;
};

const divByTwo = x => x / 2;
const throwError = x => { throw new Error("Сбой системы!"); };
const addTen = x => x + 10;

const fSafe = composeWithErrorHandling(divByTwo, throwError, addTen);

fSafe.on('error', (e) => {
  console.log(`LOG: Произошла ошибка -> ${e.message}`);
});

const result = fSafe(5);

console.log('Результат:', result); // undefined
