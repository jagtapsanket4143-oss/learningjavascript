let max = Number.MAX_SAFE_INTEGER;

console.log("Max Safe Integer:", max);

console.log("max + 1 =", max + 1);
console.log("max + 2 =", max + 2);
console.log("max + 3 =", max + 3);

// BigInt version
let bigMax = 9007199254740991n;

// Fix with BigInt

console.log("bigMax + 1n =", bigMax + 1n);
console.log("bigMax + 2n =", bigMax + 2n);
console.log("bigMax + 3n =", bigMax + 3n);

console.log("Type of bigMax:", typeof bigMax);
