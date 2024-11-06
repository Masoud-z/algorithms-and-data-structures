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
}

const myLinkedList = new LinkedList(0);

myLinkedList.append(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.append(50);
myLinkedList.append(60);

console.log(myLinkedList.head);
console.log(myLinkedList.length);
console.log(myLinkedList.tail);
console.log(myLinkedList);

console.log("------+++++++++++++++------");
console.log("------++++prepend++++------");
console.log("------+++++++++++++++------");

myLinkedList.prepend(-1);

console.log(myLinkedList.head);
console.log(myLinkedList.length);
console.log(myLinkedList.tail);
console.log(myLinkedList);
