const args = process.argv; // Get the command-line arguments

function factorial(n) { // Define the recursive factorial function
    if (isNaN(n) || n < 0) { // Check if n is NaN or negative
        return 1; // Factorial of NaN or negative is defined as 1
    } else if (n === 0 || n === 1) { // Base case: factorial of 0 or 1 is 1
        return 1;
    } else {
        return n * factorial(n - 1); // Recursive case
    }
}

const num = parseInt(args[2]); // Convert the first argument to an integer
console.log(factorial(num)); // Call the factorial function and print the result
