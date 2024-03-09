//38.Cities: Write a function called describe_city() that accepts the name of a city and its country
//The function should print a simple sentence, such as Karachi is in Pakistan.
//Give the parameter for the country a default value
//Call your function for three different cities, at least one of which is not in the default country.


// Define the function describe_city with a default parameter for country
function describe_city(city: string, country: string = "Unknown"): void {
    // Print a simple sentence describing the city and its country
    console.log(`${city} is in ${country}.`);
}


//Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
describe_city("Tokyo");


