const binarySearch = (array, value) => {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === value) return mid;
    else if (array[mid] < value) {
      start = mid + 1;
    } else if (array[mid] > value) {
      end = mid - 1;
    }
    console.log(start, mid, end);
  }
  return -1;
};

module.exports = binarySearch;

