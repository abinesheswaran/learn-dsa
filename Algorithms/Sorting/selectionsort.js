function findMinIndex(array, start = 0) {
  let minIndex = start;
  for (let i = start + 1; i < array.length; i++) {
    if (array[i] < array[minIndex]) minIndex = i;
  }
  return minIndex;
}

const selectionSort = (array) => {
  if (array.length < 2) return array;
  for (let i = 0; i < array.length; i++) {
    let x = i;
    let minIndex = findMinIndex(array, i);
    if (array[x] > array[minIndex]) {
      let temp = array[x];
      array[x] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
};
module.exports = selectionSort;
