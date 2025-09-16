import analyzeArray from "../src/analyzeArray.js";

describe("analyzeArray", () => {
  test("returns average, min, max and length for array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("works with negative numbers", () => {
    expect(analyzeArray([-2, -8, -3, -4])).toEqual({
      average: -4.25,
      min: -8,
      max: -2,
      length: 4,
    });
  });

  test("works with a single number", () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test("returns null for empty array", () => {
    expect(analyzeArray([])).toBeNull();
  });

  test("returns null for non-array input", () => {
    expect(analyzeArray(123)).toBeNull();
  });
});
