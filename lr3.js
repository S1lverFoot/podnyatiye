// Рандомные значения + генерация ключей
/**
 *
 *
 * @param {number} min 
 * @param {number} [max] 
 * @returns {number}
 */
const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log('Случайное от 0 до 5:', random(5));
console.log('Случайное от 5 до 10:', random(5, 10));
console.log('Случайное от 0 до 100:', random(100));

/**
 *
 * @param {number} length
 * @param {string} characters
 * @returns {string}
 */
const generateKey = (length, characters) => {
  let key = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = random(charactersLength - 1);
    key += characters[randomIndex];
  }
  return key;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log('Сгенерированный ключ:', key);

// IPv4 в число
/**
 *
 * @param {string} ip
 * @returns {number}
 */
const ipToInt = (ip = '127.0.0.1') => {
  const bytes = ip.split('.');
  return bytes.reduce((acc, octet) => (acc << 8) + Number(octet), 0) | 0;
};

console.log(`127.0.0.1       -> ${ipToInt('127.0.0.1')}`);
console.log(`10.0.0.1        -> ${ipToInt('10.0.0.1')}`);
console.log(`192.168.1.10    -> ${ipToInt('192.168.1.10')}`);
console.log(`0.0.0.0         -> ${ipToInt('0.0.0.0')}`);
console.log(`Без аргумента    -> ${ipToInt()}`);

// Интроспекция объекта
/**
 *
 * @param {object} obj
 * @returns {Array<[string, number]>}
 */
const introspect = (obj) => {
  const result = [];
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'function') {
      result.push([key, value.length]);
    }
  }
  return result;
};

const iface = {
  m1: x => [x],
  m2: function(x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
  prop1: 'value',
  prop2: 123,
};

const methods = introspect(iface);
console.log('Результат интроспекции:', methods);