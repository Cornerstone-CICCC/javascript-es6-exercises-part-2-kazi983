// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

const numbers = [5, 24, 10, 7, 0];
const isEverythingPositive = numbers.every((n) => n >= 0); // Feedback: use n > 0 here; 0 is not a positive number.
console.log(
  isEverythingPositive ? "There' no negative number" : "There's negative number",
);
