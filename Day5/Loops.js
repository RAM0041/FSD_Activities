//2) For the above JSON, iterate over all for loops (for, for in, for of, forEach)
// Original JSON data
var arr = [{
    "Name": "Sriram",
    "Email": "sriramCareer@gmail.com",
    "Objective": "Full Stack Developer adept in working in both front-end and back-end development processes. Highly skilled in programming design, development, and implementation of functional specifications.",
    "Project": "Food delivery app, Project management software, Fitness tracker",
    "Skills": "HTML, CSS, React JS, Node.js, Ruby on rails, git and github",
    "Education": "BCA",
    "College": "Sri ramakrishna college of arts and science",
    "School": "Bharathiya vidhya bhavan",
    "Languages known": "Tamil, English, Hindi, Kannada"
}];

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Using for-in loop
// console.log("\nUsing for-in loop:");
// for (let index in arr[0]) {
//     console.log(index + ": " + arr[0][index]);
// }

// Using for-of loop
// console.log("\nUsing for-of loop:");
// for (let element of arr) {
//     console.log(element);
// }

// Using forEach loop
// console.log("\nUsing forEach loop:");
// arr.forEach(function (element) {
//     console.log(element);
// });
