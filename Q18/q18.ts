//18.Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
//Print your array in its original order.
//Print your array in alphabetical order without modifying the actual list.
//Show that your array is still in its original order by printing it.
//Print your array in reverse alphabetical order without changing the order of the original list.
//Show that your array is still in its original order by printing it again.
// Reverse the order of your list. Print the array to show that its order has changed.
//Reverse the order of your list again. Print the list to show it’s back to its original order.
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// Store the locations in an array
let placesToVisit: string[] = ["Japan", "Italy", "Australia", "Brazil", "Egypt"];

// Print array in its original order
console.log("Original Order:", placesToVisit);

// Print array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Original Order (Again):", placesToVisit);

// Print array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Original Order (Yet Again):", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show that its order has changed
console.log("Reversed Order:", placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();

// Print the list to show it’s back to its original order
console.log("Original Order (Once Again):", placesToVisit);

// Sort the array so it’s stored in alphabetical order
placesToVisit.sort();

// Print the array to show that its order has been changed
console.log("Sorted in Alphabetical Order:", placesToVisit);


// Sort to change the array so it’s stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));

// Print the list to show that its order has changed
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);


