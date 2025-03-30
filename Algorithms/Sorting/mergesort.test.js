const mergeSort = require('./mergesort');
describe('Merge Sort Algorithm', () => {
  test('sorts an unsorted array', () => {
    expect(mergeSort([9, 7, 3, 5, 6, 1, 2, 7, 5, 9, 10])).toEqual([
      1, 2, 3, 5, 5, 6, 7, 7, 9, 9, 10,
    ]);
  });

  test('returns already sorted array as-is', () => {
    expect(mergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  test('sorts a reverse sorted array', () => {
    expect(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  test('handles an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('handles a single-element array', () => {
    expect(mergeSort([42])).toEqual([42]);
  });

  test('sorts an array with duplicate values', () => {
    expect(mergeSort([5, 1, 5, 3, 3, 2, 1])).toEqual([1, 1, 2, 3, 3, 5, 5]);
  });

  test('sorts an array with negative numbers', () => {
    expect(mergeSort([-3, -1, -7, -5, -2])).toEqual([-7, -5, -3, -2, -1]);
  });

  test('sorts an array with both positive and negative numbers', () => {
    expect(mergeSort([-10, 5, -3, 2, 0, -1])).toEqual([-10, -3, -1, 0, 2, 5]);
  });
});
