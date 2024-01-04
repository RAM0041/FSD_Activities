//a: Print odd numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

//b: Convert all the strings to title caps in a string array
let stringArray = ["hello world", "javascript is fun", "title case example"];

let titleCapsArray = stringArray.map(str => 
    str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
);

console.log("Title Case Array:", titleCapsArray);

//c: Sum of all numbers in an array
let numberss = [1, 2, 3, 4, 5];

let sum = numberss.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum of the numbers:", sum);

//d: Return all the prime numbers in an array
let numbersss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = numbersss.filter(num => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
});

console.log("Prime numbers:", primeNumbers);

//e: Return all the palindromes in an array
let words = ["level", "hello", "civic", "world", "radar"];

let palindromes = words.filter(word => {
    let lowerWord = word.toLowerCase();
    return lowerWord === lowerWord.split('').reverse().join('');
});

console.log("Palindromes:", palindromes);

