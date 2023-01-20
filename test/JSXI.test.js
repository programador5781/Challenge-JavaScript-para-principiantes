const encontrarNumerosPrimos = require("../Exercises/JSXI")


describe("Encontrando números primos", () => {
    test("Debe devolver [2, 3, 5, 7, 11] para el número 12", () => {
      expect(encontrarNumerosPrimos(12)).toEqual([2, 3, 5, 7, 11]);
    });
    
    test("Debe devolver [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] para el número 30", () => {
      expect(encontrarNumerosPrimos(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });
  
    test("Debe devolver [] para el número 1", () => {
      expect(encontrarNumerosPrimos(1)).toEqual([]);
    });
  
    test("Debe devolver [2] para el número 2", () => {
      expect(encontrarNumerosPrimos(2)).toEqual([2]);
    });
  });
  