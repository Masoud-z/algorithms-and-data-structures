const numbers = [99, 44, 21, 1, 58, 65, 1, 5, 3, 88, 54, 22];

function selectionSort(numbersArr) {
  for (let i = 0; i < numbersArr.length; i++) {
    let minNumber = numbersArr[i];
    let position = null;
    for (let j = i; j < numbersArr.length; j++) {
      if (numbersArr[j] < minNumber) {
        minNumber = numbersArr[j];
        position = j;
      }
    }
    if (position) {
      numbersArr[position] = numbersArr[i];
      numbersArr[i] = minNumber;
    }
  }

  return numbersArr;
}

console.log(selectionSort(numbers));
