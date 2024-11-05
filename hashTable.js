class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(name, value) {
    const index = this._hash(name);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([name, value]);
  }

  get(name) {
    const index = this._hash(name);
    const currentBucket = this.data[index];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === name) {
          return currentBucket[i];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      const currentBucket = this.data[i];
      if (this.data[i]) {
        // console.log("this.data[i]: ", this.data[i]);
        // console.log("this.data[i][0]: ", this.data[i][0]);
        // console.log("this.data[i][0][0]: ", this.data[i][0][0]);
        keys.push(this.data[i][0][0]);
      }
    }
    return keys;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("grapes", 10000);
myHashTable.set("apple", 2);
myHashTable.set("benana", 3);
myHashTable.set("test", 5);
myHashTable.set("new", 6);
myHashTable.set("new7", 7);
myHashTable.set("new8", 8);
console.log(myHashTable.get("grapes"));
console.log(myHashTable.keys());
console.log(myHashTable.data);
