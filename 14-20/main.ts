//This is the file that contains the questions 14-17//
console.log("Question no 14");
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.//
//Code is looking very confusing so adding line breaksfrom now on. //
console.log("");
//now code is looking better//
let list: string[] = ["Shafiq", "Rafeeq", "Mehboob"];
list.map((item) =>
    console.log(
        `Assalamualikum ${item} , you are invited to dinner at my house on this friday.`
    )
);

//Changing Guest List: You just heard that one of your guests can’tn make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.//
console.log("Question no 15");
//Code is looking very confusing so adding line breaks.//
console.log("");
//now code is looking better//
console.log(
    `looks like ${list[2]} cant make it , so we should invite someone else. `
);
let cannot_attend = list.pop();
let new_guest: string = "Zohan";
//Code is looking very confusing so adding line breaks//
console.log("");
//now code is looking better//
console.log(`We should invite ${new_guest}.`);
list.push(new_guest);
//Code is looking very confusing so adding line breaks//
console.log("");
//now code is looking better//
list.map((item) =>
    console.log(
        `Assalamualikum ${item} , you are invited to dinner at my house on this friday. `
    )
);
//Code is looking very confusing so adding line breaks//
console.log("");
//now code is looking better//
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log("Question no 16");
console.log(
    "looks like we have found a bigger table, so we should invite some new guests. "
);

let new_guest1: string = "Adeem";
let new_guest2: string = "Habeeb";
let new_guest3: string = "Imran";
//now we are adiing adeem to start , habbeb to middle and imran to the end of our array//
list.unshift(new_guest1);
//we are using this step to add habbeb to middle index with removing anyone else//
const middleIndex = Math.floor(list.length / 2);
list.splice(middleIndex, 0, new_guest2);
list.push(new_guest3);
//Code is looking very confusing so adding line breaks//
console.log("");
//now code is looking better//
list.forEach((guest) => {
    console.log(
        `Assalamualikum ${guest} , you are invited to dinner at my house on this friday. `
    );
});

//Q no 17)Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
/*• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
console.log("Question no 17");
console.log(
    "Ooo!, looks like the new table won't arrive on time , so we can invite only two guests."
);
while (list.length > 2) {
    const removeGuest = list.pop();
    console.log(`Sorry ${removeGuest}, You are no longer invited. `);
}
list.forEach((guest) => {
    console.log(`Dear ${guest} you are still invited to dinner.`);
});
list.pop();
list.pop();
//Now we are printing our list and making sure that our ist is empty//

console.log(list);

/* Q no 18) Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
console.log("Question no 18");

let dreamDestinations: string[] = [
    "Makkah",
    "Madina",
    "India",
    "Chaina",
    "Iran",
];
console.log("Origional order =", dreamDestinations);
console.log("Alphabetical order =", [...dreamDestinations].sort());
console.log("Origional order after sorting =", dreamDestinations);
console.log(
    "Reverse Alphabetical order =",
    [...dreamDestinations].sort().reverse()
);
console.log("Origional order after reverse sorting =", dreamDestinations);

/* Q no 19) Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner*/
console.log("Question no 19");
let countInvitations = list.length;
console.log(` In the end ${countInvitations} people will come to dinner.`);

// Q no 20) Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.//
console.log("Question no 20");
let cities: string[] = ["karachi", "lahore", "Multan", "Makkah"];
console.log("Following is list of some cities:");
cities.forEach((city) => console.log(city));