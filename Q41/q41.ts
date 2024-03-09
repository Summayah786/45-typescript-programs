//41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Array of magician's names
const magicians: string[] = ["Merlin", "David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the function to show magicians
show_magicians(magicians);

