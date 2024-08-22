// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
  return string.split(" ");
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = function(list){
  let newList = list.sort((a, b) => a - b);
  return newList[0];
}

const max = function(list){
    let newList = list.sort((a, b) => b - a);
    return newList[0];
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  switch(toReturn){
      case "value":
      return Math.min(...arr);
      case "index":
      return arr.indexOf(Math.min(...arr));
  }
}

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  i *= 2;
  return i;
}

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let a=dadYearsOld;
  let b=sonYearsOld;
  let i=0;
  for (i=0;i<100;i++){
    if  (a===2*b){
      return i;
    }
    a++;
    b++;
  }
  a=dadYearsOld;
  b=sonYearsOld;
  for (i=0;i<100;i++){
    if  (a===2*b){
      return i;
    }
    a--;
    b--;
  }
}

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n){
  return n*2-2;
}

// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  return n>13? n-2:n>0 ? n-1:n=n;
}

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s){
  const millisecondsInSecond = 1000;
  const millisecondsInMinute = 60 * 1000;
  const millisecondsInHour = 60 * 60 * 1000;
  return s * millisecondsInSecond + m * millisecondsInMinute + h * millisecondsInHour;
}

// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n%x===0&&n%y===0;
}
