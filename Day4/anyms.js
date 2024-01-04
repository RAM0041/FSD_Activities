//a: Print odd numbers in an array
let numbers = [22,44,38,0,5,11,80,-23];
let oddNumbers = numbers.filter(function(num){ //filter function is used with anonymous function to check if a number is odd or not.
    return num % 2 !== 0;
});
console.log("Odd numbers: ",oddNumbers);

//b: Convert all the strings to title caps in a string array
let stringArray = ["hello world", "javascript is fun", "title case example"];
let titleCapsArray = stringArray.map(function(str){
    return str.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
});
console.log("Title case array:", titleCapsArray);

//c: Sum of all numbers in an array
let nums = [1,2,3,4,5];
let sum = numbers.reduce(function (accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
console.log("Sum of the numbers: ",sum);

//d: Return all the prime numbers in an array
let num = [1,2,3,4,5,6,7,8,9,10];
let primeNumbers = numbers.fileter(function (num){
    if(num < 2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
});
console.log("Prime numbers: ", primeNumbers);

//e: Return all the palindromes in an array
let words = ["level", "hello", "civic", "world", "radar"];
let palindromes = words.filter(function(word){
    let lowerWord = word.toLowerCase();
    return lowerWord === lowerWord.split('').reverse().join('');
});
console.log("Palindrome: ", palindromes);

//f: Return median of two sorted arrays of the same size.
let arr1 = [1,3,5];
let arr2 = [2,3,6];
let findMedian = function(arr1, arr2){
    let mergedArray = arr1.concat(arr2);
    mergedArray.sort(function(a,b){
        return a-b;
    });

    let length = mergedArray.length;
    let mid = Math.floor(length/2);

    if(length % 2 === 0){
        return (mergedArray[mid-1]+mergedArray[mid])/2;
    }else{
        return mergedArray[mid];
    }
};

console.log("Median: ", findMedian(arr1, arr2));

//g: Remove duplicates from an array
let arrayWithDuplicates = [1,2,3,4,2,5,6,1];
let uniqueArray = arrayWithDuplicates.filter(function(value, index, self){
    return self.indexOf(value) === index;
});
console.log("Array without duplicates:", uniqueArray);

//h: Rotate an array by k times
let originalArray = [1,2,3,4,5];
let k = 2;
let rotateArray = function(arr, k){
    k = k%arr.length;
    let rotateArray = arr.slice(k).concat(arr.slice(0, k));
};
console.log("Original array:", originalArray);
console.log("Rotated Array:", rotateArray(originalArray, k));
