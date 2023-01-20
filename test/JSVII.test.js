const lengthOfLastWord = require("../Exercises/JSVII");


describe('lengthOfLastWord', () => {
    test('debería devolver 5 al pasar "Hello World"', () => {
      expect(lengthOfLastWord("Hello World")).toBe(5);
    });
  
    test('debería devolver 4 al pasar "   fly me   to   the moon  "', () => {
      expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
    });
  
    test('debería devolver 6 al pasar "luffy is still joyboy"', () => {
      expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
    });
  
    test('debería devolver 0 al pasar "    "', () => {
      expect(lengthOfLastWord("    ")).toBe(0);
    });
  
    test('debería devolver 4 al pasar "hello     "', () => {
      expect(lengthOfLastWord("hello     ")).toBe(5);
    });
  });
  