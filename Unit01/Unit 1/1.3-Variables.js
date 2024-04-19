// Part 1: Celsius
let celsius = 100;
let fahrenheit = 0;

celsius += 2;
fahrenheit = (celsius * 9/5) + 32;

console.log(fahrenheit);
// Part 2: Fahrenheit

fahrenheit = 77; 

celsius = (fahrenheit - 32) * 5/9;

console.log(celsius);
// Part 3:
console.log(fahrenheit + " degrees Fahrenheit is " + celsius + " degrees Celsius.");

// Part 3: Slope of a Line

let x1 = -4;
let y1 = 5;
let x2 = 6;
let y2 = 0;

let m = (y2 - y1)/(x2 - x1);

console.log("The slope of the line from point A(-4,5) to point B(6,0) is: " + m);