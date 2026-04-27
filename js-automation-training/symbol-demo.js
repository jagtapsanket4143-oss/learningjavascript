let sym1 = Symbol("testId");
let sym2 = Symbol("testId");

console.log("Are symbols equal?", sym1 === sym2); // false

console.log("Type of sym1:", typeof sym1);
console.log("Description of sym1:", sym1.description);
console.log("Description of sym2:", sym2.description);

// Symbols as object keys
let user = {};

user[sym1] = "User A";
user[sym2] = "User B";

console.log(user[sym1]); 
console.log(user[sym2]); 