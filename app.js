// Data Types
let number = 10; 
let name = "Alice"; 
let isActive = true; 
let numbersArray = [1, 2, 3, 4, 5]; 
let user = { name: "Alice", age: 30 }; 
// Function to determine if a number is odd or even
function isOddOrEven(num) {
    if (num % 2 === 0) {
        return `${num} is even.`;
    } else {
        return `${num} is odd.`;
    }
}
// Function to determine if a number is prime
function isPrime(num) {
    if (num <= 1) return `${num} is not prime.`;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return `${num} is not prime.`;
    }
    return `${num} is prime.`;
}
