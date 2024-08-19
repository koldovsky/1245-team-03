//Task1. Messi Goals
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals+copaDelReyGoals+championsLeagueGoals;
}

//Task2. Make negative
function makeNegative(num) {
  return num>=0 ? -num : num;
}

//Task3. Game move
function move (position, roll) {
  return position+roll*2;
}

//Task4. Personalized Message
function greet (name, owner) {
  return name==owner ? 'Hello boss' : 'Hello guest';
}

//Task5. Keep Hydrated
function litres(time) {
  return Math.floor(time*0.5);
}

//Task6. Opposites Attract
function lovefunc(flower1, flower2){
  return flower1%2==0 ^ flower2%2==0 ? true : false;
}
