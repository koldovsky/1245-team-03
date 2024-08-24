// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
function findSmallestInt(arr) {
    return Math.min(...arr);
}

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
    return circle.radius * 2 * Math.PI;
}

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
    var arrayResult = [];
    for (var key in obj) {
        if (key.length === 5) {
            arrayResult.push(key);
        }
        if (obj[key].length === 5) {
            arrayResult.push(obj[key]);
        }
    }
    return arrayResult;
}

// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age);
        this.legs = 0;
        this.species = "shark";
        this.status = status;
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age);
        this.legs = 4;
        this.species = "cat";
        this.status = status;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age);
        this.legs = 4;
        this.species = "dog";
        this.master = master;
        this.status = status;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}