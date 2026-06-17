let totalTests = 50;
let passedTests = 45;
let failedTests = 5;

let passRate = (passedTests / totalTests) * 100;
let testSuiteName = "Login Test Suite";
let allPassed = (failedTests === 0);

console.log("==================================");
console.log("TEST METRICS DASHBOARD");
console.log("==================================");

console.log("Suite Name: " + testSuiteName);
console.log("Total Tests: " + totalTests);
console.log("Passed: " + passedTests);
console.log("Failed: " + failedTests);
console.log("Pass Rate: " + passRate + "%");
console.log("All Tests Passed: " + allPassed);

console.log("==================================");