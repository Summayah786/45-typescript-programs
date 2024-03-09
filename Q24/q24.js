//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings
//Tests using the lower case function
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Tests using "and" and "or" operators
//Test whether an item is in a array
//Test whether an item is not in a array
var fruit = 'apple';
var age = 25;
var numbers = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit === 'apple');
console.log("Is fruit not equal to 'orange'? I predict True.");
console.log(fruit !== 'orange');
// Tests using the lower case function
console.log("Is fruit in lowercase 'apple'? I predict True.");
console.log(fruit.toLowerCase() === 'apple');
console.log("Is fruit in lowercase not 'Orange'? I predict True.");
console.log(fruit.toLowerCase() !== 'orange');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is age equal to 25? I predict True.");
console.log(age === 25);
console.log("Is age not equal to 30? I predict True.");
console.log(age !== 30);
console.log("Is age greater than 18? I predict True.");
console.log(age > 18);
console.log("Is age less than 30? I predict True.");
console.log(age < 30);
console.log("Is age greater than or equal to 25? I predict True.");
console.log(age >= 25);
console.log("Is age less than or equal to 25? I predict True.");
console.log(age <= 25);
// Tests using "and" and "or" operators
console.log("Is age greater than 18 and less than 30? I predict True.");
console.log(age > 18 && age < 30);
console.log("Is age greater than 18 or less than 20? I predict True.");
console.log(age > 18 || age < 20);
// Test whether an item is in an array
console.log("Is 3 in the numbers array? I predict True.");
console.log(numbers.includes(3));
// Test whether an item is not in an array
console.log("Is 6 not in the numbers array? I predict True.");
console.log(!numbers.includes(6));
