1. https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
function findSmallestInt(arr) {
  return Math.min(...arr);
}

2. https://www.codewars.com/kata/58e43389acfd3e81d5000a88/solutions/javascript
function circleCircumference(circle) {
  return +(2 * Math.PI * circle.radius).toFixed(6);
}

3. https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  let result = [];
  //for ( in )
  Object.keys(obj).forEach(key => {
    key.length === 5 && result.push(key);
    obj[key].length === 5 && result.push(obj[key]);
  });
  return result;
}

4. https://www.codewars.com/kata/56f935002e6c0d55fa000d92/solutions/javascript
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
    return super.introduce() + '  Meow meow!';
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  introduce() {
    return super.introduce();
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}

5. https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        	res.push( () => i);
	}
	return res;
}