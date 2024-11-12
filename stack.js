class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.button = null;
    this.length = 0;
  }
  peck() {
    return this.top;
  }

  push(value) {
    const newNode = new NewNode(value);
    if (!this.button) {
      this.top = newNode;
      this.button = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return "Stack is empty!";
    } else if (this.length === 1) {
      this.top = null;
      this.button = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return this;
  }
}

const myStack = new Stack();

myStack.push(0);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

// console.log(myStack.peck());

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
