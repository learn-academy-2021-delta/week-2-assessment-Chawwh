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

// ---Test desc---
// My test starts with describing it as 'a number sorter for multiples of 3' because we want to know if numbers are evenly divisible by 3 or not, which is what my test parameters are! Finally, I want this test to expect my multOf3Checker to return true is my number is indeed divisible by 3 or false if not.
// ---------------

// Running first test. Fingers crossed for red!
// He's red, Jim! x_x



var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"
var num4 = 4242564
var num5 = 20



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
// YAY I GOT IT TO PASS AGAIN WITH ALL 3 EXPECT STATEMENTS!!! I'm gonna be honest, I don't see what changed from what I had before that was failing to what I have now but hey, it works! Thats what I'd like to call 
// ==== I figured out what I did wrong! I was writing the .toEqual() inside of the expect() instead of after and that was causing errors====


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
console.log(multOf3Checker(num5));

//  I'm 98% sure this code is dynamic and it looks pretty clean to me now so ~Successfully Refactored~



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// My brain hurts. Test created.

// ---Test desc---
// My test starts with describing how this function will be a 'proper noun maker' It should be able to return each string in an array with a capitalized first letter and can expect as much.
// ---------------

// Ready, set, TEST!
// What's black white and red all over? A skunk eating strawberries! (and a failed test!)



var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
var randomMess = ["hEadACHes", "VEGANISM", "allergies", "DEVELOPERS", "oranGutan"]



describe("Capitalize first letter of strings", () =>{
    test("returns an array with the first letter of every string inside capitalized", () =>{
        expect(properNouns.capitalizeNouns(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(properNouns.capitalizeNouns(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
}) 

// b) Create the function that makes the test pass.
// I GOT IT TO PASS FINALLY!


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

// I refactored my code by completely scrapping what I had before and building a class instead. To me the class looks cleaner aaaand it's helping me understand how to utilize them better :D ~Successfully Refactored~



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
//  I made test woohoo

// ---Test desc---
// My test describes vowel locator as it will determine the first index of a vowel in a string and can expect the index returned.
// ---------------

// RUN LIKE THE WIND BULLSEYE!
// ~Ding-dong the witch is red! Which old witch? The wicked witch! Ding-dong the wicked witch is red!~



var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2



describe("vowel locator",() =>{
    test("where the first vowel in a string is located and return its index", ()=>{
        expect(vowelHunter(vowelTester1)).toEqual(1)
        expect(vowelHunter(vowelTester2)).toEqual(0)
        expect(vowelHunter(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.


// --Psuedo code---
// Declare a function that takes in a string
// create a for loop to cycle through the string
// declare a variable 'vowel' to equal string at index i for easy referencing
// conditional if string at index i is equal to "a", "e", "i" "o", or "u"
// return i 

const vowelHunter = (string) =>{
    for(i = 0; i < string.length; i++){
        let vowel = string[i];
        if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
            return i;
        }
    }
}
console.log(vowelHunter(vowelTester3));

// I was googling different ways to possibly make this code shorter/ cleaner and found .search() with regular expressions that seem pretty cool so after some research and practice I gave myself extra work and made a 2nd test for question 3.


describe("vowel searcher", () =>{
    test("searches against a variable of vowels and returns the index of the first vowel", () =>{
        expect(vowelTester1.search(vowels)).toEqual(1)
        expect(vowelTester2.search(vowels)).toEqual(0)
        expect(vowelTester3.search(vowels)).toEqual(2)
    })
})

// ---Psuedo code---
// declare a variable equal to a regular expression of vowels
// using .search with the parameter of our vowels variable
// call the string to find the first index of a vowel


let vowels = /[aeiouAEIOU]/
console.log(vowelTester3.search(vowels));

// Is it alright to use regular expressions in future challenges? I love how simple it made things!