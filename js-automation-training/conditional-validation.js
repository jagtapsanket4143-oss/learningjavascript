console.log("====================================")
console.log("-----Email Validation (If Else)-----")
console.log("====================================\n")

let email = "testuser@example.com";
if (email.includes("@") && email.includes(".")) {
    console.log("✅ Valid email format");
}
else {
    console.log("❌ Invalid email format");
}

console.log("-------------------------------------------------------\n")


console.log("====================================")
console.log("-----Test Result Categorizer-----")
console.log("====================================\n")

let testResult = "SKIPPED";
console.log("Test Status : ", testResult)
if (testResult === 'PASSED') {
console.log("✓ Test passed successfully");
}
else if (testResult === "FAILED") {
    console.log("✗ Test failed - check logs");
}
else if (testResult === "SKIPPED") {
    console.log("⊘ Test skipped");
}
else {
    console.log("? Unknown test status");
}

console.log("-------------------------------------------------------\n");

console.log("====================================");
console.log("-----Password Strength Checker-----");
console.log("====================================\n");


let password = "Test@123";
console.log("Password : ", password);

if (password.length < 6) {
    console.log("❌ Weak password - too short");
} 
else if (password.length < 10) {
    console.log("⚠️ Medium password strength");
}
else if (password.length >= 10) {

    console.log("✅ Strong password")
}

console.log("-------------------------------------------------------\n");

console.log("====================================");
console.log("-----Test Score Grading-----");
console.log("====================================\n");

let score = 75;
console.log("Test Score : ", score);
if (score >= 90) {
    console.log("Grade: A (Excellent)");
}
else if (score > 80 && score < 89) {
    console.log("Grade: B (Good)");
}
else if (score > 70 && score < 79) {
    console.log("Grade: C (Average)");
}
else if (score > 60 && score < 69) {
    console.log("Grade: D (Pass)");
}
else {
    console.log("Grade: F (Fail)");
}

console.log("-------------------------------------------------------\n");

console.log("====================================");
console.log("-----Early Return Pattern-----");
console.log("====================================\n");

function checkTestData(result, duration) {
    if (result === null) {
        return "Error: No result";
    }
    if (duration < 0) {
        return "Error: Negative duration";
    }
    if (duration > 10) {
                return "Error: Duration too long";
    }
    return "Valid: " + result + " in " + duration + "s";
            
}

console.log(checkTestData(null,3));
console.log(checkTestData("PASSED",-1));
console.log(checkTestData("PASSED",15));
console.log(checkTestData("PASSED",2));

console.log("-------------------------------------------------------\n");

console.log("====================================");
console.log("-----Switch — Basic Value Matching-----");
console.log("====================================\n");

 let testResult2 = "PASSED";
 console.log("Test result : ",testResult2);
 switch (testResult2) {
    case "PASSED" :
        console.log("✓ Test passed successfully");
        break;
    case "FAILED" :
        console.log("✗ Test failed - check logs");
        break;
    case "SKIPPED" :
        console.log("⊘ Test skipped");
        break;
    case "PENDING" : 
        console.log("⏳ Test pending - not yet run");
        break;
    default:
        console.log("? Unknown test status");
   
 }


 console.log("-------------------------------------------------------\n");

console.log("================================================================");
console.log("-----Switch — Grouping Cases (Multiple Cases, One Outcome)-----");
console.log("==============================================================\n");

let statusCode = 502;

switch (statusCode) {
    case 200:
        console.log("✅ 200 OK — request successful");
        break;
    case 201:
        console.log("✅ 201 Created — resource created")
        break;
    case 400:
    case 401:
    case 403:
        console.log("❌ Client error — check your request");
        // (400, 401, and 403 all print the same message — intentional fall-through)
        break;
    case 404:
        console.log("❌ 404 Not Found — endpoint does not exist");
        break;
    case 500:
    case 502:
    case 503:
        console.log("🔥 Server error — backend issue")
        break;
    default:
        console.log("? Unknown status code: " + statusCode)
}
console.log("-------------------------------------------------------\n");

console.log("================================================================");
console.log("-----Switch with Expressions-----");
console.log("==============================================================\n");

let score1 = 40;
console.log("Score : ",score1);
switch (Math.floor(score1/10)) {
    case 10 :
    case 9 :
        console.log("Grade: A (Excellent)");
        break;
    case 8 :
        console.log("Grade: B (Good)");
        break;
    case 7 :
        console.log("Grade: C (Average)");
        break;
    case 6 :
        console.log("Grade: D (Pass)");
        break;
    default :
        console.log("Grade: F (Fail)");

}

console.log("-------------------------------------------------------\n");

console.log("================================================================");
console.log("-----Switch on `true` — range matching with expressions-----");
console.log("==============================================================\n");

let duration = 35;  // test duration in seconds

switch (true) {
    case duration < 1:
        console.log("⚡ Very fast test");
        break;
    case duration < 3:
        console.log("✅ Fast test");
        break;
    case duration < 6:
        console.log("⚠️ Acceptable — consider optimising");
        break;
    default:
        console.log("🐢 Slow test — needs attention");
}

let priority = "high";

switch (priority) {
    case "High":
        console.log("Urgent");
        break;
    case "high":
        console.log("Also urgent");
        break;
}
// SWITCH uses strict comparison (===) and javascript is case sensetive....

let x = 2;

switch (x) {
    case 1:
        console.log("one");
    case 2:
        console.log("two"); // it will first print two, case matches
    case 3:
        console.log("three"); //then it will print three and other as there is no break statement
    default:
        console.log("other");
}

