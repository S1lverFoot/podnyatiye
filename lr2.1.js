// Зберігання в хеш таблиці
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