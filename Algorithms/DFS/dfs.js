const BinaryTree = require('../../Data_Structure/Trees/BinaryTree/binaryTree');

function depthFirstSearch(node, val) {
  if (node) {
    if (node.value === val) return true;
    return (
      depthFirstSearch(node.left, val) || depthFirstSearch(node.right, val)
    );
  }
  return false;
}

function preorder(tree) {
  const arr = [];
  const fn = (node) => {
    if (node) {
      arr.push(node.value);
      fn(node.left);
      fn(node.right);
    }
  };
  fn(tree.head);
  console.log(arr);
  return arr;
}

function inorder(tree) {
  const arr = [];
  const fn = (node) => {
    if (node) {
      fn(node.left);
      arr.push(node.value);
      fn(node.right);
    }
  };
  fn(tree.head);
  console.log(arr);
  return arr;
}

function postorder(tree) {
  const arr = [];
  const fn = (node) => {
    if (node) {
      fn(node.left);
      fn(node.right);
      arr.push(node.value);
    }
  };
  fn(tree.head);
  console.log(arr);
  return arr;
}

const dfs = (tree, value) => {
  const result = depthFirstSearch(tree.head, value);
  console.log(result);
  return result;
};

tree = new BinaryTree();
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(7);
tree.add(12);
tree.add(18);

dfs(tree, 12);
tree.print();
preorder(tree);
inorder(tree);
postorder(tree);

module.exports = { dfs, inorder, postorder, preorder };
