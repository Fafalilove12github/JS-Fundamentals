const args = process.argv; // Get the arguments passed to the script

if (args[2] === undefined) {
    console.log("No argument");
} else {
    console.log(args[2]);
}
