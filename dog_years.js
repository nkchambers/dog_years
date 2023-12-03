// CODECADEMY JAVASCRIPT PRACTICE - Dog Years Project

// Task 1 - Create a variable named myAge, and set it equal to your age as a number.
let myAge = 32;
console.log(myAge);

// Task 10 - Great work! You can convert any human age to dog years. Try changing myAge and see what happens.
// myAge = 26;
// console.log(myAge);

// Task 2 - Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.
let earlyYears = 2;
console.log(earlyYears);

// Task 3 - Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.
earlyYears = earlyYears * 10.5;
console.log(earlyYears);

// Task 4 - Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
// Set the result equal to a variable called laterYears. We’ll be changing this value later.
let laterYears = myAge - 2;
console.log(laterYears);

// Task 5 - Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. 
// Use the multiplication assignment operator to multiply and assign in one step.
laterYears *= 4;
console.log(laterYears);

// Task 6 - Print to console values of earlyYears and laterYears
console.log(earlyYears);
console.log(laterYears);

// Task 7 - Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
const myAgeInDogYears = earlyYears + laterYears;
console.log(`Total number in dog years is ${myAgeInDogYears} years.`);

// Task 8 - Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.
// The toLowerCase method returns a string with all lowercase letters.
let myName = 'Nick Chambers';
myName = 'Nick Chambers'.toLowerCase();
console.log(myName);

// Task 9 - Write a console.log statement that displays your name and age in dog years. 
// Use string interpolation to display the value in the following sentence:
// My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);









