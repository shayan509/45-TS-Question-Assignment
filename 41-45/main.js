var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* Qno 41) Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
console.log("Question no 41");
var magicians = ["Doctor Strange", "Harry Potter", "Gandalf", "Zatanna"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicians);
console.log("Question no 42");
/* Qno 42) Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.?*/
// Array of magician's names
// Function to modify the array by adding "the Great" to each magician's name
function make_great(magicians) {
    return magicians.map(function (magician) { return "The Great ".concat(magician); });
}
// Modify the magicians array
magicians = make_great(magicians);
// Call the function to show the modified list of magician's names
show_magicians(magicians);
/* Q no 43) Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
console.log("Question no 43");
var original_magicians = __spreadArray([], magicians, true);
var great_magicians = make_great(original_magicians);
console.log("Original magicians:");
show_magicians(magicians);
console.log("");
console.log("Great magicians:");
show_magicians(great_magicians);
/* Qno 44)Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
console.log("Question no 44");
// Function to make a sandwich with the provided items
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
// Call the function three times with different numbers of arguments
makeSandwich('Ham', 'Cheese', 'Lettuce');
makeSandwich('Turkey', 'Swiss Cheese');
makeSandwich('Peanut Butter', 'Jelly');
/* Qno 45) Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly*/
console.log("Question no 45");
// Function to store information about a car in an object
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        options: {}
    };
    // Adding optional properties
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car.options[key] = value;
    }
    return car;
}
// Example usage
var myCar = createCar("Toyota", "Camry", "color", "blue", "year", 2023, "owner", "shayan");
console.log(myCar);
