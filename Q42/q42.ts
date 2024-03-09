//42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
let magicians: string[] = ["Merlin", "David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the function to modify the array of magicians
magicians = make_great(magicians);

// Call the function to show magicians
show_magicians(magicians);