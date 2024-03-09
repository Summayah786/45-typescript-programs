//14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner
//Then use your list to print a message to each person, inviting them to dinner.
//Storing the names of people invited to dinner soring in an array called guestlist .
var guestList = ["Steve Jobs", "Nelson Mandela", "Abdul Sattar Edhi", "Issac Newton"];
//Printing an invite for each guest 
guestList.forEach(function (person) { return console.log("Dear ".concat(person, ", you are cordially invited to dinner with me. I would be honored by your presence.")); });
