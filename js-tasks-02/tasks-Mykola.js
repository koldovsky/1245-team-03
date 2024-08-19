// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/5556282156230d0e5e000089
function DNAtoRNA(dna) {
  const dnaArray = dna.split("");
  const rnaArray = dnaArray.map((symbol) => {
    if (symbol === "T") {
      return "U";
    }
    return symbol;
  });
  return rnaArray.join("");
}
// https://www.codewars.com/kata/577a98a6ae28071780000989
function min(list) {
  return Math.min(...list);
}

function max(list) {
  return Math.max(...list);
}
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0
function min(arr, toReturn) {
  if (toReturn === "value") {
    return Math.min(...arr);
  } else if (toReturn === "index") {
    return arr.indexOf(Math.min(...arr));
  }
}
