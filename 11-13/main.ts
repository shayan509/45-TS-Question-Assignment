//This is the file that contains the questions 11-13//

//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.//
console.log("Question no 11");
let Friends: string[] = ["Haseeb", "Ali", "Abdullah", "Adeem", "Maaz"];
console.log(Friends[0]);
console.log(Friends[1]);
console.log(Friends[2]);
console.log(Friends[3]);
console.log(Friends[4]);

//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.//
console.log("Question no 12");
console.log(`Assalamualaikum ${Friends[0]},what are you up to these days?`);
console.log(
  `Assalamualaikum ${Friends[1]},how many mark did you score in your exams?`
);
console.log(`Assalamualaikum ${Friends[2]},you look Great!`);
console.log(`Assalamualaikum ${Friends[3]},how is your father doing?`);
console.log(`Assalamualaikum ${Friends[4]},congratulations your'e a father!`);

//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”//
console.log("Question no 13");
let transportation: string[] = ["bike", "car", "jeep"];
transportation.map((item) => console.log(`I would like to own a ${item}`));