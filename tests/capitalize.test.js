import capitalize from "../src/capitalize.js";

test("capitalize first letter", () => {
  expect(capitalize("test")).toBe("Test");
});

test("works with single letter", () => {
  expect(capitalize("m")).toBe("M");
});

test("leaves already capitalized string", () => {
  expect(capitalize("JavaScript")).toBe("JavaScript");
});

test("returns empty string if there is no input", () => {
  expect(capitalize("")).toBe("");
});

test("trims whitespaces and capitalize first letter ", () => {
  expect(capitalize("  something")).toBe("Something");
});

test("handles strings starting with non-letters", () => {
  expect(capitalize("444click")).toBe("444click");
  expect(capitalize("?hello")).toBe("?hello");
});
