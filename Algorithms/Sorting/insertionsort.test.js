const insertionSort = require('./insertionsort');

describe('Insertion Sort', () => {
  test('should sort an unsorted array', () => {
    expect(insertionSort([6, 7, 8, 1])).toEqual([1, 6, 7, 8]);
    expect(insertionSort([9, 4, 6, 1, 2, 8, 5, 3, 7])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  test('should return the same sorted array', () => {
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should sort a reverse-sorted array', () => {
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an array with duplicate values', () => {
    expect(insertionSort([3, 3, 2, 1, 2])).toEqual([1, 2, 2, 3, 3]);
  });

  test('should return an empty array when given an empty array', () => {
    expect(insertionSort([])).toEqual([]);
  });

  test('should return the same single-element array', () => {
    expect(insertionSort([5])).toEqual([5]);
  });

  test('should work with arrays of even and odd lengths', () => {
    expect(insertionSort([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
    expect(insertionSort([1, 3, 5, 7, 9])).toEqual([1, 3, 5, 7, 9]);
  });
});
