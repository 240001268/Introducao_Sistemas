let x = 12;
//let x = 15; // This will cause a SyntaxError: Identifier 'x' has already been declared 

let b
if (true) {
let b = 10;
console.log(b); // Output: 10
}

console.log(b); // This will cause a ReferenceError: b is not defined

