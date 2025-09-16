# Testing-Practice

This project is part of [The Odin Project Curriculum](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice).

## Assignment

The goal of this assignment is to **practice writing tests using Jest** and then implement functions that make those tests pass.

You are asked to write tests and implement the following:

### 1. Capitalize Function

- **Function:** `capitalize(str)`
- **Description:** Takes a string and returns it with the **first character capitalized**.

---

### 2. Reverse String Function

- **Function:** `reverseString(str)`
- **Description:** Takes a string and returns it **reversed**.

---

### 3. Calculator Object

- **Object:** `calculator`
- **Functions:**
  - `add(a, b)` → returns sum of `a` and `b`
  - `subtract(a, b)` → returns difference of `a` and `b`
  - `multiply(a, b)` → returns product of `a` and `b`
  - `divide(a, b)` → returns division of `a` by `b`

Each function should correctly perform the calculation and handle edge cases (e.g., dividing by zero).

---

### 4. Caesar Cipher Function

- **Function:** `caesarCipher(str, shift)`
- **Description:** Takes a string and a shift factor, returning the string with each character shifted.

**Important notes for testing:**

- Test **wrapping** from `z` to `a`.
  - Example: `caesarCipher('xyz', 3)` → `'abc'`.
- Test **case preservation**.
  - Example: `caesarCipher('HeLLo', 3)` → `'KhOOr'`.
- Test that **punctuation and non-alphabetical characters remain unchanged**.
  - Example: `caesarCipher('Hello, World!', 3)` → `'Khoor, Zruog!'`.
- You can split the function into helper functions, but only the **public `caesarCipher` function needs tests**.

---

### 5. Analyze Array Function

- **Function:** `analyzeArray(arr)`
- **Description:** Takes an array of numbers and returns an object with the following properties:
  - `average` → average of all numbers
  - `min` → smallest number
  - `max` → largest number
  - `length` → number of elements

**Example:**

```javascript
const object = analyzeArray([1, 8, 3, 4, 2, 6]);

console.log(object);
// Output:
{
  average: 4,
  min: 1,
  max: 8,
  length: 6
}
```
