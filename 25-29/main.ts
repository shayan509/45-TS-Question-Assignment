/* Qno 25)Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
// Define the variable alien_color and assign it a value of 'green', 'yellow', or 'red'
console.log("Question no 25");
let alien_color: string = "green";

// Version that passes the if test
if (alien_color === "green") {
    console.log("Congratulations! You just earned 5 points.");
} else {
    console.log("You did not earn any points.");
}

// Version that fails the if test (no output)
if (alien_color === "blue") {
    console.log("Congratulations! You just earned 5 points.");
} else {
    console.log("You did not earn any points.");
}

/* Q no 26)Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/

// Define the variable alien_color and assign it a value of 'green', 'yellow', or 'red'
console.log("Question no 26");
let aliens_color: string = "green";

// Version that runs the if block
if (aliens_color === "green") {
    console.log(
        "Congratulations! You just earned 5 points for shooting the alien."
    );
} else {
    console.log(
        "Congratulations! You just earned 10 points for shooting the alien."
    );
}

// Version that runs the else block
let another_alien_color: string = "red"; // Change the color to 'yellow' or 'red' to test the else block

if (another_alien_color === "green") {
    console.log(
        "Congratulations! You just earned 5 points for shooting the alien."
    );
} else {
    console.log(
        "Congratulations! You just earned 10 points for shooting the alien."
    );
}
/* Qno 27) Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

// Version 1: Alien is green
console.log("Question no 27");
let alien2_color: string = "green";

if (alien_color === "green") {
    console.log(
        "Congratulations! You just earned 5 points for shooting the green alien."
    );
} else if (alien2_color === "yellow") {
    console.log(
        "Congratulations! You just earned 10 points for shooting the yellow alien."
    );
} else if (alien2_color === "red") {
    console.log(
        "Congratulations! You just earned 15 points for shooting the red alien."
    );
}

// Version 2: Alien is yellow
alien2_color = "yellow";

if (alien2_color === "green") {
    console.log(
        "Congratulations! You just earned 5 points for shooting the green alien."
    );
} else if (alien2_color === "yellow") {
    console.log(
        "Congratulations! You just earned 10 points for shooting the yellow alien."
    );
} else if (alien2_color === "red") {
    console.log(
        "Congratulations! You just earned 15 points for shooting the red alien."
    );
}

// Version 3: Alien is red
alien2_color = "red";

if (alien2_color === "green") {
    console.log(
        "Congratulations! You just earned 5 points for shooting the green alien."
    );
} else if (alien2_color === "yellow") {
    console.log(
        "Congratulations! You just earned 10 points for shooting the yellow alien."
    );
} else if (alien2_color === "red") {
    console.log(
        "Congratulations! You just earned 15 points for shooting the red alien."
    );
}

/* Q no 28)Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/

// Define the variable age and assign it a value
console.log("Question no 28");
let age: number = 25; // You can change the value of age to test different stages of life

// Determine the stage of life using an if-else chain
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}
//Code is looking very confusing so adding line breaks.//
console.log("");
//now code is looking better//

/* Qno 29)Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

// Array of favorite fruits
console.log("Question no 29");
 let favorite_fruits: string[] = ["banana", "apple", "mango"];

 // Check if each fruit is in the array
 if (favorite_fruits.includes("banana")) {
   console.log("You really like bananas!");
 }

 if (favorite_fruits.includes("apple")) {
   console.log("You really like apples!");
 }

 if (favorite_fruits.includes("mango")) {
   console.log("You really like mangoes!");
 }

 if (favorite_fruits.includes("orange")) {
   console.log("You really like oranges!");
 }

 if (favorite_fruits.includes("strawberry")) {
   console.log("You really like strawberries!");
 }
