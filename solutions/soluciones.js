// SOLUCIONES - Estas son una manera de resolver los ejercicios, seguro ustedes encontrarán más.

/*Solución al ejercicio JS.I - Nivel de dificultad - Easy.
 */
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
Palindrome Number*/
function isPalindrome(x) {
  // Tu código aquí:
  let y = x.toString().split("").reverse().join("");
  if (y == x) return true;
  return false;
}



/*Solución al ejercicio JS.III - Nivel de dificultad - Easy.
Roman to Integer*/
function romanToInt(s) {
  // Tú código acá:
  var symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  var result = 0;

  for (var i = 0; i < s.length; i++) {
    var current = symbols[s[i]];
    var next = symbols[s[i + 1]];

    if (next > current) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
}



/*Solución al ejercicio JS.IV - Nivel de dificultad - Easy.
Valid Parentheses
*/
function isValid(s) {
  // Tu código acá:
  let stack = [];
    let mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else if (stack.length === 0 || stack[stack.length - 1] !== mapping[c]) {
            return false;
        } else {
            stack.pop();
        }
    }
    return stack.length === 0;
}


/*Solución al ejercicio JS.V - Nivel de dificultad - Easy.
Merge Two Sorted Lists
*/
class ListNode {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

function mergeTwoLists(list1, list2) {
  let dummy = new ListNode(0);
  let current = dummy;
  while (list1 && list2) {
      if (list1.val < list2.val) {
          current.next = list1;
          list1 = list1.next;
      } else {
          current.next = list2;
          list2 = list2.next;
      }
      current = current.next;
  }
  if (list1) {
      current.next = list1;
  }
  if (list2) {
      current.next = list2;
  }
  return dummy.next;
}


/*Solución al ejercicio JS.VI - Nivel de dificultad - Easy.
Remove Duplicates from Sorted Array*/
function removeDuplicates(nums){
  // Tu código aca:
  if(nums.length === 0){
      return 0;
  }
  for (let i = 0; i < nums.length; i++) {
      if (typeof nums[i] !== "number"){
          throw new Error("Array should contain only numbers");
      }
  }
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
          i++;
          nums[i] = nums[j];
      }
  }
  return nums.slice(0, i + 1);
}


/*Solución al ejercicio JS.VII - Nivel de dificultad - Easy.
Length of Last Word*/
function gthOlenfLastWord(s) {
  let words = s.trim().split(" ");
  if(words.length === 0){
      return 0;
  }
  return words[words.length - 1].length;
}


/*Solución al ejercicio JS.VIII - Nivel de dificultad - Easy.
plusOne*/
function plusOne(digits){
  // Tu código acá:
  for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
          digits[i]++;
          return digits;
      }
      digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
}


/*Solución al ejercicio JS.IX - Nivel de dificultad - Easy.
addBinary*/
function addBinary(a,b){
  let carry = 0;
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
      let sum = carry;
      if (i >= 0) {
          sum += parseInt(a[i]);
          i--;
      }
      if (j >= 0) {
          sum += parseInt(b[j]);
          j--;
      }
      carry = sum >> 1;
      result = (sum & 1) + result;
  }
  if (carry) {
      result = carry + result;
  }
  return result;
}



/*Solución al ejercicio JS.X - Nivel de dificultad - Easy.
isHappy*/
function isHappy(n){
  // Tu código acá:
  let seen = new Set();
  while (n !== 1) {
      if (seen.has(n)) {
          return false;
      }
      seen.add(n);
      let next = 0;
      while (n > 0) {
          let digit = n % 10;
          next += digit * digit;
          n = (n - digit) / 10;
      }
      n = next;
  }
  return true;
}


/*Solución al ejercicio JS.XI - Nivel de dificultad - Easy.
encontrarNumerosPrimos*/
function encontrarNumerosPrimos(num) {
  let primos = [];
  for (let i = 2; i <= num; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) {
      primos.push(i);
    }
  }
  return primos;
}



//SOLUCION AL DESAFIO JSXII DIFICULTAD MEDIUM
function longestPalindrome(s) {
  let n = s.length;
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
      dp[i] = new Array(n).fill(false);
  }
  let start = 0;
  let maxLength = 1;
  for (let i = 0; i < n; i++) {
      dp[i][i] = true;
  }
  for (let len = 2; len <= n; len++) {
      for (let i = 0; i < n - len + 1; i++) {
          let j = i + len - 1;
          if (s[i] === s[j] && (len === 2 || dp[i + 1][j - 1])) {
              dp[i][j] = true;
              if (len > maxLength) {
                  start = i;
                  maxLength = len;
              }
          }
      }
  }
  return s.substring(start, start + maxLength);
}