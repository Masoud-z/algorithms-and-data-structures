function reverse(str) {
  return str.split("").reverse().join("");
}

const reverseES6 = (str) => [...str].reverse().join("");

function reverseForLoop(str) {
  if (typeof str !== "string") {
    throw new error("This function only accept string!");
  }

  const strArray = [];
  const lastWorld = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    strArray[i] = str[lastWorld - i];
  }
  return strArray.join("");
}

function reverseForLoopCourse(str) {
  if (typeof str !== "string") {
    throw new error("This function only accept string!");
  }

  const strArray = [];
  const lastWorld = str.length - 1;
  for (let i = lastWorld; i >= 0; i--) {
    strArray.push(str[i]);
  }
  return strArray.join("");
}

let thousandLs = "L".repeat(100000);

const t1 = performance.now();
reverse(thousandLs);
const t2 = performance.now();

const t3 = performance.now();
reverseForLoop(thousandLs);
const t4 = performance.now();

const t5 = performance.now();
reverseForLoopCourse(thousandLs);
const t6 = performance.now();

const t7 = performance.now();
reverseES6(thousandLs);
const t8 = performance.now();

console.log("reverse performance: ", t2 - t1);
console.log("reverseES6 performance: ", t8 - t7);
console.log("reverseForLoop performance: ", t4 - t3);
console.log("reverseForLoopCourse performance: ", t6 - t5);
