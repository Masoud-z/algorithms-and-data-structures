class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class QueueStack {
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
      newNode.prev = this.top;
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
      this.top = this.top.prev;
      this.top.next = null;
    }
    this.length--;
    return this;
  }

  enqueue(value) {
    const newNode = new NewNode(value);
    if (!this.button) {
      this.top = newNode;
      this.button = newNode;
    } else {
      newNode.next = this.button;
      this.button.prev = newNode;
      this.button = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.top) {
      return "Queue is empty!";
    } else if (this.length === 1) {
      this.top = null;
      this.button = null;
    } else {
      this.button = this.button.next;
      this.button.prev = null;
    }
    this.length--;
    return this;
  }
}

const myQueueStack = new QueueStack();

myQueueStack.push(0);
myQueueStack.push(1);
myQueueStack.push(2);
myQueueStack.push(3);
myQueueStack.push(4);

myQueueStack.enqueue(-1);
myQueueStack.enqueue(-2);
myQueueStack.enqueue(-3);
myQueueStack.enqueue(-4);
console.log("******************************");

// console.log(myQueueStack.peck());

console.log(myQueueStack.pop());
console.log(myQueueStack.pop());
console.log(myQueueStack.pop());
console.log(myQueueStack.pop());
console.log(myQueueStack.pop());
console.log(myQueueStack.pop());

console.log("******************************");

console.log(myQueueStack.dequeue());
console.log(myQueueStack.dequeue());
console.log(myQueueStack.dequeue());
console.log(myQueueStack.dequeue());
console.log(myQueueStack.dequeue());
console.log(myQueueStack.dequeue());
