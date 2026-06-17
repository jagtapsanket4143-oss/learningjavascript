console.log("================================================================");
console.log("-----Test Suite Array-----");
console.log("==============================================================\n");

let testCases = ["Valid credentials","Invalid password","Empty username","Empty password","Remember me checkbox"];
console.log("Test Suit : Login Module");
console.log("Test Cases : [ " + testCases + " ]");
console.log("Total Test Cases : " + testCases.length);
console.log("The first test case : " + testCases[0]);
console.log("The last test case : " + testCases[testCases.length -1]);

console.log("-------------------------------------------------------\n");

console.log("================================================================");
console.log("-----Test Results Tracker-----");
console.log("==============================================================\n");

let testResults = [];
let testNumber= 1;
testResults.push("PASSED");
console.log("Test " + testNumber + " completed: " + testResults[testNumber - 1]);
testNumber++

testResults.push("PASSED");
console.log("Test " + testNumber + " completed: " + testResults[testNumber - 1]);
testNumber++

testResults.push("FAILED");
console.log("Test " + testNumber + " completed: " + testResults[testNumber - 1]);
testNumber++

testResults.push("PASSED");
console.log("Test " + testNumber + " completed: " + testResults[testNumber - 1]);
testNumber++

testResults.push("SKIPPED");
console.log("Test " + testNumber + " completed: " + testResults[testNumber - 1]);

console.log("\n---------Test Summary--------------");

console.log("Total test run : "+ testNumber);
console.log("Results : [ " + testResults + " ]");
let failedIndex = testResults.indexOf("FAILED");

if (failedIndex !== -1) {
  console.log(`Contains failures: Yes (found at index ${failedIndex})`);
} else {
  console.log("Contains failures: No");
}

console.log("-------------------------------------------------------\n");


console.log("================================================================");
console.log("-----Test Data Management-----");
console.log("==============================================================\n");
console.log("-----Test Email Management-----\n");

let testEmails = ["user1@test.com","user2@test.com","user3@test.com"]
console .log(`Email IDs : [${testEmails}] \n count : ${testEmails.length}`);
testEmails.push("user4@test.com");
console .log(`Email IDs : [${testEmails}] \n count : ${testEmails.length}`);
testEmails.unshift("admin@test.com");
console .log(`Email IDs : [${testEmails}] \n count : ${testEmails.length}`);
testEmails.pop()
console .log(`Email IDs : [${testEmails}] \n count : ${testEmails.length}`);
testEmails.shift()
console .log(`Final Email IDs : [${testEmails}] \n Final count : ${testEmails.length}`);

console.log("-------------------------------------------------------\n");

console.log("================================================================");
console.log("-----Test Score Analysis-----");
console.log("==============================================================\n");

let testScores = [85, 92, 78, 95, 88, 73, 90];
console.log(`Scores : [${testScores}]`);
console.log(`First Score : ${testScores[0]}`);
console.log(`Last Score : ${testScores[testScores.length-1]}`);
let score95Index = testScores.indexOf(95);
console.log(`Index of 95 : ${score95Index}`);
if (score95Index !==-1){
    console.log(`Score 95 found: Yes (at index ${score95Index})`);
}
else {
    console.log(`Score 95 not found`);
}
