console.log("==================================================");
console.log("-------EXERCISE 1: CREATE TEST CASE OBJECT---------");
console.log("==================================================");

let testCase = {
        id: "TC-001",
        name: "Login with valid credentials",
        priority: "High",
        status: "Passed",
        duration: 2.5,
        browser: "Chrome"
    };

console.log("\nTest Case Details");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

console.log("ID:", testCase.id);
console.log("Name:", testCase.name);
console.log("Priority:", testCase.priority);
console.log("Status:", testCase.status);
console.log("Duration:", testCase.duration + "s");
console.log("Browser:", testCase.browser);
console.log("\nAdding tester...");
testCase.tester = "John Doe";
console.log("Changing status...");
testCase.status = "Failed";
console.log(testCase);

console.log("\n\n==================================================");
console.log("---------EXERCISE 2: TEST USER OBJECTS-----------");
console.log("==================================================");

let user1 = {
    username: "admin@test.com",
    password: "Admin123",
    email: "admin@test.com",
    role: "admin"
};

let user2 = {
    username: "user@test.com",
    password: "User123",
    email: "user1@test.com",
    role: "user"
};

let user3 = {
    username: "user2@test.com",
    password: "User456",
    email: "user2@test.com",
    role: "user"
};

let testUsers = [user1, user2, user3];

console.log("\nTest Users Database");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

let adminCount = 0;
let userCount = 0;

for (i =0; i < testUsers.length; i++) {
    console.log(`User${i+1} : `);
    console.log("  Username:", testUsers[i].username);
    console.log("  Password: ********");
    console.log("  Email:", testUsers[i].email);
    console.log("  Role:", testUsers[i].role);

    if (testUsers[i].role === "admin") {
        adminCount++;
    } else if (testUsers[i].role === "user") {
        userCount++;
    }
}

console.log("\nSummary:");
console.log("  Total users:", testUsers.length);
console.log("  Admins:", adminCount);
console.log("  Regular users:", userCount);

console.log("\n\n==================================================");
console.log("---------Exercise 3: Test Results Array-----------");
console.log("==================================================");

let testResults = [
    { 
        name : "Login Test",
        Result: "PASSED",
        Duration: 2.5 
    },
    {
        name : "Logout Test",
        Result: "FAILED",
        Duration: 1.8
    },
    {
        name : "Search Test",
        Result: "PASSED",
        Duration: 3.2
    },
    {
        name : "Checkout Test",
        Result: "SKIPPED",
        Duration: 0.0
    },
    {
        name : "Payment Test",
        Result: "PASSED",
        Duration: 2.1
    }
];

let passed = 0;
let failed = 0;
let skipped = 0;
let totalDuration = 0;

for (let i=0; i< testResults.length;i++) {
      if (testResults[i].Result === "PASSED" ){
                console.log(`✓ ${i+1}. ${testResults[i].name}\nLogin Test Result: ${testResults[i].Result} \nDuration: ${testResults[i].Duration}`);
        passed ++;
      }
      else if (testResults[i].Result === "FAILED" ){
                console.log(`✗ ${i+1}. ${testResults[i].name}\nLogin Test Result: ${testResults[i].Result} \nDuration: ${testResults[i].Duration}`);
        failed ++;
      }
      else if (testResults[i].Result === "SKIPPED" ){
                console.log(`⊘ ${i+1}. ${testResults[i].name}\nLogin Test Result: ${testResults[i].Result} \nDuration: ${testResults[i].Duration}`);

        skipped ++;
      }
    totalDuration = totalDuration + testResults[i].Duration
}

console.log(`\n Statistics`);
console.log(`*****************************************`);
console.log(`Total Tests : ${testResults.length}`);
console.log(`PASSED : ${passed} (${(passed*100/testResults.length).toFixed(2)} % )`);
console.log(`FAILED : ${failed} (${(failed*100/testResults.length).toFixed(2)} % )`);
console.log(`SKIPPED : ${skipped} (${(skipped*100/testResults.length).toFixed(2)} % )`);

console.log(`\nTotal Duration : ${totalDuration}s`);
console.log(`Average duration : ${totalDuration/testResults.length}s`);



console.log("\n\n==================================================");
console.log("----Exercise 4: Object Methods and 'this' Keyword----");
console.log("======================================================");

let testRunner = {
    name: "Login Suite",
    totalTests: 5,
    passedTests: 0,
    failedTests: 0,

    start() {
        console.log(`Running test suite: ${this.name}`);
    },
    pass() {
        this.passedTests ++;
        console.log(`✓ Test passed! Total passed: ${this.passedTests}`);
    },
    fail() {
        this.failedTests ++;
                console.log(`✗ Test failed! Total failed: ${this.failedTests}`);
    },
    getReport() {
        console.log(`Test Suite Report: 
                    \nName: ${this.name}\nTotal tests: ${this.totalTests}\nPassed: ${this.passedTests} (${(this.passedTests*100/this.totalTests)} %)\nFailed: ${this.failedTests} (${(this.failedTests*100/this.totalTests)} %)\nNot yet run: ${this.totalTests - (this.passedTests + this.failedTests)}`);
    }
}
console.log("\nTest Runner with Methods");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

testRunner.start();
testRunner.pass();
testRunner.pass();
testRunner.pass();
testRunner.fail();
testRunner.getReport();

let testCase2 = {
    name: "Login Test",
    status: "NOT STARTED",
    duration: 0,
    startTime: 0,
    
    start() {
        this.status = "RUNNING";
        this.startTime = Date.now();

        console.log(`✓ Started : ${this.name}`);
        console.log(`Status  : ${this.status}`);
    },
    pass(){
        this.status ="PASSED'"
        let endTime = Date.now();
        this.duration = (endTime - this.startTime) / 1000;

        console.log("\n✓ " + this.name + " PASSED");
        console.log("  Duration:", this.duration.toFixed(2) + "s");
    },
    fail(reason){
        this.status = "FAILED";
        this.reason = reason;

        console.log("\n✗ " + this.name + " FAILED");
        console.log("  Reason:", this.reason);
    }
}

testCase2.start();

for (let i = 0; i < 100000000; i++) {
    // delay loop
}
testCase2.pass();

testCase2.fail("Unknown Error");

console.log("\n\n==================================================");
console.log("------------Exercise 5: Deleting Properties-----------");
console.log("======================================================");

let testData = {
    username: "testuser@example.com",
    password: "Test@123",
    sessionToken: "abc123xyz",
    firstName: "John",
    lastName: "Doe",
}

console.log(`Cleanup Sensitive Data`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━`)
console.log(`Before cleanup:`);
console.log(testData);

delete testData.password;
delete testData.sessionToken;

console.log(`After cleanup:`);
console.log(testData);

console.log(`\nDoes 'password' exist? ${"password" in testData}`);
console.log(`Does 'username' exist? ${"username" in testData}`);

console.log(`\n✓ Sensitive data removed successfully!`)

console.log("\n\n==================================================");
console.log("------------Exercise 6: Complete Test Tracker---------");
console.log("======================================================");

let testTracker ={
    suiteName: "Login Module",
    environment: "Staging",
    browser: "Chrome",
    tests: [
        {
            name: "Valid credentials",
            result: "PASSED",
            duration: 2.5
        },
        {
            name: "Invalid password",
            result: "FAILED",
            duration: 1.8
        },
        {
            name: "Empty username",
            result: "FAILED",
            duration: 1.2
        },
        {
            name: "Remember me checkbox",
            result: "PASSED",
            duration: 2.1
        }
    ],

calculateStats: function () {

        let passed = 0;
        let failed = 0;
        let totalDuration = 0;

        // Loop through tests
        for (let i = 0; i < this.tests.length; i++) {

            let currentTest = this.tests[i];

            if (currentTest.result === "PASSED") {
                passed++;
            } else if (currentTest.result === "FAILED") {
                failed++;
            }

            totalDuration += currentTest.duration;
        }

        return {
            totalTests: this.tests.length,
            passed: passed,
            failed: failed,
            totalDuration: totalDuration,
            averageDuration: totalDuration / this.tests.length
        };
    }
};


let stats = testTracker.calculateStats();


console.log("\n══════════════════════════════════════════");
console.log("       TEST SUITE EXECUTION REPORT       ");
console.log("══════════════════════════════════════════");

console.log("\nSuite Information:");
console.log("  Name:", testTracker.suiteName);
console.log("  Environment:", testTracker.environment);
console.log("  Browser:", testTracker.browser);

console.log("\nTest Results:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");


for (let i = 0; i < testTracker.tests.length; i++) {

    let test = testTracker.tests[i];

    if (test.result === "PASSED") {
        console.log("\n✓ Test " + (i + 1) + ": " + test.name);
    } else {
        console.log("\n✗ Test " + (i + 1) + ": " + test.name);
    }

    console.log("  Result:", test.result);
    console.log("  Duration:", test.duration + "s");
}

console.log("\nSummary Statistics:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

console.log("  Total tests:", stats.totalTests);

console.log(
    "  Passed:",
    stats.passed +
    " (" +
    ((stats.passed / stats.totalTests) * 100).toFixed(1) +
    "%)"
);

console.log(
    "  Failed:",
    stats.failed +
    " (" +
    ((stats.failed / stats.totalTests) * 100).toFixed(1) +
    "%)"
);

console.log("  Total duration:", stats.totalDuration.toFixed(1) + "s");

console.log(
    "  Average duration:",
    stats.averageDuration.toFixed(1) + "s"
);


if (stats.failed > 0) {
    console.log("\nStatus: ⚠️  Review failed tests before deployment");
} else {
    console.log("\nStatus: ✅ All tests passed");
}

console.log("══════════════════════════════════════════");