//13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// String examples of famous modes if transportation in an array called transpor
var transportation = [
    ["motorcycle", "Honda"],
    ["car", "Tpypta"],
    ["bicycle", "Cannondale"],
    ["airplane", "Airbus"]
];
//Printing statements 
transportation.forEach(function (_a) {
    var mode = _a[0], brand = _a[1];
    return console.log("I would like to own a ".concat(brand, " ").concat(mode, "."));
});
