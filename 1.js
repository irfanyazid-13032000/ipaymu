function isValidBrackets(s) {
  const stack = [];
  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '[',
    '>': '<'
  };

  for (let char of s) {
    if (Object.values(bracketMap).includes(char)) {
      //mencocokkan dengan value yang ada di bracketMap
      stack.push(char);
    } else if (char in bracketMap) {
      // mencocokkan dengan key yang ada di bracketMap
      if (stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  // String valid jika tidak ada sisa pembuka di stack
  return stack.length === 0;
}

// Contoh penggunaan
console.log(isValidBrackets("([{}]"));
console.log(isValidBrackets("(]"));
console.log(isValidBrackets("()"));
