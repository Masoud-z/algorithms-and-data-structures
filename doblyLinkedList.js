class DoublyLinkedList {
  constructor(value) {
    this.head = { value, prev: null, next: null };
    this.length = 1;
    this.tail = this.head;
  }

  append(value) {
    this.tail.next = { value, prev: this.tail, next: null };
    this.tail = this.tail.next;
    this.length++;
    return this;
  }

  prepend(value) {
    this.head = { value, prev: null, next: this.head };
    this.head.next.prev = this.head;

    this.length++;
    return this;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error("The index in not valid!");
    }
    if (index === 0) {
      this.append(value);
    } else if (index === this.length - 1) {
      prepend(value);
    } else {
      let prevNode = this.traverseToIndex(index - 1);
      prevNode.next = { value, prev: prevNode, next: prevNode.next };
      prevNode.next.next.prev = prevNode.next;
      this.length++;
      return this;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("The index in not valid!");
    }
    if (index === 0) {
      this.head = this.head.next;
    } else if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let prevNode = this.traverseToIndex(index - 1);
      prevNode.next.next.prev = prevNode;
      prevNode.next = prevNode.next.next;
    }
  }

  traverseToIndex(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("The index in not valid!");
    }
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

    if (index <= (this.length - 1) / 2) {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode;
    } else {
      let currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
      return currentNode;
    }
  }

  printList() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}

const myLinkedList = new DoublyLinkedList(1);

myLinkedList.append(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.append(50);
myLinkedList.append(60);

myLinkedList.remove(4);

myLinkedList.printList();

console.log("------+++++++++++++++------");
console.log("------+++++++++++++++------");

console.log("head: ", myLinkedList.head);
console.log("tail: ", myLinkedList.tail);
