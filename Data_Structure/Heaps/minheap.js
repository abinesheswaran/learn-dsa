class MinHeap {
  heap = [];
  constructor() {}
  reorder() {
    let lastpos = this.heap.length - 1;
    let parent = Math.floor(lastpos / 2);

    while (lastpos > 0 && this.heap[parent] > this.heap[lastpos]) {
      let temp = this.heap[lastpos];
      this.heap[lastpos] = this.heap[parent];
      this.heap[parent] = temp;
      lastpos = parent;
      parent = Math.floor((lastpos - 1) / 2);
    }
  }
  add(val) {
    this.heap.push(val);
    this.reorder();
  }
  print() {
    this.heap.forEach((node, i) => {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      console.log(node, this.heap[left] ?? '-', this.heap[right] ?? '-');
    });
    console.log('-----------------------------');
  }
  heapify(i) {
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest !== i) {
        [this.heap[i], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[i],
        ];
        i = smallest;
      } else break;
    }
  }
  unheap() {
    if (this.heap.length === 0) return null;

    let minValue = this.heap[0]; // Store the root value
    let lastElement = this.heap.pop(); // Remove last element

    if (this.heap.length > 0) {
      this.heap[0] = lastElement; // Move last element to root
      this.heapify(0); // Fix the heap
    }

    return minValue;
  }
}
module.exports = MinHeap;