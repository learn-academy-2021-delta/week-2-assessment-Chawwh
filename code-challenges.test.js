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



describe("a number checker for multiples of three", () => {
    test ('should take in a number and decide if it is evenly divisble by three or not' ,() => {
        expect(multOf3Checker(num1)).toEqual("15 is divisible by three")
        expect(multOf3Checker(num2)).toEqual("0 is divisible by three")
        expect(multOf3Checker(num3)).toEqual("-7 is not divisible by three")
    })
  })



// b) Create the function that makes the test pass.
// YAYAYAYAYY!!! Holy cow I really just spent an hour trying to get the first green pass
// -- I was running into issues where when I tried to add an expect for every variable it would fail and return an error about .toEqual not liking a string so I took num2 and num3 out.
// YAY I GOT IT TO PASS AGAIN WITH ALL 3 EXPECT STATEMENTS!!! I'm gonna be honest, I don't see what changed from what I had before that was failing to what I have now but hey, it works! Thats what I'd like to call ~Successfully Refactored~


// ---Pseudo code---
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
// My brain hurts. Test created.
// What's black white and red all over? A skunk digging through a makeup factory's reject bin! Test failed!!

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
var randomMess = ["hEadACHes", "VEGANISM", "allergies", "DEVELOPERS", "oranGutan"]

// My test starts with describing how this function will be a 'proper noun maker' It should be able to return each string in an array with a capitalized first letter and can expect as much.

describe("Capitalize first letter of strings", () =>{
    test("returns an array with the first letter of every string inside capitalized", () =>{
        expect(properNouns.capitalizeNouns(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(properNouns.capitalizeNouns(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
}) 



// b) Create the function that makes the test pass.
// I GOT IT TO PASS FINALLY!
// I refactored my code by completely scrapping what I had before and building a class instead. To me the class looks cleaner aaaand it's helping me understand how to utilize them better :D

// ---Psuedo code---
// Declare a class named CapEm (Capitalize them, but in lazy dev lang)
// declare a method named capitalizeNouns
// Method should take in an array of string and return an array of strings with the first index of every string capitalized
// Declare a variable name properNouns to equal the class CapEm for easy referencing 

class CapEm {
    constructor(nouns1){
        this.nouns1 = nouns1
    }
    capitalizeNouns(array){
        return array.map(value => value[0].toUpperCase() + value.slice(1).toLowerCase())
    }
}

var properNouns = new CapEm
console.log(properNouns.capitalizeNouns(randomNouns1));
console.log(properNouns.capitalizeNouns(randomMess));

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2



// b) Create the function that makes the test pass.
