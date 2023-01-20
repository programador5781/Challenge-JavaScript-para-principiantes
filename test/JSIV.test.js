const isValid = require('../Exercises/JSIV')



describe('isValid', () => {
    it('should return true for ()', () => {
        expect(isValid("()")).toBe(true);
    });
    it('should return true for ()[]{}', () => {
        expect(isValid("()[]{}")).toBe(true);
    });
    it('should return false for (]', () => {
        expect(isValid("(]")).toBe(false);
    });
    it('should return false for ([)]', () => {
        expect(isValid("([)]")).toBe(false);
    });
    it('should return true for {[]}', () => {
        expect(isValid("{[]}")).toBe(true);
    });
    it('should return true for ""', () => {
        expect(isValid("")).toBe(true);
    });
});

