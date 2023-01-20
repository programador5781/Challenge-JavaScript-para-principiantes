const romanToInt = require('../Exercises/JSIII');

describe('Roman to int', () => {
    test('convert III to 3', () => {
        expect(romanToInt("III")).toBe(3);
    });
    test('convert LVIII to 58', () => {
        expect(romanToInt("LVIII")).toBe(58);
    });
    test('convert MCMXCIV to 1994', () => {
        expect(romanToInt("MCMXCIV")).toBe(1994);
    });
    test('convert MMMCMXCVI to 3996', () => {
        expect(romanToInt("MMMCMXCVI")).toBe(3996);
    });
    test('convert MMCDLXVI to 2466', () => {
        expect(romanToInt("MMCDLXVI")).toBe(2466);
    });
});
