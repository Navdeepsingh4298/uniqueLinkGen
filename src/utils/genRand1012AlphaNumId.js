function generateRandom1012AlphaNumericId() {
  const randChar = () => String.fromCharCode(Math.floor(Math.random() * 25) + 65); // A–Y
  const randNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const id =
    randChar() + randChar() + randChar() +                // 3 letters
    randNum(5, 16) +                                      // number 5–16
    randChar() + randChar() +                             // 2 letters
    randNum(8, 18) +                                      // number 8–18
    randChar() + randChar() + randChar();                 // 3 letters

  return id.toLowerCase();
}

export default generateRandom1012AlphaNumericId;

// console.log(generateRandom1012AlphaNumericId()); // e.g., "abc12de14fg"

