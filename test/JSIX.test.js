const addBinary = require("../Exercises/JSIX");

describe("addBinary", () => {
    test("sums two binary strings as a binary string", () => {
        let a = "11";
        let b = "1";
        expect(addBinary(a, b)).toBe("100");

        a = "1010";
        b = "1011";
        expect(addBinary(a, b)).toBe("10101");

        a = "1";
        b = "0";
        expect(addBinary(a, b)).toBe("1");
    });
});
