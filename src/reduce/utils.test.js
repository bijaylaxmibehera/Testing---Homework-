import {
  findMaxNumber,
  countPositiveNumbers,
  flattenNestedArrays,
  groupByProperty,
} from "./utils";

describe("reduce", () => {
  describe("findMaxNumber", () => {
    test("Find maximum in a positive number array", () => {
      expect(findMaxNumber([3, 7, 2, 9, 5])).toBe(9);
    });
    test("Find maximum in a negative number array", () => {
      expect(findMaxNumber([-3, -7, -2, -9, -5])).toBe(-2);
    });
    test("Find maximum in an array with identical elements", () => {
      expect(findMaxNumber([7, 7, 7, 7])).toBe(7);
    });
    // test("Ensure original array remains unchanged", () => {
    //   expect(findMaxNumber([3, 7, 2, 9, 5])).toEqual([3, 7, 2, 9, 5]);
    // });
    test("Find maximum in an array with decimal numbers", () => {
      expect(findMaxNumber([3.5, 7.2, 2.1, 9.7, 5.3])).toBe(9.7);
    });
    // test("Find maximum in an empty array", () => {
    //   expected(findMaxNumber([])).toBeUndefined(undefined);
    // });
  });
  describe("countPositiveNumbers", () => {
    test("Count positive numbers in an array with mixed numbers", () => {
      expect(countPositiveNumbers([3, -7, 1, 9, -5])).toBe(3);
    });
    test("Count positive numbers in an array with all positive numbers", () => {
      expect(countPositiveNumbers([3, 7, 2, 9, 5])).toBe(5);
    });
    test("Count positive numbers in an array with all negative numbers", () => {
      expect(countPositiveNumbers([-3, -7, -2, -9, -5])).toBe(0);
    });
    test("Count positive numbers in an array with decimal numbers", () => {
      expect(countPositiveNumbers([3.5, 7.2, -2.1, 9.7, -5.3])).toBe(3);
    });
  });
  describe("flattenNestedArrays", () => {
    test("Flatten nested arrays with mixed elements", () => {
      expect(
        flattenNestedArrays([
          [1, 2],
          [3, 4],
          [5, 6],
        ]),
      ).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test("Flatten nested arrays with arrays of different lengths", () => {
      expect(flattenNestedArrays([[1, 2], [3, 4, 5], [6]])).toEqual([
        1, 2, 3, 4, 5, 6,
      ]);
    });
    test("Flatten nested arrays with empty arrays", () => {
      expect(flattenNestedArrays([[], [], []])).toEqual([]);
    });
    test("Flatten nested arrays with arrays containing non-numeric elements", () => {
      expect(
        flattenNestedArrays([
          [1, 2],
          ["a", "b"],
          [3, 4],
        ]),
      ).toEqual([1, 2, "a", "b", 3, 4]);
    });
    test("Flatten an empty array of nested arrays", () => {
      expect(flattenNestedArrays([])).toEqual([]);
    });
    // test("Ensure original nested arrays remain unchanged", () => {
    //   expect(
    //     flattenNestedArrays([
    //       [1, 2],
    //       [3, 4],
    //       [5, 6],
    //     ]),
    //   ).toEqual([
    //     [1, 2],
    //     [3, 4],
    //     [5, 6],
    //   ]);
    // });
    // test("Check if the function throws an error with invalid input", () => {
    //   expect(flattenNestedArrays("invalid")).toThrowError("invalid input");
    // });
  });
  describe("groupByProperty", () => {
    const students = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Carol", age: 25 },
    ];

    test("Group objects by an existing property", () => {
      expect(groupByProperty(students, "age")).toEqual({
        25: [
          { name: "Alice", age: 25 },
          { name: "Carol", age: 25 },
        ],
        30: [{ name: "Bob", age: 30 }],
      });
    });
    // test("Group objects by an empty property", () => {
    //   expect(groupByProperty(students, "")).toEqual({});
    // });
    test("Group objects with no objects", () => {
      expect(groupByProperty([], "age")).toEqual({});
    });
  });
});
