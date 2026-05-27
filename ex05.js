// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const numbers = [1, 5, 3, 7, 23];
const containsEven = numbers.some((num) => num % 2 == 0);
console.log(containsEven ? 'Some of them are even' : 'None of them are even');
