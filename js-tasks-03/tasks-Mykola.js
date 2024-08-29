// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
function findSmallestInt(arr) {
    return Math.min(...arr);
  }
// https://www.codewars.com/kata/58e43389acfd3e81d5000a88
function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
  }
// https://www.codewars.com/kata/5722b3f0bd5583cf44001000
function giveMeFive(obj) {
    const arr = [];
    for (let key in obj) {
      if (key.length === 5) {
        arr.push(key);
      }
      if (obj[key].length === 5) {
        arr.push(obj[key]);
      }
    }
    return arr;
  }