const MinHeap = require('./minheap'); // Adjust path if needed

describe('MinHeap', () => {
  let heap;

  beforeEach(() => {
    heap = new MinHeap();
  });

  test('should add elements and maintain heap property', () => {
    heap.add(10);
    heap.add(20);
    heap.add(5);
    heap.add(30);
    heap.add(40);

    expect(heap.heap[0]).toBe(5); // Min-Heap property
  });

  test('should remove the top element correctly (unheap)', () => {
    heap.add(10);
    heap.add(20);
    heap.add(5);
    heap.add(30);
    heap.add(40);

    expect(heap.unheap()).toBe(5); // Root element (smallest)
    expect(heap.heap[0]).toBe(10); // Next smallest should be at root
  });

  test('should handle multiple unheap calls correctly', () => {
    heap.add(10);
    heap.add(20);
    heap.add(5);
    heap.add(30);
    heap.add(40);

    expect(heap.unheap()).toBe(5);
    expect(heap.unheap()).toBe(10);
    expect(heap.unheap()).toBe(20);
    expect(heap.unheap()).toBe(30);
    expect(heap.unheap()).toBe(40);
    expect(heap.unheap()).toBe(null); // Heap is empty now
  });

  test('should handle an empty heap correctly', () => {
    expect(heap.unheap()).toBe(null); // Removing from empty heap
  });

  test('should correctly reorder after adding multiple elements', () => {
    heap.add(50);
    heap.add(30);
    heap.add(20);
    heap.add(10);
    heap.add(5);

    expect(heap.heap[0]).toBe(5); // Min-Heap property maintained
  });

  test('should print correctly', () => {
    console.log = jest.fn(); // Mock console.log
    heap.add(10);
    heap.add(20);
    heap.print();

    expect(console.log).toHaveBeenCalled(); // Ensure print() runs
  });
});
