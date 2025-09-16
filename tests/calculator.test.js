import calculator from "../src/calculator";

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(3, 4)).toBe(7);
    expect(calculator.add(-3, 2)).toBe(-1);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(8, 6)).toBe(2);
    expect(calculator.subtract(0, 7)).toBe(-7);
  });

  test("multiply two numbers", () => {
    expect(calculator.multiply(5, 3)).toBe(15);
    expect(calculator.multiply(-2, 3)).toBe(-6);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.divide(-9, 3)).toBe(-3);
  });

  test("returns error when dividing by zero", () => {
    expect(calculator.divide(6, 0)).toBe("Cannot divide by zero");
  });

  test("handles floating point numbers", () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
