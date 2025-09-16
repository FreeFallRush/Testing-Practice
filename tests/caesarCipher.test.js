import caesarCipher from "../src/caesarCipher.js";

describe("caesarCipher", () => {
  test("returns shifted letters", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  test("wraps around", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("preserves case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("keeps punctuation and spaces unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("works with negative shifts", () => {
    expect(caesarCipher("def", -3)).toBe("abc");
  });

  test("returns empty string for empty imput", () => {
    expect(caesarCipher("", 3)).toBe("");
  });

  test("returns unchanged string with non-letters", () => {
    expect(caesarCipher("123 !?", 7)).toBe("123 !?");
  });

  test("works with shifts bigger than 26", () => {
    expect(caesarCipher("abc", 27)).toBe("bcd");
  });
});
