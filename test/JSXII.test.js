const longestPalindrome = require("../Exercises/JSXII");

describe("longestPalindrome", () => {
    test("should return the longest palindromic substring in a given string", () => {
      expect(longestPalindrome("babad")).toEqual("bab");
      expect(longestPalindrome("cbbd")).toEqual("bb");
    });
  
    test("should handle empty input string", () => {
      expect(longestPalindrome("")).toEqual("");
    });
  
    test("should handle input string of length 1", () => {
      expect(longestPalindrome("a")).toEqual("a");
    });
  
    test("should handle input string with no palindrome", () => {
      expect(longestPalindrome("abcdefghijklmnopqrstuvwxyz")).toEqual("a");
    });
  });
  