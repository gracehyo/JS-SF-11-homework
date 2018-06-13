
// FizzBuzz is a common software engineering interview question.
// Use your knowledge of loops and if/else statements to solve it.

// Description:
// Go through the numbers 1-100. 
// If a number is divisible by 3, log "Fizz". 
// If a number is divisible by 5, log "Fizz". 
// If a number is divisible by 3 and 5, log "FizzBuzz". 
// Otherwise, log the number itself.


// If you need a hint, follow the steps below.

// ##### Step 1:
// Construct a for loop that iterates through numbers 1 - 100.
var i = 0;
do {
    i += 1;
    console.log(i);
}while (i<100);

// ##### Step 2:
// Add an `if/else` statement that logs the string `"FizzBuzz"` if the value being iterated over is divisible by both `3` and `5`.
if(i % 3 === 0){
write = "FizzBuzz";}
{else {write="no";}





// ##### Step 3:
// Add an `else if` clause that logs the string `"Fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.
// ##### Step 4:
// Add an `else if` clause that logs the string `"Buzz"` if the value being iterated over is divisible by `5`.
// ##### Step 5:
// Add an `else` clause that logs the number.

