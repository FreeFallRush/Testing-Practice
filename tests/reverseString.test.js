import reverseString from "../src/reverseString.js";

test("reverses a string", () => {
  expect(reverseString("bla bla")).toBe("alb alb");
});

test("works with non-letters", () => {
  expect(reverseString("12345")).toBe("54321");
  expect(reverseString("?!@hi")).toBe("ih@!?");
});

test("works with a single character", () => {
  expect(reverseString("M")).toBe("M");
});

test("trims whitespaces and returns reverse string", () => {
  expect(reverseString("  Hello!  ")).toBe("!olleH");
});

test("returns empty string if there is no input", () => {
  expect(reverseString("")).toBe("");
});

test("returns empty string if only white spaces", () => {
  expect(reverseString("    ")).toBe("");
});

test("preserves case in reverse string", () => {
  expect(reverseString("CliCk")).toBe("kCilC");
});
