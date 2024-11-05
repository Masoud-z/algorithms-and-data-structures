function findFirstRecurring(array) {
  const hashMap = {};
  for (let i = 0; i < array.length; i++) {
    if (hashMap[array[i]] !== undefined) {
      return array[i];
    }

    hashMap[array[i]] = i;
  }
  return undefined;
}

console.log(findFirstRecurring([2, 5, 1, 3, 4, 2, 1, 5]));
