//43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//Because the original array will be unchanged, return the new array and store it in a separate array
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Creating album objects
var album1 = { artist: 'Artist1', title: 'Album1', num_tracks: 10 };
var album2 = { artist: 'Artist2', title: 'Album2' };
var album3 = { artist: 'Artist3', title: 'Album3', num_tracks: 12 };
// Array of magician's names
var originalMagicians = ["Merlin", "David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the function to create a new array with "the Great" added to each magician's name
var greatMagicians = make_great(__spreadArray([], originalMagicians, true)); // Creating a copy of the original array
// Call the function to show both arrays
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
