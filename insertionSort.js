const numbers = [99, 44, 21, 1, 58, 65, 1, 5, 3, 88, 54, 22];

function insertionSort(numbersArr) {
  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] >= numbersArr[numbersArr.length - 1]) {
      numbersArr.push(numbersArr.splice(i, 1)[0]);
    } else if (numbersArr[i] <= numbersArr[0]) {
      numbersArr.unshift(numbersArr.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (
          numbersArr[i] >= numbersArr[j - 1] &&
          numbersArr[i] <= numbersArr[j]
        ) {
          numbersArr.splice(j, 0, numbersArr.splice(i, 1)[0]);
        }
      }
    }
  }
  return numbersArr
}

console.log(insertionSort(numbers));
