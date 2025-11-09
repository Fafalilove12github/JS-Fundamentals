const args = process.argv; // Get the arguments passed to the script
const size = parseInt(args[2]); // Convert the first argument to an integer

if (isNaN(size) || size <= 0) { // Check if it's not a number or less than or equal to 0
    console.log("Missing size");
} else {
    for (let i = 0; i < size; i++) { // Loop to create each row of the square
        let row = ''; // Initialize an empty string for each row
        for (let j = 0; j < size; j++) { // Loop to add 'X' for each column
            row += 'X'; // Add one 'X' to the row
        }
        console.log(row); // Print the completed row
    }
}
