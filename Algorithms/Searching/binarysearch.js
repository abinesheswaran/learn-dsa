const binarysearch = (array, value) => {
  let start = 0,
    end = array.length;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === value) return mid;
    if (array[mid] > value) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
};
module.exports = binarysearch;
