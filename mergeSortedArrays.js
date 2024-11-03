function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

function mergeSortedArraysForLoop(arr1, arr2) {
  let newArr = arr1.length !== 0 ? arr1 : arr2;

  if (arr1.length !== 0 && arr2.length !== 0) {
    for (let i = 0; i < arr2.length; i++) {
      newArr.push(arr2[i]);
    }
  }

  for (let i = 1; i < newArr.length; i++) {
    const current = newArr[i];
    if (newArr[i] < newArr[i - 1]) {
      newArr[i] = newArr[i - 1];
      newArr[i - 1] = current;
    }
  }
  return newArr;
}

function mergeSortedArraysWhileLoop(arr1, arr2) {
  const mergedArray = [];
  let itemArr1 = arr1[0];
  let itemArr2 = arr2[0];
  let arr1Index = 1;
  let arr2Index = 1;

  while (itemArr1 || itemArr2) {
    if (!itemArr2 || itemArr1 < itemArr2) {
      mergedArray.push(itemArr1);
      itemArr1 = arr1[arr1Index];
      arr1Index++;
    } else {
      mergedArray.push(itemArr2);
      itemArr2 = arr2[arr2Index];
      arr2Index++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArraysWhileLoop([0, 3, 4, 31], [4, 6, 30]));

const arr1 = new Array(10000).map((item) => Math.round(Math.random() * 100));
const arr2 = new Array(10000).map((item) => Math.round(Math.random() * 100));

const t1 = performance.now();
mergeSortedArrays(arr1, arr2);
const t2 = performance.now();

const t3 = performance.now();
mergeSortedArraysForLoop(arr1, arr2);
const t4 = performance.now();

console.log(
  `Time Elapsed with built in array functions: ${t2 - t1} milliseconds.`
);

console.log(`Time Elapsed with for loops: ${t4 - t3} milliseconds.`);
