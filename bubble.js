const numbers = [99, 44, 21, 1, 58, 65, 1, 5, 3, 88, 54, 22];

function bubbleSort(numbersArr) {
  for (let i = 0; i < numbersArr.length; i++) {
    for (let j = i + 1; j < numbersArr.length; j++) {
      if (numbersArr[j] < numbersArr[i]) {
        const firstNumber = numbersArr[i];
        numbersArr[i] = numbersArr[j];
        numbersArr[j] = firstNumber;
      }
    }
  }

  return numbersArr;
}

console.log(bubbleSort(numbers));
