
// Part 1: Asking what year they were born
let birthYear = prompt("What year were you born?  ");
console.log("You entered " + birthYear);

// Part 2: calculate age

let currentYear = 2024;
let age = currentYear - birthYear;
console.log("You are likely"+ age + "years old");

// Part 3: Showing their name
let name = prompt("What is your name? ");
console.log("Hello" + name + " You were born in" + birthyear + "You are likely to be " + age + " years old");

//Part 4: Calculate name length
let Length = name.length;

console.log("The length of your name is " + Length + " letters long.");

// Part 5: Fahrenheit and Celsius
let fahrenheit = prompt("Please enter a temperature in Fahrenheit: ");
let celsius = (fahrenheit - 32) * 5/9;
console.log("The temperature in Celsius is: " + celsius);

//Part 6: Prompt function
console.log("the prompt function can be used for various purposes including, knowing the general preference of the user");
console.log("the prompt function can also be used for taking in values")