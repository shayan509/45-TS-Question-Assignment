/*This file contains the question 35-40*/
/* Qno 35) Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet! */
console.log("Q no 35");
var animals = ["Cow", "Bull", "Camel", "Goat"];
for (var i = 0; i < animals.length; i++) {
    console.log("Usuallay the love for ".concat(animals[i], " rises in the month of Zulhajjah , or more commenly known as \"Bakra Eid\"."));
}
console.log("The thing common in all these animals is that they are all sarificed in the name of Allah , in the month of Zulhajjah , by Muskims all around the world.");
/* Q no 36) T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/
console.log("Q no 36");
function make_shirt(Size, Colour, Message) {
    if (Size === void 0) { Size = "Large"; }
    if (Colour === void 0) { Colour = "Blue"; }
    if (Message === void 0) { Message = "This is Made by M.Shayan."; }
    console.log("The size of this shirt is ".concat(Size, " , it's color is ").concat(Colour, " , and the message that is printed on the shirt is \"").concat(Message, "\". "));
}
//Here i also added the defult values for the peremetrs of the this function//
//calling function//
make_shirt("Small", "Pink", "I'm calling a function");
/* Q no 37) Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
console.log("Q no 37");
function make_shirt_new(Size, Message) {
    if (Size === void 0) { Size = "Large"; }
    if (Message === void 0) { Message = "I love Typescript."; }
    console.log("The size of this shirt is ".concat(Size, " and the message that is printed on this shirts is \"").concat(Message, "\"."));
}
//Making a large shirt with defult message.
make_shirt_new();
//Making a Medium shirt with defult message.
make_shirt_new("Medium");
//Making a small shirt with new message.
make_shirt_new("Small", "This is a custom message.");
/* Q no 38) Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

*/
console.log("Q no 38");
var describe_city = function (city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
};
console.log("calling our function for 1st time. ");
describe_city("Karachi");
console.log("calling our function for 2nd time. ");
describe_city("Lahore");
console.log("calling our function for 3rd time. ");
describe_city("London", "UK");
/* Q no 39) City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
console.log("Q no 39");
// Function to format city and country
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with city-country pairs and print the returned value
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Tokyo", "Japan"));
/* Q no 40) Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.*/
console.log("Q no 40");
// Function to create an album object
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Call the function to create album objects
var album1 = make_album("Artist 1", "Album 1");
var album2 = make_album("Artist 2", "Album 2", 12);
var album3 = make_album("Artist 3", "Album 3", 8);
// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
