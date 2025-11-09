const args = process.argv; // Get the arguments passed to the script
const num = parseInt(args[2]); // Convert the first argument to an integer

if (isNaN(num) || num <= 0) { // Check if it's not a number or less than or equal to 0
    if (args.length < 3) {
        console.log("Missing number of occurrences");
    }
} else {
    for (let i = 0; i < num; i++) { // Loop to print the message num times
        console.log("C is fun");
    }
}
