// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
// console.log(cohort.split(""))

// a) Your answer: ['D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '1']
// b) Verify and explain: YAY I WAS RIGHT!!! So .split() is a built in method use to divide string into arrays. By adding "" inside of () we are telling it to divide every character into its own index.


// --------------------2) What will this log?

const greeter = (name) => {
   return `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))


// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: OH THAT IS JUST RUDE. Okay I see how this assessment is going to be... This function is missing the keyword 'return' at the beginning of line 20. (Don't mind be adding that in just to make sure I'm atleast correct now...)


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:[8, 10, 12, 14, 16] (every index in the array * 2)
// b) Verify and explain: WOOHOO!! Alrighty! This variable is using .map() on an array meaning we will be cycling through every index in this array. .map() is populated with v => v * 2 meaning we want to take every value in this array and times it by two.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer: [12, 14] I feel like this is another tricky one but I am so bad at everything math that I purposefully studied modulo extra hard so I wouldn't look like an smooth-brained clown when pair programming
// b) Verify and explain: HAH GOTEEM! So what .filter is doing currently is taking every value in the array and dividing it by 2. If it equals 0 and is perfectly divisible, straight clean cut, it's being pushed into oddsOnly!(more like evensOnly HAH) 


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Wellllllllll Lets think this trough. So Learn is a class (uh Duhh! Lol) with the constructor contain the keys student, cohort, and year. Cohort and year are both hard coded with "Delta" and 2021. Student is freely assignable, in this case, "George" (the curious one?!) so my answer is { student: "George", cohort: "Delta", year: 2021} 
// b) Verify and explain: Sweet! Only part I missed was the class name outside of the first curly brace that is just there to let us know We're calling this class and this is what's inside.
