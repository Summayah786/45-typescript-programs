//3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Sumayya"; // Name is saved
console.log(personName.toLowerCase()); //Name in small letters.
console.log(personName.toUpperCase()); //Shows the name in UPPERCASE LETTERS.
console.log(personName.charAt(0).toUpperCase() +
    personName.slice(1).toLowerCase()); //Shows the name with the first letter as Uppercase letter .
