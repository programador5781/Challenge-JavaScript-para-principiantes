const plusOne = require("../Exercises/JSVIII");


describe("plusOne", () => {
    test("plusOne a large integer represented as an array of digits", () => {
        let digits = [1, 2, 3];
        expect(plusOne(digits)).toEqual([1, 2, 4]);

        digits = [9, 9, 9];
        expect(plusOne(digits)).toEqual([1, 0, 0, 0]);

        digits = [1, 0, 9];
        expect(plusOne(digits)).toEqual([1, 1, 0]);
    });
});
