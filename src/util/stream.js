const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const randomeStreamGenerator = () => {
  /* Do not repeate any charachter */
  let arr = [];
  while (arr.length < 20) {
    /* Generate randome number between 0 to 25 */
    let num = Math.floor(Math.random() * 25);
    if (!arr.includes(alphabets[num])) {
      arr.push(alphabets[num]);
    }
  }
  return arr.join("");

  /*
  // Repeatation possible
  return new Array(20)
    .fill()
    .map(() => {
      // Generate randome number between 0 to 25 
      let num = Math.floor(Math.random() * 25);
      return alphabets[num];
    })
    .join("");
    */
};
