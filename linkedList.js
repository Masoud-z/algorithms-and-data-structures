class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    this.tail.next = { value, next: null };
    this.tail = this.tail.next;
    this.length++;
    return this;
  }

  prepend(value) {
    this.head = {
      value: value,
      next: this.head,
    };
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index < 0) {
      throw new Error("Index should be equal or greater than 0!");
    }
    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    } else {
      let prevNode = this.traverseToIndex(index - 1);

      const newNode = { value, next: prevNode.next };
      prevNode.next = newNode;
      this.length++;
      return newNode;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index is not valid!");
    }
    if (index === 0) {
      const newHead = this.head.next;
      this.head = newHead;
    } else {
      const prevNode = this.traverseToIndex(index - 1);
      prevNode.next = prevNode.next.next;
      if (index === this.length - 1) {
        this.tail = prevNode;
      }
    }
    this.length--;
  }

  reverse() {
    let currentNode = this.head;
    let nextNode = currentNode.next;
    while (nextNode) {
      let temp = nextNode.next;
      nextNode.next = currentNode;
      currentNode = nextNode;
      nextNode = temp;
    }
    this.head.next = null;
    this.tail = this.head;
    this.head = currentNode;
    return this;
  }

  traverseToIndex(index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index is not valid!");
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  printList() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}

const myLinkedList = new LinkedList(0);

myLinkedList.append(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.append(50);
myLinkedList.append(60);

console.log(myLinkedList.reverse());
myLinkedList.printList();

// console.log(myLinkedList.head);
// console.log(myLinkedList.length);
// console.log(myLinkedList.tail);
// console.log(myLinkedList);

// console.log("------+++++++++++++++------");
// console.log("------++++prepend++++------");
// console.log("------+++++++++++++++------");

// myLinkedList.prepend(-1);

// console.log(myLinkedList.head);
// console.log(myLinkedList.length);
// console.log(myLinkedList.tail);
// console.log(myLinkedList);

// myLinkedList.printList();
// console.log("------+++++++++++++++------");
// myLinkedList.remove(6);
// console.log("------+++++++++++++++------");
// myLinkedList.printList();
