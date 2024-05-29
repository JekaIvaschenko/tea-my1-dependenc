// Helper function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Helper function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Helper function to format the temperature to 2 decimal places
function formatTemperature(temp) {
    return temp.toFixed(2);
}

// Main function to display the temperature conversions
function displayTemperatureConversions(temperature, scale) {
    let celsius, fahrenheit;

    if (scale === 'C') {
        celsius = temperature;
        fahrenheit = celsiusToFahrenheit(temperature);
    } else if (scale === 'F') {
        fahrenheit = temperature;
        celsius = fahrenheitToCelsius(temperature);
    } else {
        console.log('Please provide a valid scale: C for Celsius or F for Fahrenheit');
        return;
    }

    console.log(`Temperature Conversions:`);
    console.log(`${formatTemperature(celsius)} °C = ${formatTemperature(fahrenheit)} °F`);
}

// Example usage
const temperature = 25; // You can change this value to test different temperatures
const scale = 'C'; // Change this to 'F' to input temperature in Fahrenheit

displayTemperatureConversions(temperature, scale);
