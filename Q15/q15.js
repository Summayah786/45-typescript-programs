// 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//Print a second set of invitation messages, one for each person who is still in your list.
// Storing names of people I'd like to invite to dinner in an array called guestList
var guestList = ["Steve Jobs ", "Nelson Mandela ", "Abdul Sattar Edhi", "Issac Newton"];
// Printing a message inviting each person to dinner
guestList.forEach(function (person) { return console.log("Dear ".concat(person, ", you are cordially invited to dinner with me. I would be honored by your presence.")); });
// Printing the name of the guest who can't make it
console.log("".concat(guestList[1], " can't make it to dinner."));
// Replacing the name of the guest who can't make it with the name of the new person
guestList[1] = "Mother Teresa";
// Printing a second set of invitation messages
guestList.forEach(function (person) { return console.log("Dear ".concat(person, ", you are cordially invited to dinner with me. I would be honored by your presence.")); });
