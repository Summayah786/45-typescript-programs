//32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//Make a list of five or more usernames called current_users.
//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// List of current usernames
let current_users: string[] = ["ahmed", "aliza", "adil", "abdullah", "areeba"];

//List of new usernames
let new_users: string[] = ["taha", "AHMED", "saad", "Adil", "rayyan"];

// Loop through the new_users list

for (let new_user of new_users)  {
 
     let username_exists: boolean = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
     if (username_exists) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
