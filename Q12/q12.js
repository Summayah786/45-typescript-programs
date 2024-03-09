//12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Fatima", "Habiba", "Afshan", "Sameeha"];
//Printing a personalized message to each person 
names.forEach(function (name) { return console.log("Hello, ".concat(name, "! Have a great day!")); });
