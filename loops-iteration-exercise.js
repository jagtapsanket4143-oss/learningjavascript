console.log("================================================================");
console.log("-----------------Print All Test Cases-----------------------");
console.log("==============================================================\n");

let testCases = ["Login with valid credentials", "Login with invalid password",
     "Login with empty username", "Logout functionality", "Remember me checkbox"];
console.log(`-----------Login Module Test Suite---------------`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
for (let i=1; i < (testCases.length + 1); i++ ){
    console.log(`${i}. ${testCases[i-1]}`);
}
console.log(`Total test cases : ${testCases.length}`);

console.log("-----------------------------------------------------------------\n");

console.log("================================================================");
console.log("-----------------------Count Test Results------------------------");
console.log("==============================================================\n");


console.log(`\n----Login Module Test Suite (for...of version)----`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
let testNumber = 1;
for (let testCase of testCases) {
    console.log(`${testNumber}. ${testCase}`);
    testNumber++;
}
console.log(`Total test cases : ${testCases.length}`);

console.log("-----------------------------------------------------------------\n");

let testResults = ["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED", "PASSED"];
let passed = 0;
let failed = 0;
let skipped = 0;
for (i=0; i< testResults.length; i++) {
if (testResults[i]=== "PASSED"){
    passed++;
}
else if (testResults[i]=== "FAILED") {
    failed++
}
else if (testResults[i]=== "SKIPPED") {
    skipped++
}
}

console.log(`\n----Test Execution Results----`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

console.log(`\n Counting results...`);
console.log(`Test Statistics: `);
console.log(`Total Tests: ${testResults.length}`);
console.log(`Passed: ${passed} ✓`);
console.log(`Failed: ${failed} ✗`);
console.log(`Skipped: ${skipped} ⊘`);
console.log(`Passed Rate: ${passed/testResults.length*100} %`);
console.log(`Failed Rate: ${failed/testResults.length*100} %`);


console.log("-----------------------------------------------------------------\n");

console.log("================================================================");
console.log("--------------------Calculate Test Scores-------------------------");
console.log("==============================================================\n");

let testScores = [85, 92, 78, 95, 88, 73, 90, 87];
let total = 0;
let highest = testScores[0];
let lowest = testScores[0];

for (let i = 0; i < testScores.length; i++) {
    total += testScores[i];

    if (testScores[i] > highest) {
        highest = testScores[i];
    }

    if (testScores[i] < lowest) {
        lowest = testScores[i];
    }
}

let average = total / testScores.length;

console.log("Scores:", testScores);
console.log("\nResults:");
console.log("  Total:", total);
console.log("  Average:", average.toFixed(1));
console.log("  Highest:", highest);
console.log("  Lowest:", lowest);

console.log("-----------------------------------------------------------------\n");

console.log("================================================================");
console.log("--------------------Find Failed Tests-------------------------");
console.log("==============================================================\n");

console.log("\nTest Execution Report");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━\n");

let testNames = ["Login", "Logout", "Search", "Checkout", "Payment", "Profile"];
let results = ["PASSED", "FAILED", "PASSED", "FAILED", "PASSED", "FAILED"];

let failureCount = 0;

console.log("All Tests:");
for (let i = 0; i < testNames.length; i++) {
    let statusSymbol = results[i] === "PASSED" ? "✓" : "✗";
    console.log(`  ${i + 1}. ${testNames[i]}: ${results[i]} ${statusSymbol}`);
}

console.log("\nFailed Tests (requires attention):");

for (let i = 0; i < testNames.length; i++) {
    if (results[i] === "FAILED") {
        console.log("  - " + testNames[i]);
        failureCount++;
    }
}

console.log("\nTotal failures: " + failureCount);

console.log("-----------------------------------------------------------------\n");

console.log("================================================================");
console.log("-----------------------Retry Logic (do...while)-------------------");
console.log("==============================================================\n");

console.log("\nRetry Logic Test Runner");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━\n");

function runFlakyTest() {
    return Math.random() > 0.7;
}

let testNameRetry = "Login Test";
let attempts = 0;
let maxAttempts = 5;
let testPassed = false;

console.log("Running:", testNameRetry);
console.log("Max attempts:", maxAttempts, "\n");

do {
    attempts++;
    console.log("Attempt " + attempts + "...");

    testPassed = runFlakyTest();

    if (testPassed) {
        console.log("  ✓ Test PASSED!");
    } else {
        console.log("  ✗ Test FAILED");
        if (attempts < maxAttempts) {
            console.log("  Retrying...\n");
        }
    }

} while (!testPassed && attempts < maxAttempts);

if (testPassed) {
    console.log(`\n✓ Test passed on attempt ${attempts}`);
} else {
    console.log(`\n✗ Test failed after ${attempts} attempts`);
}