const isPalindrome = require('../Exercises/JSII');


describe("isPalindrome()", () => {
    test("121 es un palíndromo", () => {
        expect(isPalindrome(121)).toBe(true);
    });

    test("-121 no es un palíndromo", () => {
        expect(isPalindrome(-121)).toBe(false);
    });

    test("1001 es un palíndromo", () => {
        expect(isPalindrome(1001)).toBe(true);
    });

    test("120 no es un palíndromo", () => {
        expect(isPalindrome(120)).toBe(false);
    });
});