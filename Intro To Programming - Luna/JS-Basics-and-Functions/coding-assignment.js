//---------- OVERVIEW AND INSTRUCTIONS ----------

//----------------------------------
// LESSON 1 BASICS AND FUNCTIONS
//----------------------------------

// This is the coding assignment for the first week of the Intro to Programming course from
// Code the Dream. The concepts touched on in this assignment include:
//   - The basic syntax of the JavaScript programming language
//   - Basic programming concepts like variables, data types, and conditional statements
//   - Troubleshooting programming problems
//   - Encapsulating code with Functions
//   - Passing Information Into Functions

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. The first few questions have console logs provided. They are currently commented out so they will not show errors in your console.  Please remove the '//' from the left of the console log to "comment them in" making them active code.  Add console logs for all the remaining questions to check your code output. There are sample console logs for all questions, but be sure to use some of your own values and function inputs as well.

// To use a function in a console.log you invoke/call the function as part of the console log like this:
//  console.log("Q#: ", functionName(anyInput))

// Please be sure to check the output of your called functions and console logs in the Console area of this screen. Check to make sure that the output you get in your Console is the expected output.

// \*\*\*\*\*\*\*\*\*
// NOTE: YOU NEED TO CLICK THE ORANGE RUN BUTTON TO RUN YOUR CODE!  LOOK AT THE MOST RECENT OUTPUT TO MAKE SURE YOUR CONSOLE LOGS ARE DISPLAYING WHAT YOU EXPECT!!
// \*\*\*\*\*\*\*\*\*

// ---------- QUESTION 1 ----------
// Declaring and giving string values to variables.
// Create three variables.  First let's make sure we're using "camel case" where all letters are lowercase except for the first letter of words that are in the middle.  This is the accepted standard for Javascript code.  Your first variable should be titled "firstName" with the value of your first name as a string.  Your second variable should be titled "lastName" with the value of your last name as a string.  The last variable should be titled "country" with the value of the name of the country where you were born as a string.

//PUT YOUR CODE HERE
const firstName = "Avion";
const lastName = "Cobb";
const country = "United States";

console.log("Q1: My first name is: ", firstName);
console.log("Q1: My last name is: ", lastName);
console.log("Q1: I was born in the country: ", country);

// ---------- QUESTION 2 ----------
// Declaring and giving numerical values to variables.
// Create four variables.  One titled "floatingPoint" with the value of any floating point number you choose.  One titled "integer" with the value of any integer number you choose.  One titled "negative" with the value of any negative number you choose.  One titled "notANumber" with the value of 4 multiplied by a string of your choice.
//NOTE: Remember from your lessons that JavaScript can treat large numbers differently than you might expect.

//STRETCH GOAL: You'll see "Stretch Goal"s throughout the course. Stretch Goals are optional, but are encouraged as they help you try your hand at something a little more advanced for the week/assignment/question. Create a fifth variable titled "bigNumber" that is 16 or more numbers long. Then write your console.log and see what happens as you play and practice working with large numbers.

// PUT YOUR CODE HERE

const floatingPoint = 3.14159;
const integer = 26;
const negative = -9;
const notANumber = 4 * "hello";

const bigNumber = 2387494598544254771098;

console.log(
    "This is a decimal, also called a floating point number: ", floatingPoint);
console.log("Q2: This is a whole number, also called an integer: ", integer);
console.log("Q2: This is a negative number: ", negative);
console.log("Q2: You can't multiply 4 by a word! ", notANumber);
console.log("STRETCH GOAL: This an example of a big number:", bigNumber);

// ---------- Question 3 ----------
// Declaring and giving boolean values to variables.
// Create two variables.  Name the first variable anything you want and give it the value of true.  Name the second variable a different name than the first and give it the value of false.

// PUT YOUR CODE HERE
const booleanOfTrue = true;
const booleanOfFalse = false;

console.log("The variable I made true is: ", booleanOfTrue);
//The output of the above should be true.

console.log("The variable I made false is: ", booleanOfFalse);
//The output of the above should be false.

// ---------- QUESTION 4 ----------
// String Concatenation
// Create a variable that makes a concatenated string out of the variables you made in Question 1. Be sure you're using your Q1 variables and not making new ones.
// Suggested text: Hello! My name is (your first name variable and last name variable concatenated here) and I was born in (your country variable here)
// You can also choose to make the text between the variables strings and concatenate all of them together.

// STRETCH GOAL: For this stretch goal, make a second variable that still concatenates your variable from Q1, but uses template literals.

// PUT YOUR CODE HERE
const intro = "Hello! My name is " + firstName + " " + lastName + " and I was born in the " + country + ".";
console.log(intro);

// STRETCH GOAL CODE
const stretchGoal = `Hello! My name is ${firstName} ${lastName} and I was born in the ${country}!`;
console.log("Question 4 Stretch Goal Answer: ", stretchGoal);
// Don't forget your console.logs!

// ---------- QUESTION 5 ----------
// Make two variables.  One will hold the addition of your your floating point and integer variables from Q2, the other should hold the addition of your integer and negative number from Q2.

// PUT YOUR CODE HERE
const additionOfFloatAndInt = floatingPoint + integer;
const additionOfIntAndNeg = integer + negative;

console.log(additionOfFloatAndInt);
console.log(additionOfIntAndNeg);
// Don't forget your console.logs!

// ---------- QUESTION 6 ----------
// String Methods
// Create four variables named "length", "firstInitial", "lastInitial", and "capitalize".  Using string methods, assign the length of your first name (use your variable from Q1) to the "length" variable. Assign the first letter of your first name (use your variable from Q1) to the "firstInitial" variable.  Assign the LAST letter of your first name (use your variable from Q1) to the "lastInitial" variable.  Change your first name to all capital letters and assign it to the "capitalize" variable.

//STRETCH GOAL: Create a variable called "weirdInitials". Using string methods, have weirdInitials result in the value of the LAST letters of any first and last names and should be capitalized.  Example: "Sally Smith"'s weird initials should be "YH" and "Jose Rodriguez"'s initials should be "EZ"

// PUT YOUR CODE HERE
const length = firstName.length;
const firstInitial = firstName.charAt(0);
const lastInitial = firstName.charAt(length - 1);
const capitalize = firstName.toUpperCase();

console.log(length);
console.log(firstInitial);
console.log(lastInitial);
console.log(capitalize);

// STRETCH GOAL CODE
const stretchGoalFirstNameLastLetter = firstName.charAt(firstName.length - 1).toUpperCase();
//console.log(stretchGoalFirstNameLastLetter);
const stretchGoalLastNameLastLetter = lastName.charAt(lastName.length - 1).toUpperCase();
//console.log(stretchGoalLastNameLastLetter);
const weirdInitials = stretchGoalFirstNameLastLetter + stretchGoalLastNameLastLetter;
console.log("Question 6 Stretch Goal Answer: ", weirdInitials);

// Don't forget your console.logs!

// ---------- QUESTION 7 ----------
// Declare a variable named "answer7".  Then create a conditional if else statement that will assign the value of true to the answer7 variable if your integer from Q2 is greater than 10 and assign it false if it is not.

// STRETCH GOAL: Make an if / else if / else statement that assigns answer7 the value of "less than" if your integer from Q2 is less than 10, "equal to" if it's equal, and "greater than" if it's greater.

// PUT YOUR CODE HERE
let answer7;

if (integer > 10) {
    answer7 = true;
} else {
    answer7 = false;
};
console.log(answer7);

// STRETCH GOAL
if (integer < 10) {
    answer7 = "less than";
} else if (integer === 10) {
    answer7 = "equal to";
} else {
    answer7 = "greater than";
};
console.log("Question 7 Stretch Goal Answer: ", answer7);


// Don't forget your console.logs!

// ---------- QUESTION 8 ----------
// Declare a variable called "age" and assign it that value of your age in years.  Create a conditional statement that will console.log the phrase "Age is just a number!" if your age is less than or equal to 30 and "Young at heart!" if your age is greater than 30.

//STRETCH GOAL: Combine your skills!  Use template literals to console.log your name in the phrase as in "Sally, age is just a number!" or "Jose, you're young at heart!"

// PUT YOUR CODE HERE
const age = 30;
const young = (age <= 30) ? "Age is just a number!" : "Young at heart!";
console.log(young);

// STRETCH GOAL
const youngStretchGoal = (age <= 30) ? `${firstName}, age is just a number!` : `${firstName}, you're young at heart!`;
console.log("Question 8 Stretch Goal Answer: ", youngStretchGoal);

// Don't forget your console.logs!

// ---------- QUESTION 9 ----------
// Create a variable "randomNum" to be a random number generator that randomly returns either the number 1, 2, or 3 (you can use this resource to help you solve how to do this part: https://www.w3schools.com/js/js\_random.asp). Now let's make a "Magic 8 Ball" using if elseif else that returns a different phrase for each of the three possible numbers. 
// If your random number is 1, console.log the phrase "It is certain.".
// If it is 2, console.log "Perhaps.".
// If it is 3, console.log "Absolutely not.".

// STRETCH GOAL: Complete Q9 using a switch statement instead of if elseif else.

// PUT YOUR CODE HERE
const randomNum = Math.floor(Math.random() * Math.floor(3) - Math.ceil(0) + 1);
//console.log(randomNum);
if (randomNum === 1) {
    console.log("It is certain.");
} else if (randomNum === 2) {
    console.log("Perhaps.");
} else {
    console.log("Absolutely not.");
};


// STRETCH GOAL
switch (randomNum) {
    case 1:
        console.log("Question 9 Stretch Goal Answer: It is certain.");
        break;
    case 2:
        console.log("Question 9 Stretch Goal Answer: Perhaps.");
        break;
    case 3:
        console.log("Question 9 Stretch Goal Answer: Absolutely not.");
        break;
};
// Don't forget your console.logs!

// ---------- QUESTION 10 ----------
// Declare a variable named "exampleNum".  Give it the value of a floating point number with 4 decimal places.  Using a Number method round it to the nearest two decimal place. Example if the number is 21.4572, exampleNum should become 21.46.

// STRETCH GOAL: Achieve the same results as Q10 using Math methods instead of Number methods. HINT: you may need to alter the variable over a series of calculations/method uses.

// PUT YOUR CODE HERE
const exampleNum = 105.4372;
console.log(exampleNum.toFixed(2));

// STRETCH GOAL
console.log("Question 10 Stretch Goal Answer: ", Math.round(exampleNum * 100) / 100);

// Don't forget your console.logs!

// ---------- QUESTION 11 ----------
// Declare two variables named "stringNum" and "mathNum".  Assign stringNum a STRING of numbers and mathNUM numbers.  Create a third variable named "answer11" and have it multiply stringNum and mathNum.  Remember to convert your string in order for it to properly calculate!

// PUT YOUR CODE HERE
const stringNum = "12";
const mathNum = 12595;
const answer11 = Number(stringNum) * mathNum;

console.log(answer11);

// Don't forget your console.logs!

// ---------- QUESTION 12 ----------
//Create a function titled 'messageString'.  Inside the function,  declare a variable named 'message' and assign it the string "Welcome to Code the Dream".  Return the 'message' variable.

// EXAMPLE LOG:
//    console.log("Q12: ", messageString());
// EXAMPLE OUTPUT:
//    Q12: Welcome to Code the Dream!

//PUT YOUR CODE HERE
function messageString() {
    const message = "Welcome to Code the Dream!";
    return message;
};
console.log("Q12: ", messageString());

// ---------- QUESTION 13 ----------
// Create a function called 'combineStrings'.  Inside the function, declare two variables named 'string1' and 'string2'.  Assign them the strings 'Good' and 'Evening' respecitvely.  Return the two strings concatenated with a space in between.

// EXAMPLE LOG:
//    console.log("Q13: ", combineStrings());
// EXAMPLE OUTPUT:
//    Q13: Good Evening

//PUT YOUR CODE HERE
function combineStrings() {
    const string1 = "Good";
    const string2 = "Evening";
    return string1 + " " + string2;
};

console.log("Q13: ", combineStrings());

// ---------- QUESTION 14 ----------
// Let's start working with parameters.  Create a function called 'useParams' that takes one parameter and returns that parameter with the all letters capitalized.

// EXAMPLE LOG:
//    console.log("Q14: ", useParams("hello"));
// EXAMPLE OUTPUT:
//    Q14 HELLO

//PUT YOUR CODE HERE
function useParams(str) {
    return str.toUpperCase();
}
console.log("Q14:", useParams("hello"));

// ---------- QUESTION 15 ----------
// Now let's work with strings... Create two variables named 'word1' and 'word2' and assign them any strings you want.  Then create a function called 'biggestStringLength' that takes word1 and word2 as parameters and returns the length of the longer string. If they are of equal length, just return that length.  Stretch your skills by making an empty string and seeing what happens in that situation.

// EXAMPLE LOG:
//    console.log("Q15: ", biggestStringLength(word1, word2));
// EXAMPLE OUTPUT: (if your word1 was 'Code' and word2 was 'Dream')
//    Q15: 5

// PUT YOUR CODE HERE
const word1 = "Software";
const word2 = "Developer";

function biggestStringLength(word1, word2) {
    const word1Length = word1.length;
    const word2Length = word2.length;

    if (word1Length > word2Length) {
        return word1.length;
    } else if (word1.length === word2.length) {
        return word1Length;
    } else {
        return word2Length;
    }
}

console.log("Q15", biggestStringLength(word1, word2));
