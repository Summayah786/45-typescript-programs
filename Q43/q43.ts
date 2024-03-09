//43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//Because the original array will be unchanged, return the new array and store it in a separate array
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


interface Album {
    artist: string;
    title: string;
    num_tracks?: number;
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Creating album objects
const album1: Album = { artist: 'Artist1', title: 'Album1', num_tracks: 10 };
const album2: Album = { artist: 'Artist2', title: 'Album2' };
const album3: Album = { artist: 'Artist3', title: 'Album3', num_tracks: 12 };

// Array of magician's names
const originalMagicians: string[] = ["Merlin", "David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the function to create a new array with "the Great" added to each magician's name
const greatMagicians: string[] = make_great([...originalMagicians]); // Creating a copy of the original array

// Call the function to show both arrays
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);