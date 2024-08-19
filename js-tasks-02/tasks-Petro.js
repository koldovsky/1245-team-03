1.https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
  return string.split(' '); 
}

2. https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.split('T').join('U');
}

3. https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = function(list) {
    return Math.min(...list);
}

const max = function(list) {
    return Math.max(...list);
}

4. https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min (arr, toReturn) {
  let min = Math.min.apply(null, arr);
  return toReturn === "value" ? min : arr.indexOf(min);
}

5. https://www.codewars.com/kata/53ee5429ba190077850011d4/solutions/javascript
function doubleInteger(i) {
  return i * 2;
}

6. https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

7. https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/solutions/javascript
function nthEven(n) {
  return (n - 1) * 2;
}

8. https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  return n <= 0 ? n : n < 13 ? n-1 : n -2;
}

9. https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
  return ((h * 3600) + (m * 60) + s) * 1000;
}

10. https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}