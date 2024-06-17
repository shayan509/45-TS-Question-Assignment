/* Qno 30)Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
// Array of usernames
console.log("Question no 30");
var usernames = ["admin", "Eric", "John", "Alice", "Bob"];
// Loop through the array and print greetings
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
;
/* Q no 31)No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
console.log("Question no 31");
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _a = 0, usernames_2 = usernames; _a < usernames_2.length; _a++) {
        var username = usernames_2[_a];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
//creating a new array with no users//
/*• Remove all of the usernames from your array, and make sure the correct message is printed.*/
var users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
/* Q no 32) Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
// Define the list of current users
console.log("Question no 32");
var current_users = ['Shayan', 'Haseeb', 'Nabeel', 'Atif', 'Ali'];
// Define the list of new users
var new_users = ['SHAYAN', 'atif', 'ali', 'sarib', 'abdullah'];
// Convert current_users to lowercase for case insensitive comparison
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
// // Loop through the new users and check if the username is available
new_users.forEach(function (newUser) {
    if (current_users_lower.includes(newUser.toLowerCase())) {
        console.log("The username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
});
/*Qno 33)Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/
// Store the numbers 1 through 9 in an array
console.log("Question no 33");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
numbers.forEach(function (number) {
    var ordinal;
    // Use an if-else chain to determine the proper ordinal ending
    if (number === 1) {
        ordinal = 'st';
    }
    else if (number === 2) {
        ordinal = 'nd';
    }
    else if (number === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    // Print the number with its ordinal ending
    console.log("".concat(number).concat(ordinal));
});
/*Q no 34Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

*/
// Store the names of at least three kinds of favorite pizza in an array
console.log("Question no 34");
var favoritePizzas = ['Pepperoni', 'Cheese', 'Fajita'];
// Use a for loop to print a sentence using the name of the pizza
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log("I like ".concat(favoritePizzas[i], " pizza."));
}
// Add a line at the end of the program that states how much you like pizza
console.log('I really love pizza!');
