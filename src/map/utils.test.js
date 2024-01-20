import {
  transformKeys,
  reverseStrings,
  squareRoots,
  removeVowels,
} from "./utils";

describe("map", () => {
  describe("transformKeys", () => {
    test("transforms lowercase to uppercase", () => {
      expect(
        transformKeys({ name: "John", age: 30, city: "New York" }),
      ).toStrictEqual(["NAME", "AGE", "CITY"]);
    });
    test("returns an empty array for an empty object", () => {
      expect(transformKeys({})).toEqual([]);
    });
    // test("does not modify the original object", () => {
    //   expect(transformKeys({ key1: "value1", key2: "value2" })).toEqual({
    //     key1: "value1",
    //     key2: "value2",
    //   });
    // });
  });
  describe("reverseStrings", () => {
    test("Reverse multiple strings", () => {
      expect(reverseStrings(["hello", "world", "jest"])).toEqual([
        "olleh",
        "dlrow",
        "tsej",
      ]);
    });
    test("Handle empty input array", () => {
      expect(reverseStrings([])).toEqual([]);
    });
    test("Reverse strings with spaces", () => {
      expect(reverseStrings(["hello world", "goodbye space"])).toEqual([
        "dlrow olleh",
        "ecaps eybdoog",
      ]);
    });
    // test("Original array remains unchanged", () => {
    //   expect(reverseStrings(["abc", "def"])).toEqual(["abc", "def"]);
    // });
    test("Reverse and check individual characters", () => {
      expect(reverseStrings(["abc", "123"])).toEqual(["cba", "321"]);
    });
  });
  describe("squareRoots", () => {
    test("Calculate square roots of positive integers", () => {
      expect(squareRoots([4, 9, 16])).toEqual([2, 3, 4]);
    });
    test("Calculate square roots of positive floating-point numbers", () => {
      expect(squareRoots([2.25, 0.25, 1.44])).toEqual([1.5, 0.5, 1.2]);
    });
    test("Handle empty input array", () => {
      expect(squareRoots([])).toEqual([]);
    });
    // test("Ensure original array remains unchanged", () => {
    //   expect(squareRoots([4, 9, 16])).toEqual([4, 9, 16]);
    // });
    // test("Ensure each result is close to the actual square root", () => {
    //   expect(squareRoots([25, 64, 100])).toBeCloseTo([4, 7, 9]);
    // });
  });
  describe("removeVowels", () => {
    test("Remove vowels from single word strings", () => {
      expect(removeVowels(["hello", "world"])).toEqual(["hll", "wrld"]);
    });
    test("Handle strings with mixed case vowels", () => {
      expect(removeVowels(["ApplE", "OrAngE"])).toEqual(["ppl", "rng"]);
    });
    test("Handle empty strings", () => {
      expect(removeVowels(["", "test", ""])).toEqual(["", "tst", ""]);
    });
    test("Handle strings with no vowels", () => {
      expect(removeVowels(["xyz", "qrst"])).toEqual(["xyz", "qrst"]);
    });
    // test("Ensure original array remains unchanged", () => {
    //   expect(removeVowels(["hello", "world"])).toEqual(["hello", "world"]);
    // });
    test("Handle strings with all vowels", () => {
      expect(removeVowels(["aeiou", "AEIOU"])).toEqual(["", ""]);
    });
  });
});
