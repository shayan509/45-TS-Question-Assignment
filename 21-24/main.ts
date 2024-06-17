
//Q no 21) They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("Question no 21");
let character: { name: string; gender: string; age: number } = {
    name: "Muhammad Shayan",
    gender: "Male",
    age: 15,
};
console.log(character);

// Q no 22) Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.//
console.log("Question no 22");
let week: string[] = [
    "Monday",
    "Tuesday",
    "Wedsday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
// console.log(week{7}); // this is our error
console.log(week[5]);

/* Q no 23) Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';
 
console.log("Is car == 'subaru'? I predict True.")
 
console.log(car == 'subaru')
 
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
 
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
console.log("Question no 23");
let car: string = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");

console.log("Is car == 'honda'? I predict False.");
console.log(car == "honda");

console.log("Is car != 'toyota'? I predict True.");
console.log(car != "toyota");

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== "subaru");

console.log("Is car !== 'honda'? I predict True.");
console.log(car !== "honda");

console.log("Is car === 'subaru'? I predict True.");
console.log(car === "subaru");

console.log("Is car === 'honda'? I predict False.");
console.log(car === "honda");

console.log("Is car !== 'subaru'? I predict True.");
console.log(car !== "subaru");
/*Q no 24 ) More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
 
• Tests using the lower case function
 
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
 
• Tests using "and" and "or" operators
 
• Test whether an item is in a array
 
• Test whether an item is not in a array*/
// Tests for equality and inequality with strings
console.log("Question no 24");
let fruit: string = "apple";
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == "apple");

console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != "banana");

console.log("Is fruit == 'orange'? I predict False.");
console.log(fruit == "orange");

console.log("Is fruit != 'apple'? I predict False.");
console.log(fruit != "apple");

// Tests using the lower case function
let city: string = "New York";
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == "new york");

console.log("Is city.toLowerCase() == 'los angeles'? I predict False.");
console.log(city.toLowerCase() == "los angeles");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 20;
console.log("Is num1 == num2? I predict False.");
console.log(num1 == num2);

console.log("Is num1 != num2? I predict True.");
console.log(num1 != num2);

console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2);

console.log("Is num1 > num2? I predict False.");
console.log(num1 > num2);

console.log("Is num1 <= num2? I predict True.");
console.log(num1 <= num2);

console.log("Is num1 >= num2? I predict False.");
console.log(num1 >= num2);

// Tests using "and" and "or" operators
let x: number = 5;
let y: number = 10;
console.log("Is x < 10 and y > 5? I predict True.");
console.log(x < 10 && y > 5);

console.log("Is x < 3 or y > 15? I predict False.");
console.log(x < 3 || y > 15);

// Test whether an item is in an array
let colors: string[] = ["red", "blue", "green"];
console.log("Is 'red' in the colors array? I predict True.");
console.log(colors.includes("red"));

console.log("Is 'yellow' in the colors array? I predict False.");
console.log(colors.includes("yellow"));

// Test whether an item is not in an array
console.log("Is 'purple' not in the colors array? I predict True.");
console.log(!colors.includes("purple"));

console.log("Is 'blue' not in the colors array? I predict False.");
console.log(!colors.includes("blue"));
