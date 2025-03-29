class Node {
  value = null;
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }
  set left(pointer) {
    this.left = pointer;
  }
  set right(pointer) {
    this.right = pointer;
  }
}
class BinaryTree {
  head = null;
  constructor(value = null) {
    if (value) this.head = new Node(value);
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    } else {
      let temp = this.head;
      while (true) {
        if (value < temp.value) {
          if (!temp.left) {
            temp.left = node;
            break;
          }
          temp = temp.left;
        } else {
          if (!temp.right) {
            temp.right = node;
            break;
          }
          temp = temp.right;
        }
      }
    }
  }
  print(node = this.head, prefix = '', isLeft = true) {
    if (node === null) return;

    if (node.right) {
      this.print(node.right, prefix + (isLeft ? '│   ' : '    '), false);
    }

    console.log(prefix + (isLeft ? '└── ' : '┌── ') + node.value);

    if (node.left) {
      this.print(node.left, prefix + (isLeft ? '    ' : '│   '), true);
    }
  }
}
module.exports = BinaryTree;

