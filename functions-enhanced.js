console.log("=================================");
console.log("Exercise 1: Default Parameters");
console.log("=================================");

function configureTest(
    testName,
    browser = "Chrome",
    timeout = 30000,
    environment = "staging"
) {
    console.log(`Test: ${testName}`);
    console.log(`Browser: ${browser}`);
    console.log(`Timeout: ${timeout}ms`);
    console.log(`Environment: ${environment}`);
    console.log();
}

console.log("--- All defaults ---");
configureTest("Login Test");

console.log("--- Custom browser ---");
configureTest("Login Test", "Firefox");

console.log("--- Custom browser + timeout ---");
configureTest("Login Test", "Safari", 60000);

console.log("--- All custom values ---");
configureTest("Login Test", "Chrome", 30000, "production");

console.log("--- Bonus Cases ---");
configureTest("Edge Case", "");
configureTest("Edge Case", undefined);



console.log("\n=================================");
console.log("Exercise 2: Guard Clauses");
console.log("=================================");

function validateFormNested(username, password, age) {
    if (username !== "") {
        if (password.length >= 8) {
            if (age >= 18) {
                return "✅ Form is valid";
            } else {
                return "❌ Must be 18 or older";
            }
        } else {
            return "❌ Password must be at least 8 characters";
        }
    } else {
        return "❌ Username is required";
    }
}

function validateFormGuard(username, password, age) {
    if (username === "") {
        return "❌ Username is required";
    }

    if (password.length < 8) {
        return "❌ Password must be at least 8 characters";
    }

    if (age < 18) {
        return "❌ Must be 18 or older";
    }

    return "✅ Form is valid";
}

const testCases = [
    ["", "Test@123", 25],
    ["john", "abc", 25],
    ["john", "Test@123", 16],
    ["john", "Test@123", 25]
];

for (const [username, password, age] of testCases) {
    console.log(`Nested: ${validateFormNested(username, password, age)}`);
    console.log(`Guard : ${validateFormGuard(username, password, age)}`);
    console.log();
}



console.log("\n=================================");
console.log("Exercise 3: Function Expressions");
console.log("=================================");

const hasMinLength = function (password) {
    return password.length >= 8;
};

const hasSpecialChar = function (password) {
    return /[@!#]/.test(password);
};

const hasUppercase = function (password) {
    return /[A-Z]/.test(password);
};

const passwordValidators = [
    hasMinLength,
    hasSpecialChar,
    hasUppercase
];

function validatePassword(password) {
    console.log(`Validating: "${password}"`);

    for (let i = 0; i < passwordValidators.length; i++) {
        const validator = passwordValidators[i];

        if (validator(password)) {
            console.log(`  ✓ Passed check ${i + 1}`);
        } else {
            console.log(`  ✗ Failed check ${i + 1}`);
            return false;
        }
    }

    console.log("  ✓ Password is valid!");
    return true;
}

validatePassword("Test@123");
console.log();

validatePassword("weak");



console.log("\n=================================");
console.log("Exercise 4: Factory Functions");
console.log("=================================");

function makeUrlBuilder(baseUrl) {
    return function (path) {
        return baseUrl + path;
    };
}

const stagingUrl = makeUrlBuilder(
    "https://staging.example.com"
);

const productionUrl = makeUrlBuilder(
    "https://example.com"
);

console.log("Staging URLs:");
console.log(stagingUrl("/login"));
console.log(stagingUrl("/dashboard"));

console.log("\nProduction URLs:");
console.log(productionUrl("/login"));
console.log(productionUrl("/dashboard"));

console.log("\nBonus:");
const devUrl = makeUrlBuilder(
    "https://dev.example.com"
);

console.log(devUrl("/api/users"));



console.log("\n=================================");
console.log("Additional Challenge");
console.log("=================================");

function makeUserValidator(
    minPasswordLength = 8,
    minAge = 18
) {
    return function (username, password, age) {

        if (username === "") {
            return "❌ Username cannot be empty";
        }

        if (
            username.length < 3 ||
            username.length > 20
        ) {
            return "❌ Username must be 3-20 characters";
        }

        if (password.length < minPasswordLength) {
            return `❌ Password too short (min ${minPasswordLength} characters, current: ${password.length})`;
        }

        if (age < minAge) {
            return `❌ Age must be at least ${minAge}`;
        }

        return "✅ Valid user";
    };
}

const standardValidator = makeUserValidator();
const strictValidator = makeUserValidator(12, 21);

console.log(standardValidator("testuser", "Test@123", 25));
console.log(standardValidator("", "Test@123", 25));

console.log(strictValidator("testuser", "Test@123", 25));
console.log(
    strictValidator(
        "testuser",
        "Test@123Secure!",
        25
    )
);