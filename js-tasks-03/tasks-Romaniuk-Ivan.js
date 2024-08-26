//1. https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
function findSmallestInt(arr) {
    let minElement = arr[0];
    for (const value of arr) {
      if (Number.isInteger(value) && minElement > value ) {
        minElement = value;
      } 
    }
    return minElement
  }

  //2. https://www.codewars.com/kata/58e43389acfd3e81d5000a88/solutions/javascript
  function circleCircumference(circle) {
    return  +((2 * Math.PI * circle.radius).toFixed(6));
  }

  //3. https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
  function giveMeFive(obj) {
    const array = [];
    for (let key in obj) {
      if (key.length === 5) array.push(key);
      if (obj[key].length === 5) array.push(obj[key]);
    }
    return array;
  }

  //4. https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
  function buildFun(n){
	const res = []
	for (let i = 0; i< n; i++){
		res.push(function(){
			return(i)
		})
	}
	return res
}