//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Storing names of people I'd like to invite to dinner in an array called guestList
var guestList = ["Steve Jobs ", "Mother Teresa", "Abdul Sattar Edhi", "Isaac Newton"];
// Printing a message inviting each person to dinner
guestList.forEach(function (person) { return console.log("Dear ".concat(person, ", you are cordially invited to dinner with me. I would be honored by your presence.")); });
// Printing the name of the guest who can't make it
console.log("".concat(guestList[1], " can't make it to dinner."));
// Replacing the name of the guest who can't make it with the name of the new person
guestList[1] = "Nikola Tesla";
// Printing a second set of invitation messages
guestList.forEach(function (person) { return console.log("Dear ".concat(person, ", you are cordially invited to dinner with me. I would be honored by your presence.")); });
// Informing about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Adding new guests
guestList.unshift("Ada Lovelace"); // Add one new guest to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, "Grace Hopper"); // Add one new guest to the middle
guestList.push("Alan Turing"); // Add one new guest to the end using append()
// Printing a new set of invitation messages
guestList.forEach(function (person) { return console.log("Dear ".concat(person, ", you are cordially invited to dinner with me. I would be honored by your presence.")); });
