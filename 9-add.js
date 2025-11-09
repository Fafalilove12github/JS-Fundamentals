const args = process.argv; // Get the command-line arguments

function add(a, b) { // Define the add function
    return a + b; // Return the sum of a and b
}

const num1 = parseInt(args[2]); // Convert the first argument to an integer
const num2 = parseInt(args[3]); // Convert the second argument to an integer

console.log(add(num1, num2)); // Call the add function and print the result
