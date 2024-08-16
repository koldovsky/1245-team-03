// Petro
1.  function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
      return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    }

2. function makeNegative(num) {
    return num >= 0 ? -num : num;
   }

3. function move (position, roll) {
    return position + roll * 2;
  }

4. function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
  }

5. function litres(time) {
    return ~~ (time / 2);
}

6. function lovefunc(flower1, flower2){
    return flower1 %2 === 0 && flower2 %2 !== 0 || flower1 %2 !== 0 && flower2 %2 === 0;
  }