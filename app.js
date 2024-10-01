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
// Function to determine if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return reversedStr === str ? `${str} is a palindrome.` : `${str} is not a palindrome.`;
}
// Using Conditional Statements (if else)
let age = 20;
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}
// Using Switch Statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
