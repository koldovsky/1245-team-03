//Convert a string to an array
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(' ');
}

//DNA to RNA Conversion 
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replaceAll('T','U');
}

//Find Maximum and Minimum Values of a List
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list){
  return Math.min(...list);
}

var max = function(list){
  return Math.max(...list);
}

//Smallest value of an array
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  if (toReturn === 'value') {
    return Math.min(...arr);
  } return arr.indexOf(Math.min(...arr))
}

//You Can't Code Under Pressure
//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  return i * 2;
}
  
//Twice as old
//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2)
}

//Get Nth Even Number
//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n){
  return 2*n-2
}

//What's the real floor?
//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  if (n <= 0) {
    return n;
  } else if (n <= 13) {
    return n-1;
  } else {
    return n-2;
  }
}

//Beginner Series #2 Clock
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s){
  let milisecondsInSeconds = s * 1000;
  let milisecondsInMinute = m * 60000;
  let milisecondsInHour = h * 3600000;
  
  return milisecondsInSeconds + milisecondsInMinute + milisecondsInHour
}

//Is n divisible by x and y?
//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return (n % x === 0) && (n % y === 0)
}