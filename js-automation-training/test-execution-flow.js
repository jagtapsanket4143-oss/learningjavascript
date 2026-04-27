const testName = "Login Functionality Test";
const tester = "Sanket Jagtap";

let testStatus = "IN PROGRESS";
let stepNumber = 1;

console.log("==========================================");
console.log("TEST EXECUTION FLOW");
console.log("==========================================");

console.log("Test Name: " + testName);
console.log("Tester: " + tester + "\n");


console.log("Step " + stepNumber + ": Opening browser");
console.log("Status: " + testStatus + "\n");


stepNumber = stepNumber + 1;
console.log("Step " + stepNumber + ": Navigating to login page");
console.log("Status: " + testStatus + "\n");


stepNumber = stepNumber + 1;
console.log("Step " + stepNumber + ": Entering credentials");
let username = "sanketj@test.com";
console.log("Username: " + username);
console.log("Status: " + testStatus + "\n");


stepNumber = stepNumber + 1;
console.log("Step " + stepNumber + ": Clicking login button");
console.log("Status: " + testStatus + "\n");

stepNumber = stepNumber + 1;
testStatus = "COMPLETED";

console.log("Step " + stepNumber + ": Verifying dashboard");
console.log("Status: " + testStatus + "\n");

console.log("==========================================");
console.log("Final Status: PASSED");
console.log("Test Duration: 2.5 seconds");
console.log("==========================================");