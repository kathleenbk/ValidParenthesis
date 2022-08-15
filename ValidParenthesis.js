// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false


// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function (s) {
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    let arr = [];
    for (let i of s) {
        if (i === '(' || i === "[" || i === "{") {
            arr.push(i);
        }
        if (i === ')' || i === "]" || i === "}") {
            let j = arr.pop();
            if (map[i] !== j) {
                return false;
            };
        };
    };
    if (arr == false) {
        return true;
    } else return false;
};



console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
