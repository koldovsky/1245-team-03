//Task1. Convert a string to an array
function stringToArray(string){
  return string.split(' ');
}

//Task2. DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.replaceAll('T', 'U')
}

//Task3. Find Maximum and Minimum Values of a List
var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}

//Task4. Smallest value of an array
//If condition will never change
function min(arr, toReturn) {
  const minInArr = Math.min(...arr);
  return toReturn === 'value' ? minInArr : arr.indexOf(minInArr);
}

//Task4. Smallest value of an array
//Without the Math
function min(arr, toReturn) {
  let minInArr = arr[0];
  let minInArrIndex;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= minInArr) {
      minInArr = arr[i];
      minInArrIndex = i;
    }
  }
  if (toReturn === "value") {
    return minInArr;
  } else if (toReturn === "index") {
    return minInArrIndex;
  }
}





//Additional tasks
//Task1. Double integer
function doubleInteger(i) {
  return i * 2;
}

//Task2. Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

//Task3. Return n-th even number
function nthEven(n){
  return (n * 2) - 2;
}

//Task4. What's the real floor
function getRealFloor(n) {
  switch (true){
      case n <= 0:
        return n;
      case n < 13:
        return n - 1;
      case n >= 13:
        return n - 2;
  }
}

//Task5. Clock
function past(h, m, s){
  return ((((h * 60) + m) * 60) + s) * 1000;
}

//Task6. Is n divisible by x and y
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
