function checkCommonItem(array1, array2) {
  return array1.some((item) => array2.includes(item));
}

function checkCommonItemTwoFor(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}

function checkCommonItemHashMap(array1, array2) {
  let map = {};
  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      map[array1[i]] = true;
    }
  }
  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false;
}

const arr1 = new Array(10000);
const arr2 = new Array(10000).fill(11);
// console.log(
//   "Two arrays have common item: ",
//   checkCommonItem([5, 1, 2, 3, 4], [5, 6, 7, 8, 9])
// );

const t1 = performance.now();
checkCommonItem(arr1, arr2);
const t2 = performance.now();

const t3 = performance.now();
checkCommonItemTwoFor(arr1, arr2);
const t4 = performance.now();

const t5 = performance.now();
checkCommonItemHashMap(arr1, arr2);
const t6 = performance.now();

console.log(
  `Time Elapsed with built in array functions: ${t2 - t1} milliseconds.`
);
console.log(`Time Elapsed with two for loop: ${t4 - t3} milliseconds.`);
console.log(`Time Elapsed with Hash Map: ${t6 - t5} milliseconds.`);
