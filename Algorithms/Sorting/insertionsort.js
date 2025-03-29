function insertInto(array, start) {
  let value = array[start];
  let i;
  for (i = start - 1; i >= 0 && array[i] > value; i--) {
    array[i + 1] = array[i];
  }
  array[i + 1] = value;
}

const insertionsort = (array) => {
  for (let i = 1; i < array.length; i++) {
    insertInto(array, i);
  }
  return array;
};
module.exports = insertionsort;
