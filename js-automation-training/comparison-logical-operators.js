// Exercise 1: Age Range Validation

let age = 25;

console.log("\n====Age Validation");
console.log("Age:", age);

if (age >= 18 && age <= 65) {
    console.log(" Valid age range (18-65)");
} else {
    console.log("Age must be between 18 and 65");
}

// Exercise 2: Login Credentials Validator

let username = "testuser";
let password = "Test@123";
let email = "";

console.log("\n====Login Credentials Check");
console.log("Username:", username || "(empty)");
console.log("Password:", password ? "********" : "(empty)");
console.log("Email:", email || "(empty)");

if ((username !== "" && password !== "") || email !== "") {
    console.log("\n Sufficient login credentials");
} else {
    console.log("\n Insufficient credentials - provide username+password OR email");
}



// Exercise 3: Test Status Validator

let status = "PASSED";
let errorCount = 0;

console.log("\n====Test Status Validation");
console.log("Test Status:", status);
console.log("Error Count:", errorCount);

let isStatusValid = (status === "PASSED" || status === "SKIPPED");
let noErrors = (errorCount === 0);

console.log("\nValidation:");
console.log("  Status is acceptable:", isStatusValid);
console.log("  No errors:", noErrors);

if (isStatusValid && noErrors) {
    console.log("\n Test completed successfully");
} else {
    console.log("\n Test has issues");  
}

// Exercise 4: Response Time Validator

let responseTime = 2.5;

console.log("\n====Performance Test");
console.log("Threshold: 3 seconds");
console.log("Actual:", responseTime, "seconds");

if (responseTime < 3) {
    console.log("\n Performance test PASSED (response time: " + responseTime + " seconds)");
} else {
    console.log("\n Performance test FAILED (response time: " + responseTime + " seconds, threshold: 3 seconds)");
}
