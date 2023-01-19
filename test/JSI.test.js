const longestCommonPrefix = require('./JSI');


describe('longestCommonPrefix', () => {
    test('Test case 1: ["flower", "flow", "flight"]', () => {
        let strs = ["flower", "flow", "flight"];
        expect(longestCommonPrefix(strs)).toBe("fl");
    });

    test('Test case 2: ["dog", "racecar", "car"]', () => {
        let strs = ["dog", "racecar", "car"];
        expect(longestCommonPrefix(strs)).toBe("");
    });

    test('Test case 3: ["car", "car", "car"]', () => {
        let strs = ["car", "car", "car"];
        expect(longestCommonPrefix(strs)).toBe("car");
    });
});
