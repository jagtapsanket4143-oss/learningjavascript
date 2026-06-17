// Function to generate email
function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`;
}

// Function to generate username
function generateUsername(firstName, lastName) {
    return firstName.toLowerCase() + lastName.toLowerCase();
}

// Function to generate password
function generatePassword(prefix) {
    return prefix + "@123";
}

// Test the functions
let email = generateEmail("John", "Doe");
let username = generateUsername("John", "Doe");
let password = generatePassword("Test");

console.log(email);
console.log(username);
console.log(password);

// Helper Functions
function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`;
}

function generateUsername(firstName, lastName) {
    return firstName.toLowerCase() + lastName.toLowerCase();
}

// Main Generator Function
function generateTestUser(firstName, lastName) {
    return {
        name: `${firstName} ${lastName}`,
        email: generateEmail(firstName, lastName),
        username: generateUsername(firstName, lastName),
        password: "Test@123",
        userId: 1000,
        isActive: true
    };
}

// Generate Users
let user1 = generateTestUser("John", "Doe");
let user2 = generateTestUser("Jane", "Smith");

console.log(user1);
console.log(user2);

function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return "VALID";
    } else {
        return "INVALID";
    }
}

// Test Cases
console.log(validateEmail("test@example.com"));
console.log(validateEmail("notanemail"));