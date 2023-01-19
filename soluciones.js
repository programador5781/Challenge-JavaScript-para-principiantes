 // SOLUCIONES
/*
Solución al ejercicio JS.I - Nivel de dificultad - Easy.
Este código es una función en JavaScript que encuentra el prefijo común más largo de un conjunto de cadenas (strs). 
Primero, comprueba si la matriz de cadenas está vacía o solo tiene un elemento, en cuyo caso devuelve esa cadena o una cadena vacía, respectivamente. 
Luego, ordena la matriz de cadenas y almacena la primera y la última cadena en variables separadas. A continuación, itera a través de cada carácter 
de la primera cadena y compara ese carácter con el carácter en la misma posición en la última cadena. Si alguna vez encuentra una desigualdad, devuelve
la primera cadena desde el principio hasta esa posición. Si llega al final de la primera cadena sin encontrar una desigualdad, devuelve la primera cadena 
completa. */


function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }
    if (strs.length === 1) {
        return strs[0];
    }
    strs.sort();
    var first = strs[0];
    var last = strs[strs.length - 1];
    for (var i = 0; i < first.length; i++) {
        if (first[i] !== last[i]) {
            return first.substring(0, i);
        }
    }
    return first;
}



/* Solución al ejercicio JS.II - Nivel de dificultad - Easy.

Palindorme Number
Dado un entero x, devuelve verdadero si x es un palíndromo  y falso en caso contrario.
Ejemplo:
Input: x = 121
Output: true
Explicación: 121 se lee como 121 de izquierda a derecha y de derecha a izquierda.

Ejemplo 2:
input: x = -121
output: false
Explicación: De izquierda a derecha, se lee -121. De derecha a izquierda,
se convierte en 121-. Por lo tanto no es un palíndromo.
*/

function isPalindrome(x){
    // Tu código aquí:
  let y = x.toString().split("").reverse().join("")  ;
  if(y == x) return true;
  return false;
}