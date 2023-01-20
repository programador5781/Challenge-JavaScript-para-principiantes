const removeDuplicates = require("../Exercises/JSVI");

describe('removeDuplicates', () => {
    test('debería devolver 0 al pasar un array vacío', () => {
      expect(removeDuplicates([])).toBe(0);
    });
  
    test('debería devolver el mismo array al pasar un array de números únicos', () => {
      expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
    });
  
    test('debería devolver un array con números únicos y sin elementos vacíos al final al pasar un array con números repetidos', () => {
        expect(removeDuplicates([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });
    
   
    test('debería lanzar una excepción al pasar un array con números y caracteres mezclados', () => {
        expect(() => removeDuplicates([1, 2, 'a', 'b'])).toThrow();
    });    
  
    test('debería devolver un array de números únicos en orden inverso al pasar un array de números en orden inverso', () => {
      expect(removeDuplicates([3, 2, 1])).toEqual([3, 2, 1]);
    });
  });
  