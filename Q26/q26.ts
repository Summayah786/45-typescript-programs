//26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//Write one version of this program that runs the if block and another that runs the else block.


//Version 1 ; Running if block Aliencolour is green 

// Variable to store the alien's color
let Aliencolour: string = 'green';

// If-else chain to check the color of the alien
if (Aliencolour === 'green') {
    // Print a statement that the player just earned 5 points for shooting the green alien
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
} else {
    // Print a statement that the player just earned 10 points for shooting an alien that isn't green
    console.log("Congratulations! You just earned 10 points for shooting down an alien that isn't green.");
}


//Version 2 Running the else block . Alien colour is not green.

// Variable to store the alien's color
let aliencolor: string = 'red';

// If-else chain to check the color of the alien
if (aliencolor === 'green') {
    // Print a statement that the player just earned 5 points for shooting the green alien
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
} else {
    // Print a statement that the player just earned 10 points for shooting an alien that isn't green
    console.log("Congratulations! You just earned 10 points for shooting down an alien that isn't green.");
}

