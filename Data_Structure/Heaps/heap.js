class Heap {
  heap = [];
  constructor() {}
  add(val) {
    this.heap.push(val);
  }
  print() {
    this.heap.forEach((node, i) => {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      console.log(node, this.heap[left], this.heap[right]);
    });
  }
}

let heap = new Heap();
heap.add(10);
heap.add(20);
heap.add(30);
heap.add(40);
heap.add(50);
heap.add(60);
heap.print();