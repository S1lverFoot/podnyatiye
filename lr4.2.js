const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

function ages(persons) {
  const lifeSpans = {};
  
  for (const name in persons) {
    const person = persons[name];
    lifeSpans[name] = person.died - person.born;
  }
  
  return lifeSpans;
}

console.log(ages(persons));