const coreJavaScript = [
    {
        id: 1,
        title: "Create a JavaScript file 'hello.js' and print hello world.",
        codeSnippet: `//Printing Hello World with log method
console.log("Hello World!")`
    },
    {
        id: 2,
        title: "Run hello.js file from Visual Studio Code terminal",
        codeSnippet: `//run this below command in vscode terminal
node hello.js`
    },
    {
        id: 3,
        title: "Create a variable with 'var' keyword and print it with console object and log method.",
        codeSnippet: `//initializing variable
var number1 = 10;
console.log('number before change', number1);
    
//reinitializing number1 variable
var number1 = 20;
console.log('number after change', number1); //output: 20`
    },
    {
        id: 4,
        title: 'Reinitialize the previous variable and change the value and print the value.',
        codeSnippet: `//initializing variable
var number1 = 10;
console.log('number before change', number1);
    
//reinitializing number1 variable
var number1 = 20;
console.log('number after change', number1); //output: 20`
    },
    {
        id: 5,
        title: "Declare a variable named 'companyName' with 'let' keyword and change the value with a new value and then print the value.",
        codeSnippet: `//declaring a varibale with let keyworlet comapanyName = "TS4U";
//can be changed since it is declared with let keyworcomapanyName = "TS4U LTD"
//access from global scopconsole.log('Company name accessing from global scope', comapanyName); //output: TS4U LTD`
    },
    {
        id: 6,
        title: "Try to redeclare the same variable 'companyName'",
        codeSnippet: `//declaring a varibale with let keyword
let comapanyName = "TS4U";
    
//can be changed since it is declared with let keyword
comapanyName = "TS4U LTD"
    
//cannot declared
// let comapanyName = 'TS4U LTD Inc' //throw a syntax error
    
//access from global scope
console.log('Company name accessing from global scope', comapanyName);`
    },
    {
        id: 7,
        title: "Declare a variable named 'companyName' with 'const' keyword and try to change the value with a new value and then print the value.",
        codeSnippet: `//declaring variable with const keyword
const comapanyName = "TS4U";
    
//cannot be changed since it is declared with const keyword
//comapanyName = "TS4U LTD" //throw a syntax error
    
//access from global scope
console.log('Company name accessing from global scope', comapanyName);`
    },
    {
        id: 8,
        title: 'Declare all the primitive-types data type and print all the data type.',
        codeSnippet: `//string
let motto = 'Best IT Training and 100% Job Placement in USA';
console.log(typeof(motto)) //string
    
//number
let password = 123456789;
console.log(typeof(password)) //number
    
//boolean
isBool = true;
console.log(typeof(isBool)) //boolean
    
//boolean
let x;
console.log(typeof(x)) //undefined
    
//null
console.log(typeof(null)) //object`
    },
    {
        id: 9,
        title: 'Create two array with array literal notation and Array contructor method.',
        codeSnippet: `//declaring a array with literal notation
const languages = ["Python", "Java", "JavaScript", "Golang"];
    
//declaring a array with Array contructor method
        const framerworks = new Array(5);`
    },
    {
        id: 10,
        title: 'Access the 3rd value of the previous array and print the value.',
        codeSnippet: `//declaring a array with literal notation
const languages = ["Python", "Java", "JavaScript", "Golang"];
    
//accessing the third value of the array
console.log(languages[2])`
    },
    {
        id: 11,
        title: "Add an element at the end of the array with 'push()' method.",
        codeSnippet: `//declaring a array with literal notation
const languages = ["Python", "Java", "JavaScript", "Golang"];
    
//adding value to the end of the array
languages.push('Rust');
    
console.log('New array is: ', languages); //output New array is:  [ 'Python', 'Java', 'JavaScript', 'Golang', 'Rust' ]`
    },
    {
        id: 12,
        title: "Remove an element at the end of the array with 'pop()' method.",
        codeSnippet: `//declaring a array with literal notation
const languages = ["Python", "Java", "JavaScript", "Golang"];
    
//remove value to the end of the array
languages.pop();
    
console.log('New array is: ', languages); //output New array is:  [ 'Python', 'Java', 'JavaScript' ]`
    },
    {
        id: 13,
        title: "Add an element at index of 3 of the array",
        codeSnippet: `//declaring a array with literal notation
const languages = ["Python", "Java", "JavaScript", "Golang"];
    
//override the value in the 3rd index of the array
languages[3] = 'TypeScript';
    
console.log('New array is: ', languages); //output New array is:  [ 'Python', 'Java', 'JavaScript', 'TypeScript' ]`
    },
    {
        id: 14,
        title: "Add an element in the first index of the array with 'unshift()' method.",
        codeSnippet: `//declaring a array with literal notation
const framerworks = new Array("NodeJs", "Spring", "Gin");
    
//add value in the first index of the array
framerworks.unshift('Django');
    
console.log('New array is: ', framerworks); //output New array is:  [ 'Django', 'NodeJs', 'Spring', 'Gin' ]`
    },
    {
        id: 15,
        title: "Remove first element of the array with 'shift()' method.",
        codeSnippet: `//declaring a array with literal notation
const framerworks = new Array("NodeJs", "Spring", "Gin");
    
//remove the first element of the array
framerworks.shift();
    
console.log('New array is: ', framerworks); //output New array is:  [ 'Spring', 'Gin' ]`
    },
    {
        id: 16,
        title: 'Sort an array and find the index of excersize value',
        codeSnippet: `let dailyActivities = ['sleep', 'work', 'exercise']

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log(dailyActivities); // ['exercise', 'sleep', 'work']
    
//finding the index position of string
const position = dailyActivities.indexOf('work');
console.log(position); // 2`
    },
    {
        id: 17,
        title: 'Declare an object and access the value with dot notation and bracet notation',
        codeSnippet: `//creating an object named person
const person = {
    firstName: "Shiblu",
    lastName : "Ahmad",
    fullName : function() {
    return this.firstName + " " + this.lastName;
    }
};
    
//printing first name and last name with dot and bracet notation
console.log('First name is', person.firstName)
console.log('Last name is', person['lastName']);`
    },
    {
        id: 18,
        title: 'Declare a nested object and access the value with dot notation and bracet notation',
        codeSnippet: `// nested object
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}
    
// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}
    
// accessing property of marks object
console.log(student.marks.science); // 70`
    },
    {
        id: 19,
        title: 'Declare an object and add a function and call it with dot notation.',
        codeSnippet: `//creating an object named person
const person = {
    firstName: "Shiblu",
    lastName : "Ahmad",
    id       : 1,
    fullName : function() {
    return this.firstName + " " + this.lastName;
    }
};
    
//printing full name
console.log('Full name is', person.fullName());`
    },
    {
        id: 20,
        title: 'Declare three variables and compare them with Equal to Operator',
        codeSnippet: `const a = 5, b = 2, c = 'hello';

// equal to operator
console.log(a == 5);     // true
console.log(b == '2');   // true
console.log(c == 'Hello');  // false`
    },
    {
        id: 21,
        title: 'Declare a variable and compare it with Strict Equal to Operator.',
        codeSnippet: `const a = 5;

// strict equal to operator
console.log(a === 5);     // true
console.log(a === '5');   // false`
    },
    {
        id: 22,
        title: 'Declare two variable and compare it with Strict Not Equal to Operator.',
        codeSnippet: `const a = 2;

// strict not equal operator
console.log(a !== '2'); // true
console.log(a !== 2); // false`
    },
    {
        id: 23,
        title: 'Write a program that will find whether the number is positive or not.',
        codeSnippet: `// check if the number is positive
const number = 20;
    
// check if number is greater than 0
if (number > 0) {
// the body of the if statement
console.log("The number is positive");
} else {
    console.log("The number is negative");
}`
    },
    {
        id: 24,
        title: 'Write a program that will find the largest number among three numbers',
        codeSnippet: `const num1 = 20;
const num2 = 30;
const num3 = 50;
    
let largest;
    
        // check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
    
// display the result
console.log("The largest number is " + largest);`
    },
    {
        id: 25,
        title: 'Write a program that will display numbers from 1 to 5',
        codeSnippet: `// program to display numbers from 1 to 5
const n = 5;
    
// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    console.log(i);     // printing the value of i
}`
    },
    {
        id: 26,
        title: 'Write a program that will display sum of n natural numbers',
        codeSnippet: `// program to display the sum of natural numbers
let sum = 0;
const n = 100
    
// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}
    
console.log('sum:', sum);`
    },
    {
        id: 27,
        title: 'How can you sum of an array element that contains interger number?',
        codeSnippet: `const marks = [45, 50, 80, 85, 88, 94];
let sum = 0;
    
//looping through all the elements
for(i=0; i < marks.length; i++){
    let result = marks[i];
    sum = sum + result;
}
console.log("summation is : ", sum);`
    },
    {
        id: 28,
        title: 'Define a function that has a parameter and print this parameter value by calling that function',
        codeSnippet: `// program to print the text
// declaring a function
function greet(name) {
    console.log("Hello " + name + ":)");
}
    
// variable name can be different
let name = "I'm a function"
    
// calling function
greet(name);`
    },
    {
        id: 29,
        title: 'Define a arrow function and add two values and return the added value.',
        codeSnippet: `//defining arrow function
const Addition = (number1, number2) => {
    return number1 + number2;
}
    
const result = Addition(50, 100);
console.log('The summation is: ', result);`
    },
    {
        id: 30,
        title: 'Write a program that can find the factorial of a number',
        codeSnippet: `function factorial(f){
let i = 1;
let fact = 1; //will start multiply with this number
    while (i<=f){
        fact = fact * i;
        i++;
    }
    return fact;
}
        
const factResult = factorial(5);
console.log(factResult);`
    },
    {
        id: 31,
        title: 'Convert inch to feet by using a function',
        codeSnippet: `// calculation by function
function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}
    
const feet1 = inchToFeet(168);
console.log(feet1);`
    },
    {
        id: 32,
        title: 'Convert an array elements from inch to feet by using a for loop',
        codeSnippet: `// calculation by loop

const inchList = [156, 168, 180, 192, 204];
for(i=0; i< inchList.length; i++){
    let Feet = inchList[i]/12;
    console.log(Feet);
}`
    },
    {
        id: 33,
        title: 'How can you get a year is leap or not?',
        codeSnippet: `function isLeapYear(year){
    if (year % 400 == 0){
        return "it's a leap year.";
    }else if(year % 4 == 0 && year % 100 != 0){
        return "It's a leap year.";
    }else{
        return "It's not a leap year.";
    }
}
        
const leapYear = isLeapYear(2020);
console.log(leapYear);`
    },
    {
        id: 34,
        title: 'Find the maximum number from an array',
        codeSnippet: `const marks = [20,35,50,84,78,92];
let max = marks[0];
for(i=0; i<= marks.length; i++){
    let newMax = marks[i];
    if(newMax>max){
        max = newMax;
    }
}
console.log("Highest Mark is :", max);`
    },
    {
        id: 35,
        title: 'Convert an octal number to binary by using switch statement.',
        codeSnippet: `function octalToBinary(octNum){
let i = 0;
let binary = "";
    while(octNum[i]){
        switch(octNum[i]){
            case '0' :
                binary += "000";
                break;
            case '1' :
                binary += "001";
                break;
            case '2' :
                binary += "010";
                break;
            case '3' :
                binary += "011";
                break;
            case '4' :
                binary += "100";
                break;
            case '5' :
                binary += "101";
                break;
            case '6' :
                binary += "110";
                break;
            case '7' :
                binary += "111";
                break;
            default :
                console.log("The number is invalid", octNum);
                break;
        }
        i++;
    }
    return binary;
}
        
const octnum = "654";
const convertFunction = octalToBinary(octnum);
console.log("Equivalent binary value = ", convertFunction);`
    },
    {
        id: 36,
        title: 'Find out whether the number is prime or not.',
        codeSnippet: `function isPrime(n){
    for( i = 2; i < n; i++){
        if(n%i == 0){
            return 'Your Number is not a prime number';
        }else{
            return 'Your number is a prime number';
        }
    }
}
    
const primeNumber = isPrime(120);
console.log(primeNumber);`
    },
    {
        id: 37,
        title: "Generate a random number with 'Math.random()' method",
        codeSnippet: `//generating number from 5 to 50
function randomNumberGenerator(num1, num2) {
    const number = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    console.log(number);
}
        
randomNumberGenerator(5, 50);`
    },
    {
        id: 38,
        title: 'How can you find the total vowels in a sentence?',
        codeSnippet: `function findVowel(sentence) {
const strSize = sentence.length;
let counts = 0;
        
for (let i = 0; i < strSize; i++) {
    if (sentence[i] == 'a' || sentence[i] == 'e' sentence[i] == 'i' || sentence[i] == 'o' sentence[i] == 'u') {
        counts++;
    }
}
console.log('Total number of vowel', counts);}
const sentence = "Hello This is Protik And Finding total counts";findVowel(sentence);`
    },
    {
        id: 39,
        title: 'Find out the duplicate elements and print them from an array',
        codeSnippet: `function extractDuplicate(ages) {
const totalAges = ages.length;
const duplicates = [];
let index = 0;
let initial = 1;
        
for (let i = 0; i < totalAges; i++) {
    for (j = initial; j < totalAges; j++) {
        if (ages[i] == ages[j]) {
            duplicates.push(ages[i]);
            index++;
            break;
        }
        initial++;
    }
}
console.log(duplicates);}
const ages = [23, 24, 25, 24, 23, 28, 27, 24];
extractDuplicate(ages);`
    },
    {
        id: 40,
        title: 'Reverse a string by using function',
        codeSnippet: `function reverseString(str){
let reverse = "";
for(i = 0; i < str.length; i++){
        let newString = str[i];
        reverse = newString + reverse;
    }
    return reverse;
}
const statement = "Hello, this is protik";
const result = reverseString(statement);
console.log(result);`
    },
    {
        id: 41,
        title: 'Run an infinite loop by using for loop',
        codeSnippet: `for(;;)
{
    console.log('Run for Life');
}`
    },
    {
        id: 42,
        title: 'How can you swap two integer numbers?',
        codeSnippet: `let a = 5;
let b = 7;
console.log("Before swapping : a = ", a, "b = ",b);
let temp = a;
a = b;
b = temp;
console.log("after swapping : a = ", a, "b = ",b);
    
//by js language specification
    
let i = 10;
let j = 20;
console.log("values are : i = ", i, "j = ", j);
[i, j] = [j, i];
console.log("now the value are : i = ", i, "j = ", j);`
    },
    {
        id: 43,
        title: 'How can you count total word in a sentence?',
        codeSnippet: `const speech = "I am a good person. I don't snore at night";

let count = 0;
for(i = 0; i < speech.length; i++){
    let word = speech[i];
    if(word == " "){
        count++;
    }
}
console.log("Total words are", count);`
    }
];

export default coreJavaScript;