const args = process.argv; // Get the arguments passed to the script
const num = parseInt(args[2]); // Convert the first argument to an integer

if (isNaN(num)) { // Check if the conversion resulted in a number
    console.log("Not a number");
} else {
    console.log(`My number: ${num}`); // Print the converted number
}
