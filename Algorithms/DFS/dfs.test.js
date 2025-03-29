const BinaryTree = require('../../Data_Structure/Trees/BinaryTree/binaryTree');
const { dfs, inorder, postorder, preorder } = require('./dfs');
describe('Binary Tree Operations', () => {
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

  // ✅ Test DFS
  test('dfs() should return true for root node', () => {
    expect(dfs(tree, 5)).toBe(true);
  });

  test('dfs() should return true for leftmost node', () => {
    expect(dfs(tree, 3)).toBe(true);
  });

  test('dfs() should return true for rightmost node', () => {
    expect(dfs(tree, 18)).toBe(true);
  });

  test('dfs() should return false for non-existing value', () => {
    expect(dfs(tree, 99)).toBe(false);
  });

  test('dfs() should return false for an empty tree', () => {
    let emptyTree = new BinaryTree();
    expect(dfs(emptyTree, 5)).toBe(false);
  });

  test('dfs() should work for a single-node tree', () => {
    let singleNodeTree = new BinaryTree();
    singleNodeTree.add(42);
    expect(dfs(singleNodeTree, 42)).toBe(true);
    expect(dfs(singleNodeTree, 99)).toBe(false);
  });

  test('dfs() should work with duplicate values (if allowed)', () => {
    tree.add(15); // Adding duplicate
    expect(dfs(tree, 15)).toBe(true);
  });

  // ✅ Test Traversals
  test('preorder() should return correct order', () => {
    expect(preorder(tree)).toEqual([5, 3, 15, 7, 12, 18]);
  });

  test('inorder() should return correct order', () => {
    expect(inorder(tree)).toEqual([3, 5, 7, 12, 15, 18]);
  });

  test('postorder() should return correct order', () => {
    expect(postorder(tree)).toEqual([3, 12, 7, 18, 15, 5]);
  });

  test('preorder() should return an empty array for an empty tree', () => {
    let emptyTree = new BinaryTree();
    expect(preorder(emptyTree)).toEqual([]);
  });

  test('inorder() should return an empty array for an empty tree', () => {
    let emptyTree = new BinaryTree();
    expect(inorder(emptyTree)).toEqual([]);
  });

  test('postorder() should return an empty array for an empty tree', () => {
    let emptyTree = new BinaryTree();
    expect(postorder(emptyTree)).toEqual([]);
  });

  test('preorder() should return correct order for a single-node tree', () => {
    let singleNodeTree = new BinaryTree();
    singleNodeTree.add(42);
    expect(preorder(singleNodeTree)).toEqual([42]);
  });

  test('inorder() should return correct order for a single-node tree', () => {
    let singleNodeTree = new BinaryTree();
    singleNodeTree.add(42);
    expect(inorder(singleNodeTree)).toEqual([42]);
  });

  test('postorder() should return correct order for a single-node tree', () => {
    let singleNodeTree = new BinaryTree();
    singleNodeTree.add(42);
    expect(postorder(singleNodeTree)).toEqual([42]);
  });

  test('traversal should work for an unbalanced tree (left-heavy)', () => {
    let leftHeavyTree = new BinaryTree();
    leftHeavyTree.add(10);
    leftHeavyTree.add(5);
    leftHeavyTree.add(2);
    leftHeavyTree.add(1);
    expect(preorder(leftHeavyTree)).toEqual([10, 5, 2, 1]);
    expect(inorder(leftHeavyTree)).toEqual([1, 2, 5, 10]);
    expect(postorder(leftHeavyTree)).toEqual([1, 2, 5, 10]);
  });

  test('traversal should work for an unbalanced tree (right-heavy)', () => {
    let rightHeavyTree = new BinaryTree();
    rightHeavyTree.add(10);
    rightHeavyTree.add(15);
    rightHeavyTree.add(20);
    rightHeavyTree.add(25);
    expect(preorder(rightHeavyTree)).toEqual([10, 15, 20, 25]);
    expect(inorder(rightHeavyTree)).toEqual([10, 15, 20, 25]);
    expect(postorder(rightHeavyTree)).toEqual([25, 20, 15, 10]);
  });
});
