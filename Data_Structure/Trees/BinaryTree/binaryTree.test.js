const BinaryTree = require('./binaryTree');

describe('BinaryTree Class', () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
  });

  test('should create an empty tree', () => {
    expect(tree.head).toBeNull();
  });

  test('should add the first node as root', () => {
    tree.add(10);
    expect(tree.head.value).toBe(10);
    expect(tree.head.left).toBeNull();
    expect(tree.head.right).toBeNull();
  });

  test('should add smaller values to the left', () => {
    tree.add(10);
    tree.add(5);
    expect(tree.head.left.value).toBe(5);
  });

  test('should add larger values to the right', () => {
    tree.add(10);
    tree.add(15);
    expect(tree.head.right.value).toBe(15);
  });

  test('should add multiple nodes in correct positions', () => {
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(18);

    expect(tree.head.value).toBe(10);
    expect(tree.head.left.value).toBe(5);
    expect(tree.head.right.value).toBe(15);
    expect(tree.head.left.left.value).toBe(3);
    expect(tree.head.left.right.value).toBe(7);
    expect(tree.head.right.left.value).toBe(12);
    expect(tree.head.right.right.value).toBe(18);
  });

  test('should handle duplicate values', () => {
    tree.add(10);
    tree.add(10); // Add duplicate
    expect(tree.head.value).toBe(10);
    expect(tree.head.left).toBeNull();
    expect(tree.head.right.value).toBe(10);
  });

  test('should print the tree (manual verification needed)', () => {
    console.log = jest.fn(); // Mock console.log
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.print();

    expect(console.log).toHaveBeenCalled(); // At least one print statement
  });
});
