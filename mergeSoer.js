const numbers = [99, 44, 21, 1, 58, 65, 1, 5, 3, 88, 54, 22];
// const numbers = [1, 2, 3, 4, 5];
// const numbers = [1, 2, 3, 4];

function mergeSort(array) {
  if (array.length === 1) return array;

  const left = array.slice(0, Math.floor(array.length / 2));
  const right = array.slice(Math.floor(array.length / 2));

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort(numbers));
// mergeSort(numbers);
