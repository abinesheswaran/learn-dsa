const CustomArray = require('.');

describe('CustomArray', () => {
  let arr;

  beforeEach(() => {
    arr = new CustomArray(5, 8);
  });

  test('should initialize correctly', () => {
    expect(arr.size()).toBe(5);
    expect(arr.length()).toBe(0);
  });

  test('should push elements correctly', () => {
    arr.push(10);
    arr.push(20);
    expect(arr.length()).toBe(2);
    expect(arr.find(0)).toBe(10);
    expect(arr.find(1)).toBe(20);
  });

  test('should throw error when pushing beyond size', () => {
    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr.push(4);
    arr.push(5);
    expect(() => arr.push(6)).toThrow('Array out of bound Error!');
  });

  test('should pop elements correctly', () => {
    arr.push(10);
    arr.pop();
    expect(arr.length()).toBe(0);
  });

  test('should throw error when popping empty array', () => {
    expect(() => arr.pop()).toThrow('Nothing to pop!');
  });

  test('should insert elements at correct index', () => {
    arr.push(10);
    arr.push(20);
    arr.insertAt(30, 1);
    expect(arr.find(1)).toBe(30);
  });

  test('should throw error when inserting out of bounds', () => {
    expect(() => arr.insertAt(10, 10)).toThrow('Index out of bound Error!');
  });

  test('should shift elements correctly', () => {
    arr.push(10);
    arr.push(20);
    arr.shift();
    expect(arr.find(0)).toBe(20);
    expect(arr.length()).toBe(1);
  });

  test('should throw error when shifting empty array', () => {
    expect(() => arr.shift()).toThrow('Nothing to shift!');
  });

  test('should unshift elements correctly', () => {
    arr.push(30);
    arr.unshift([10, 20]);
    expect(arr.find(0)).toBe(10);
    expect(arr.find(1)).toBe(20);
    expect(arr.find(2)).toBe(30);
  });

  test('should throw error when unshifting beyond size', () => {
    expect(() => arr.unshift([1, 2, 3, 4, 5, 6])).toThrow('Array out of bound Error!');
  });

  test('should find elements correctly', () => {
    arr.push(10);
    expect(arr.find(0)).toBe(10);
  });

  test('should throw error when finding out of bounds', () => {
    expect(() => arr.find(1)).toThrow('Index out of bound! Error');
  });

  test('should find index of elements correctly', () => {
    arr.push(10);
    arr.push(20);
    expect(arr.findIndex(20)).toBe(1);
    expect(arr.findIndex(30)).toBe(-1);
  });

  test('should find last index of elements correctly', () => {
    arr.push(10);
    arr.push(20);
    arr.push(10);
    expect(arr.findLastIndex(10)).toBe(2);
    expect(arr.findLastIndex(30)).toBe(-1);
  });

  test('should slice elements correctly', () => {
    arr.push(10);
    arr.push(20);
    arr.push(30);
    expect(arr.slice(0, 2)).toEqual([10, 20]);
  });

  test('should splice elements correctly', () => {
    arr.push(10);
    arr.push(20);
    arr.push(30);
    arr.splice(1, 1, [40, 50]);
    expect(arr.find(1)).toBe(40);
    expect(arr.find(2)).toBe(50);
  });

  describe('CustomArray - Splice Method', () => {
    test('should delete one element without inserting new ones', () => {
      const arr = new CustomArray(5, 8);
      arr.push(10);
      arr.push(20);
      arr.push(30);
      arr.splice(1, 1, []); 
      expect(arr.length()).toBe(2);
      expect(arr.find(0)).toBe(10);
      expect(arr.find(1)).toBe(30);
      expect(() => arr.find(2)).toThrow('Index out of bound! Error');
    });
  });
});