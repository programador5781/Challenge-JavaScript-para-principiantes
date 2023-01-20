/*Remove Duplicates from Sorted Array JSVI - Nível de dificultad - Easy
Dada una matriz de números enteros ordenados en orden no decreciente, elimine los duplicados en el lugar de modo que cada elemento único aparezca solo una vez. El orden relativo de los elementos debe mantenerse igual.

Dado que es imposible cambiar la longitud de la matriz en algunos idiomas, debe colocar el resultado en la primera parte de la matriz nums. Más formalmente, si hay k elementos después de eliminar los duplicados, entonces los primeros k elementos de nums deberían contener el resultado final. No importa lo que dejes más allá de los primeros k elementos.

Devuelve k después de colocar el resultado final en las primeras k ranuras de nums.

No asigne espacio extra para otra matriz. Debe hacer esto modificando la matriz de entrada en el lugar con memoria adicional O (1).

Juez personalizado:

El juez probará su solución con el siguiente código:
let nums = [...]; //Matriz de entrada
let expectedNums = [...]; // La respuesta esperada con la longitud correcta

let k = removeDuplicates(nums); //Llama a su implementación

assert(k === expectedNums.length);
for (let i = 0; i < k; i++) {
    assert(nums[i] === expectedNums[i]);
}

Si se aprueban todas las afirmaciones, se aceptará su solución.

Ejemplo 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explicación: Tu función debería devolver k = 2(siendo esta la longitud), con los primeros dos elementos de nums siendo 1 y 2 respectivamente. ojo los test esperan un array no la longitud.

Ejemplo 2:
Input: núms = [ 0,0,1,1,2,2,3,3,4 ]
Ouptut: 5, núms = [ 0,1,2,3,4 ]
Explicación: Su función debe devolver k = 5(siendo esta la longitud), con los primeros cinco elementos de los números 0, 1, 2, 3 y 4 respectivamente.  ojo los test esperan un array no la longitud.

Restricciones:

🔴 1 <= nums.length <= 3 * 104
🔴 -100 <= nums[i] <= 100
🔴 nums se ordena en orden no decreciente.

 */

function removeDuplicates(nums){
    // Tu código aca:
    
}






// No cambies nada después de esta línea
module.exports = removeDuplicates;