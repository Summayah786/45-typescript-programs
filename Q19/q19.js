//19.Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
// Storing names of people I'd like to invite to dinner in an array called guestList
// Storing names of people I'd like to invite to dinner in an array called guestList
var guestList = ["Steve Jobs ", "Mother Teresa", "Nelson Mandela", "Issac Newton"];
// Printing a message inviting each person to dinner
guestList.forEach(function (person) { return console.log("Dear ".concat(person, ", you are cordially invited to dinner with me. I would be honored by your presence.")); });
// Printing the number of people invited to dinner
console.log("Total number of people invited to dinner: ".concat(guestList.length));
