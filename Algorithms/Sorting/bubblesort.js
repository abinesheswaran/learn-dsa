const bubbleSort = (array) => {
  let limit = array.length - 1;
  for (let i = 0; i < array.length; i++) {
    let isSwaped = false;
    for (let j = 0; j < limit; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwaped = true;
      }
    }
    if (!isSwaped) return array;
    limit--;
  }
  return array;
};
module.exports = bubbleSort;
