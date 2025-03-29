const binarySearch = require('./binarysearch');

describe('Binary Search', () => {
  test('should return the correct index for values present in the array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(binarySearch(array, 1)).toBe(0);
    expect(binarySearch(array, 3)).toBe(2);
    expect(binarySearch(array, 9)).toBe(8);
    expect(binarySearch(array, 5)).toBe(4);
  });

  test('should return -1 for values not present in the array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(binarySearch(array, 0)).toBe(-1);
    expect(binarySearch(array, 10)).toBe(-1);
    expect(binarySearch(array, 4.5)).toBe(-1);
  });

  test('should handle edge cases', () => {
    expect(binarySearch([], 1)).toBe(-1);
    expect(binarySearch([5], 5)).toBe(0);
    expect(binarySearch([5], 3)).toBe(-1);
  });

  test('should work with arrays of even and odd lengths', () => {
    expect(binarySearch([2, 4, 6, 8], 6)).toBe(2);
    expect(binarySearch([2, 4, 6, 8], 5)).toBe(-1);

    expect(binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
    expect(binarySearch([1, 3, 5, 7, 9], 2)).toBe(-1);
  });
});
