//31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
//Remove all of the usernames from your array, and make sure the correct message is printed.

// Array of usernames
let usernames: string[] = [];
// Check if the list of users is not empty
if (usernames.length === 0) {
    // Print the message if the list is empty
    console.log("We need to find some users!");
} else {
    // Set a value for the variable age
    let age: number = 30;

    // If-else chain to determine the person's stage of life
    if (age < 2) {
        // Print a message that the person is a baby
        console.log("The person is a baby.");
    } else if (age >= 2 && age < 4) {
        // Print a message that the person is a toddler
        console.log("The person is a toddler.");
    } else if (age >= 4 && age < 13) {
        // Print a message that the person is a kid
        console.log("The person is a kid.");
    } else if (age >= 13 && age < 20) {
        // Print a message that the person is a teenager
        console.log("The person is a teenager.");
    } else if (age >= 20 && age < 65) {
        // Print a message that the person is an adult
        console.log("The person is an adult.");
    } else {
        // Print a message that the person is an elder
        console.log("The person is an elder.");
    }
}

