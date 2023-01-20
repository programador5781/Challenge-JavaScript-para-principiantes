/*Merge Two Sorted Lists - JSV - Nível de dificultad - Easy
Se proporciona la clase ListNode. No la modifiques o cambies.

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
La clase ListNode se usa para crear una estructura de datos llamada "Lista enlazada" (linked list en inglés).
¿Qué debes hacer?
Se te dan los encabezados de dos listas enlazadas ordenadas list1 y list2.Combinar las dos listas en una lista ordenada.
La lista debe hacerse empalmando los nodos de las dos primeras listas.Devuelve el encabezado de la lista enlazada fusionada.

Ejemplo 1 :
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Ejemplo 2:
Input: list1 = [], list2 = []
Output: []

Ejemplo 3:
Input: list1 = [], list2 = [0]
Output: [0]

Restricciones:
🔴 El número de nodos en ambas listas está en el rango [0, 50]. 
🔴 -100 <= Node.val <= 100
🔴 Tanto list1 como list2 se ordenan en orden no decreciente.

*/
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// No modifiques nada arriba de esta línea.




function mergeTwoLists(list1, list2) {
    // Tu código acá:
    
}






// No cambies nada después de esta línea
module.exports = mergeTwoLists;