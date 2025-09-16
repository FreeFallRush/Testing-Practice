export default function reverseString(str) {
  if (!str) return "";
  str = str.trim();
  return str.split("").reverse().join("");
}
