//Find the smallest integer in the array
//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascripthttps://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
function findSmallestInt(arr) {
  return Math.min(...arr);
}

//Geometry Basics: Circle Circumference in 2D
//https://www.codewars.com/kata/58e43389acfd3e81d5000a88/javascript
function circleCircumference(circle) {
  return +(2 * Math.PI * circle.radius).toFixed(6);
}

//Training JS #12: loop statement --for..in and for..of
//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj){
  //coding here
  let result = [];
  for (let key in obj) {
    if (key.length === 5) {
      result.push(key); 
    }
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  return result;
}

//Understanding closures - the basics
//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {
  var res = [];

  for (let i = 0; i < n; i++) {
    res.push(function() {
      return i;
    });
  }
  return res;
}

//Fun with ES6 Classes #2 - Animals and Inheritance
//https://www.codewars.com/kata/56f935002e6c0d55fa000d92/solutions/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

