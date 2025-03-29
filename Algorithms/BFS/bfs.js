function print(arr) {
  const val = [];
  for (let i = 0; i < arr.length; i++) {
    val.push(arr[i].value);
  }
  console.log(val.toString());
}
const bfs = (tree, value) => {
  if (!tree.head) return false;
  const arr = [tree.head];
  for (let i = 0; i < arr.length; i++) {
    const node = arr[i];
    if (node.value === value) {
      print(arr);
      return true;
    }
    if (node.left) arr.push(node.left);
    if (node.right) arr.push(node.right);
  }
  print(arr);
  return false;
};
module.exports = bfs;
