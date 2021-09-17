// ASSESSMENT 2: Coding practical questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
// Test created! Hope you like it! 
// My test starts with describing it as 'a number sorter for multiples of 3' because we want to know if numbers are evenly divisible by 3 or not, which is what my test parameters are! Finally, I want this test to expect my multOf3Checker to return true is my number is indeed divisible by 3 or false if not.

// Running first test. Fingers crossed for red!
// Hot! Hot! Ooh we got it!! Hot! Hot! So we got it! Hot! Hot! Yo we got it! Hot choc- I mean RED FAIL!



var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

describe("a number checker for multiples of three", (number) => {
    test ('should take in a number and decide if it is evenly divisble by three or not', {
        expect(multOf3Checker(num1).toEqual(number % 3 === 0))
        expect(multOf3Checker(num2).toEqual(number % 3 === 0))
        expect(multOf3Checker(num3).toEqual(number % 3 !== 0))
    })
})

// b) Create the function that makes the test pass.

// declare a function named multOf3Checker
// function should take in a number
// conditional if the number is divisible by 3 
// return "number is divisible by 3"
// else return "number is not divisible by 3"

const multOf3Checker = (number) =>{
    if (number % 3 === 0){
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}
console.log(multOf3Checker(num1));

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2



// b) Create the function that makes the test pass.
