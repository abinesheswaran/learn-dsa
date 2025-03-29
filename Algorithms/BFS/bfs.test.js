const BinaryTree = require('../../Data_Structure/Trees/BinaryTree/binaryTree');
const bfs = require('./bfs');

describe('BinaryTree - BFS Function', () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(18);
  });

  test('should return true if value is found in BFS', () => {
    expect(bfs(tree, 15)).toBe(true);
    expect(bfs(tree, 3)).toBe(true);
    expect(bfs(tree, 7)).toBe(true);
  });

  test('should return false if value is not found in BFS', () => {
    expect(bfs(tree, 1)).toBe(false);
    expect(bfs(tree, 20)).toBe(false);
  });

  test('should traverse in BFS order', () => {
    const visited = [];
    function bfsOrder() {
      const arr = [tree.head];
      for (let i = 0; i < arr.length; i++) {
        const node = arr[i];
        visited.push(node.value);
        if (node.left) arr.push(node.left);
        if (node.right) arr.push(node.right);
      }
    }
    bfsOrder();
    expect(visited).toEqual([5, 3, 15, 7, 18, 12]); // Expected BFS order
  });
});
