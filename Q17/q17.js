//17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program 
// Storing names of people I'd like to invite to dinner in an array called guestList
var guestList = ["Steve Jobs ", "Mother Teresa ", "Abdul Sattar Edhi ", "Isaac Newton", "Nikola Tesla", "Grace Hopper", "Ada Lovelace", "Alan Turing"];
// Printing a message inviting each person to dinner
guestList.forEach(function (person) { return console.log("Dear ".concat(person, ", you are cordially invited to dinner with me. I would be honored by your presence.")); });
// Informing about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Adding new guests
guestList.unshift("Ada Lovelace"); // Add one new guest to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, "Grace Hopper"); // Add one new guest to the middle
guestList.push("Alan Turing"); // Add one new guest to the end using append()
// Printing a new set of invitation messages
guestList.forEach(function (person) { return console.log("Dear ".concat(person, ", you are cordially invited to dinner with me. I would be honored by your presence.")); });
// Informing about the shrinking dinner table
console.log("Oops! The new dinner table won't arrive in time. We can only invite two people for dinner.");
// Removing guests until only two names remain in the list
while (guestList.length > 2) {
    var removedGuest = guestList.pop(); // Remove the last person from the list
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Printing a message to each of the two people still on the list
guestList.forEach(function (person) { return console.log("Dear ".concat(person, ", you are still invited to dinner with me. I would be honored by your presence.")); });
// Removing the last two names from the list
guestList.pop();
guestList.pop();
// Printing the list to ensure it's empty
console.log("After removing guests, the guest list is now:", guestList);
