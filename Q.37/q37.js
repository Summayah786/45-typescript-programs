//37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Define the function make_shirt with default parameters
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    // Print a sentence summarizing the size of the shirt and the message printed on it
    console.log("A ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
// Call the function to make a large shirt with the default message
make_shirt();
// Call the function to make a medium shirt with the default message
make_shirt("Medium");
// Call the function to make a shirt of any size with a different message
make_shirt("Small", "Hello, OpenAI!");
