const quickSort = require('./quicksort'); // Adjust the path if needed

describe('Quick Sort Function', () => {
  test('should sort an unsorted array', () => {
    expect(quickSort([7, 6, 3, 1, 5, 8, 2])).toEqual([1, 2, 3, 5, 6, 7, 8]);
  });

  test('should sort an already sorted array', () => {
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should sort a reverse sorted array', () => {
    expect(quickSort([9, 8, 7, 6, 5, 4, 3])).toEqual([3, 4, 5, 6, 7, 8, 9]);
  });

  test('should handle an array with duplicate elements', () => {
    expect(quickSort([4, 2, 4, 1, 3, 4])).toEqual([1, 2, 3, 4, 4, 4]);
  });

  test('should handle an array with one element', () => {
    expect(quickSort([5])).toEqual([5]);
  });

  test('should handle an empty array', () => {
    expect(quickSort([])).toEqual([]);
  });

  test('should handle an array with negative numbers', () => {
    expect(quickSort([-3, -1, -4, -2, 0, 2, 1])).toEqual([
      -4, -3, -2, -1, 0, 1, 2,
    ]);
  });

  test('should handle an array with all identical numbers', () => {
    expect(quickSort([3, 3, 3, 3, 3])).toEqual([3, 3, 3, 3, 3]);
  });

  test('should handle an array with both positive and negative numbers', () => {
    expect(quickSort([3, -2, 5, -1, 4, -3, 2])).toEqual([
      -3, -2, -1, 2, 3, 4, 5,
    ]);
  });

  test('should handle a very large array', () => {
    const largeArray = Array.from({ length: 1000 }, () =>
      Math.floor(Math.random() * 1000)
    );
    const sortedArray = [...largeArray].sort((a, b) => a - b);
    expect(quickSort(largeArray)).toEqual(sortedArray);
  });

  test('should handle an array with only one type of number', () => {
    expect(quickSort([7, 7, 7, 7, 7, 7, 7])).toEqual([7, 7, 7, 7, 7, 7, 7]);
  });
});
