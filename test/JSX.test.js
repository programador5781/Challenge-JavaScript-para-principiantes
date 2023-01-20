const isHappy = require("../Exercises/JSX");


describe("isHappy", () => {
    test("determines if a number is a happy number", () => {
        let n = 19;
        expect(isHappy(n)).toBe(true);

        n = 2;
        expect(isHappy(n)).toBe(false);

        n = 7;
        expect(isHappy(n)).toBe(true);

        n = 1;
        expect(isHappy(n)).toBe(true);

        n = 0;
        expect(isHappy(n)).toBe(false);

        n = -1;
        expect(isHappy(n)).toBe(false);
    });
});
