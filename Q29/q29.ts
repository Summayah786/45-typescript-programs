//29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//Make a array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


let favaouriteFruits: string[] = ["apple", "banana", "kiwi"];

//If statements to check certain fruits in the array 
if (favaouriteFruits.includes("apple"))  {
    console.log("You really lile apples!");
}

if (favaouriteFruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favaouriteFruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}

if (favaouriteFruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (favaouriteFruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}






