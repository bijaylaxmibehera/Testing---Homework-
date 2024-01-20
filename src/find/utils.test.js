import { findCommonElement, findFirstPositiveNumber } from "./utils";

describe("find", () => {
  describe("findFirstPositiveNumber", () => {
    test("Find first positive number", () => {
      expect(findFirstPositiveNumber([3, 7, -2, 9, -5])).toBe(3);
    });
    test("Find first positive number in an array with only negative numbers", () => {
      expect(findFirstPositiveNumber([-3, -7, -2, -9, -5])).toBeUndefined(
        undefined,
      );
    });
    test("Find first positive number in an array with decimal numbers", () => {
      expect(findFirstPositiveNumber([3.5, 7.2, 2.1, 9.7, 5.3])).toBe(3.5);
    });
    // test("Check if the function throws an error with invalid input", () => {
    //   expect(findFirstPositiveNumber("invalid")).toThrowError("invalid input");
    // });
  });
  describe("findCommonElement", () => {
    test("Find a common element", () => {
      expect(findCommonElement([2, 4, 6, 8, 10], [5, 7, 8, 10, 12])).toBe(8);
    });
    test("Find a common element in arrays with no common elements", () => {
      expect(findCommonElement([2, 4, 6], [5, 7, 9])).toBe(undefined);
    });
    test("Find a common element when one array is empty", () => {
      expect(findCommonElement([], [5, 7, 8, 10, 12])).toBe(undefined);
    });
    test("Find a common element when both arrays are empty", () => {
      expect(findCommonElement([], [])).toBe(undefined);
    });
    // test("Check if the function throws an error with invalid input", () => {
    //   expect(findCommonElement("invalid1", "invalid2")).toThrowError(
    //     "invalid input",
    //   );
    // });
  });
});
