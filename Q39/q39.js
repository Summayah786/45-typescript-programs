//39.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
// Define the function city_country
function city_country(city, country) {
    // Return a string formatted with the city and its country
    return "".concat(city, ", ").concat(country);
}
// Call the function with three city-country pairs and print the returned value
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("London", "UK"));
