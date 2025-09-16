let alphabet = "abcdefghijklmnopqrstuvwxyz";

function shiftChar(char, shift) {
  const lower = char.toLowerCase();
  const index = alphabet.indexOf(lower);

  if (index === -1) return char;

  let newIndex = index + shift;

  while (newIndex >= 26) {
    newIndex = newIndex - 26;
  }

  while (newIndex < 0) {
    newIndex = newIndex + 26;
  }

  const shiftedChar = alphabet[newIndex];

  if (char === lower) {
    return shiftedChar;
  } else {
    return shiftedChar.toUpperCase();
  }
}

export default function caesarCipher(str, shift) {
  const chars = str.split("");

  const shiftedChar = chars.map((c) => shiftChar(c, shift));

  return shiftedChar.join("");
}
