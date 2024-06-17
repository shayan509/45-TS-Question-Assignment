//This is the file that contains the questions 14-17//
console.log("Question no 14");
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.//
//Code is looking very confusing so adding line breaksfrom now on. //
console.log("");
//now code is looking better//
var list = ["Shafiq", "Rafeeq", "Mehboob"];
list.map(function (item) {
    return console.log("Assalamualikum ".concat(item, " , you are invited to dinner at my house on this friday."));
});
//Changing Guest List: You just heard that one of your guests can’tn make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.//
console.log("Question no 15");
//Code is looking very confusing so adding line breaks.//
console.log("");
//now code is looking better//
console.log("looks like ".concat(list[2], " cant make it , so we should invite someone else. "));
var cannot_attend = list.pop();
var new_guest = "Zohan";
//Code is looking very confusing so adding line breaks//
console.log("");
//now code is looking better//
console.log("We should invite ".concat(new_guest, "."));
list.push(new_guest);
//Code is looking very confusing so adding line breaks//
console.log("");
//now code is looking better//
list.map(function (item) {
    return console.log("Assalamualikum ".concat(item, " , you are invited to dinner at my house on this friday. "));
});
//Code is looking very confusing so adding line breaks//
console.log("");
//now code is looking better//
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log("Question no 16");
console.log("looks like we have found a bigger table, so we should invite some new guests. ");
var new_guest1 = "Adeem";
var new_guest2 = "Habeeb";
var new_guest3 = "Imran";
//now we are adiing adeem to start , habbeb to middle and imran to the end of our array//
list.unshift(new_guest1);
//we are using this step to add habbeb to middle index with removing anyone else//
var middleIndex = Math.floor(list.length / 2);
list.splice(middleIndex, 0, new_guest2);
list.push(new_guest3);
//Code is looking very confusing so adding line breaks//
console.log("");
//now code is looking better//
list.forEach(function (guest) {
    console.log("Assalamualikum ".concat(guest, " , you are invited to dinner at my house on this friday. "));
});
//Q no 17)Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
/*• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
console.log("Question no 17");
console.log("Ooo!, looks like the new table won't arrive on time , so we can invite only two guests.");
while (list.length > 2) {
    var removeGuest = list.pop();
    console.log("Sorry ".concat(removeGuest, ", You are no longer invited. "));
}
list.forEach(function (guest) {
    console.log("Dear ".concat(guest, " you are still invited to dinner."));
});
list.pop();
list.pop();
//Now we are printing oue list and making sure that our ist is empty//
console.log(list);
