//Convert a string to an array
function stringToArray(string) {
  return string.split(" ");
}

//DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
//Find Maximum and Minimum Values of a List
var min = function (list) {
  return list.sort((a, b) => a - b)[0];
};

var max = function (list) {
  return list.sort((a, b) => a - b)[list.length - 1];
};

//Smallest value of an array
function min(arr, toReturn) {
  return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}

// task Double Integer
function doubleInteger(i) {
  return i * 2;
}

// Twice as old

//Get Nth Even Number
function nthEven(n) {
  return n * 2 - 2;
}

//What's the real floor
function getRealFloor(n) {
  return n <= 0 ? n : n === 1 ? 0 : n < 13 ? n - 1 : n - 2;
}

//Clock
function past(h, m, s) {
  return 1000 * (h * 3600 + m * 60 + s);
}

//Is n divisible by x and y
function isDivisible(n, x, y) {
  return (n % x) + (n % y) === 0;
}
