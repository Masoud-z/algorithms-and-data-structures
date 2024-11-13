class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value > currentNode.value) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            return this;
          }
        } else {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            return this;
          }
        }
      }
    }
  }
  lookup(value) {}

  remove(value) {}
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(2);
tree.insert(5);
tree.insert(12);
tree.insert(1);
tree.insert(15);
tree.insert(11);

// console.log(traverse(tree.root));

console.log(tree.lookup(10));
console.log(tree.lookup(3));
console.log(tree.lookup(5));
console.log(tree.lookup(8));
console.log(tree.lookup(12));
console.log(tree.lookup(6));
console.log(tree.lookup(1));
console.log(tree.lookup(13));
console.log(tree.lookup(15));
console.log(tree.lookup(17));
console.log(tree.lookup(11));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
