//Messi Goals
//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }

//Make negative  
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
// Code?
if (num >= 0) {
  return 0 - num
} else {
  return num
}
}

//Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move (position, roll) {
    // return the new position
    return position + roll * 2
  }

//Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
  // Add code here
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

//Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
    return Math.floor(time / 2);
  }
  
//Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
    return (flower1 % 2) !== (flower2 % 2);
}

