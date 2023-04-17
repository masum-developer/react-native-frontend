let i = 0;
let j = 0;
const name = '';

const JsData = [
    {
        name: 'introductionJs', //component name wise property
        desc: "JavaScript is a high-level, interpreted programming language that is widely used for creating dynamic web content and user interfaces. JavaScript can be used both on the client-side (running in a user's web browser) and on the server-side (running on a web server), and is known for its flexibility and versatility.",
        section1: {
            title1: 'Why do we learn JavaScript?',
            desc1: 'There are many reasons why people learn JavaScript, including:',
            lists1: [
                {
                    title: 'Front-end web development: JavaScript is an essential tool for creating dynamic and interactive web pages. It allows developers to add interactive elements such as forms, dropdown menus, animations, and user interface components.'
                },
                {
                    title: 'Back-end web development: JavaScript can be used on the server-side to create powerful web applications and APIs. Node.js, a popular JavaScript runtime environment, allows developers to create server-side applications using JavaScript.'
                },
                {
                    title: 'Mobile app development: JavaScript frameworks such as React Native and Ionic allow developers to create cross-platform mobile applications using JavaScript.'
                },
                {
                    title: 'Desktop app development: JavaScript can also be used to create desktop applications using frameworks such as Electron.'
                },
                {
                    title: 'Game development: JavaScript can be used to create browser-based games as well as desktop and mobile games using game engines such as Phaser and Babylon.js.'
                },
                {
                    title: 'Career opportunities: JavaScript is one of the most in-demand programming languages in the job market, and learning it can open up many career opportunities in the tech industry.'
                },
            ]
        },
        section2: {
            title2: 'Hello World using JavaScript',
            codeTemplate2: `<!DOCTYPE html>
            <html>
              <head>
                <title>Hello, world!</title>
              </head>
              <body>
                <script>
                  // Define a variable to hold the message
                  var message = "Hello, world!";
                  
                  // Display the message in an alert dialog box
                  alert(message);
                </script>
              </body>
            </html>`,
            codeTemplate2desc: "In this example, we define a variable called message and set it equal to the string 'Hello, world!'. We then use the alert() function to display the message in a dialog box in the user's web browser.When the HTML file is opened in a web browser, a dialog box will appear displaying the message 'Hello, world!'."
        }
    },
    {
        name: 'overviewJs', //component name wise property
        title: 'What is JavaScript?',
        desc: "JavaScript is a high-level, interpreted programming language that is widely used for creating dynamic web content and user interfaces. JavaScript can be used both on the client-side (running in a user's web browser) and on the server-side (running on a web server), and is known for its flexibility and versatility.JavaScript was originally created by Brendan Eich at Netscape Communications Corporation in 1995, and has since become one of the most popular programming languages in the world. JavaScript is used to create interactive web pages, dynamic user interfaces, web and mobile applications, and many other types of software.JavaScript is a powerful language that supports many programming paradigms, including object-oriented programming, functional programming, and procedural programming. It is also the primary language used for creating browser extensions and add-ons, and is increasingly used in other areas.JavaScript code is executed by a JavaScript engine, which is built into modern web browsers. The JavaScript engine interprets the code and executes it in the browser, allowing developers to create dynamic and interactive web pages that respond to user input and events.",
        section1: {
            title1: 'Advantages of JavaScript?',
            desc1: 'JavaScript has many advantages as a programming language, including:',
            lists1: [
                {
                    title: 'Versatility: JavaScript can be used both on the client-side and the server-side, making it a versatile language that can be used to build a wide range of applications.'
                },
                {
                    title: 'Popularity: JavaScript is one of the most popular programming languages in the world, with a large and active community of developers and users.'
                },
                {
                    title: 'Speed: JavaScript is a fast and efficient language, making it ideal for building high-performance web applications.                    '
                },
                {
                    title: 'Interactivity: JavaScript allows developers to create dynamic and interactive web pages that respond to user input and events.'
                },
                {
                    title: 'Rich libraries and frameworks: JavaScript has a wide range of libraries and frameworks available, making it easy for developers to build complex applications quickly and efficiently.'
                },
                {
                    title: 'Easy to learn: JavaScript is a relatively easy language to learn, making it accessible to beginners and experienced programmers alike.'
                },
                {
                    title: 'Compatibility: JavaScript code can run on almost any modern web browser, making it a highly compatible language.'
                }
            ]
        },
        section2: {
            title2: 'Disadvantages of JavaScript',
            desc2: 'While JavaScript has many advantages as a programming language, it also has some disadvantages, including:',
            list2: [
                {
                    title: 'Versatility: JavaScript can be used both on the client-side and the server-side, making it a versatile language that can be used to build a wide range of applications.'
                },
                {
                    title: 'Popularity: JavaScript is one of the most popular programming languages in the world, with a large and active community of developers and users.'
                },
                {
                    title: 'Browser compatibility: JavaScript code can behave differently in different browsers, making it challenging to create cross-browser compatible applications.'
                },
                {
                    title: 'Security risks: JavaScript can be vulnerable to security threats such as cross-site scripting (XSS) and code injection attacks if not properly secured.'
                },
                {
                    title: 'Performance issues: JavaScript can be slower than other programming languages, especially for applications that require a lot of processing power.'
                },
                {
                    title: 'Debugging: Debugging JavaScript code can be challenging, especially for complex applications.'
                },
                {
                    title: 'No strong typing: JavaScript is a loosely typed language, meaning that variables can change their data type dynamically, which can lead to unexpected behavior and errors.'
                },
                {
                    title: 'Lack of standardization: While JavaScript is a standardized language, there are many different versions and implementations of the language, which can lead to compatibility issues and confusion.'
                }
            ]
        },
        section3: {
            title3: 'What is ECMAScript (or ES)',
            desc3: 'ECMAScript (or ES) is a standardized version of the JavaScript programming language. It is a scripting language specification that defines the syntax, semantics, and core features of JavaScript. ECMAScript was originally created by the European Computer Manufacturers Association (ECMA) as a way to standardize JavaScript, which was then owned by Netscape Communications Corporation.',
        }
    },
    {
        name: 'syntaxJs', //component name wise property
        title: 'JavaScript Syntax',
        desc: "JavaScript can be implemented using JavaScript statements that are placed within the <script>... </script> HTML tags in a web page. You can place the <script> tags, containing your JavaScript, anywhere within your web page, but it is normally recommended that you should keep it within the <head> tags.",
        codeTemplate: `<script language = "javascript" type = "javascript">
        JavaScript code
</script>`,
        section1: {
            desc1: '1) Declaring variables:',
            codeTemplate1:
                `// Declare a variable
var myVariable;
            
// Assign a value to the variable
myVariable = 5;
            
// Declare and assign a value to a variable
var myOtherVariable = "Hello, world!";`,
        },
        section2: {
            desc2: '2) Using conditional statements:',
            codeTemplate2: `// If statement
if (x > 10) {
    console.log("x is greater than 10");
} else {
    console.log("x is less than or equal to 10");
}
            
// Ternary operator
var message = (isMorning) ? "Good morning!" : "Goafternoon!";`,
        },
        section3: {
            desc3: '3) Using loops:',
            codeTemplate3: `// For loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}
            
// While loop
var count = 0;
while (count < 10) {
    console.log(count);
    count++;
}`,
        },
        section4: {
            desc4: '4) Creating functions:',
            codeTemplate4: `// Function declaration
function addNumbers(x, y) {
    return x + y;
}
            
// Function expression
var subtractNumbers = function(x, y) {
    return x - y;
};`,
        },
        section5: {
            desc5: 'These are just a few examples of the basic syntax used in JavaScript. There are many more features and syntax rules in the language, and mastering them takes time and practice.'
        }
    },
    {
        name: 'varJs', //component name wise property
        title: `Variable with 'var' keyword`,
        desc: "In JavaScript, the 'var' keyword is used to declare a variable. Here are some examples of using the 'var' keyword to declare variables:",
        section1: {
            desc1: '1) Declaring a variable without assigning a value:',
            codeTemplate1:
                `var myVariable;`,
        },
        section2: {
            desc2: '2) Declaring a variable and assigning a value:',
            codeTemplate2: `var myNumber = 5;
var myString = "Hello, world!";
var myObject = { name: "John", age: 30 };`,
        },
        section3: {
            desc3: '3) Updating the value of a variable:',
            codeTemplate3: `var myNumber = 5;
myNumber = 10; // the value of myNumber is now 10`,
            desc3_2: 'Variables declared with var have function scope or global scope. This means that a variable declared with var inside a function is only accessible within that function, while a variable declared with var outside of a function (i.e., in the global scope) is accessible throughout the entire program. Here is an example:',
            codeTemplate3_2: `var myGlobalVariable = "Hello, world!"; // global variable

function myFunction() {
    var myLocalVariable = "This is a local variable."; //local variable
    console.log(myGlobalVariable); // can access globvariable
    console.log(myLocalVariable); // can access locvariable
}
            
myFunction();
console.log(myGlobalVariable); // can access globvariable outside of function
console.log(myLocalVariable); // cannot access locvariable outside of function`
        },
        section4: {
            desc4: 'While var is still a valid way to declare variables in JavaScript, the newer let and const keywords provide more control over variable scope and can help prevent bugs caused by accidentally reusing variable names.',
        }
    },
    {
        name: 'letJs', //component name wise property
        title: `Variable with 'let' keyword`,
        desc: "In JavaScript, the let keyword is used to declare a block-scoped variable. Here are some examples of using the let keyword to declare variables:",
        section1: {
            desc1: '1) Declaring a variable without assigning a value:',
            codeTemplate1:
                `let myVariable;`,
        },
        section2: {
            desc2: '2) Declaring a variable and assigning a value:',
            codeTemplate2: `let myNumber = 5;
let myString = "Hello, world!";
let myObject = { name: "John", age: 30 };`,
        },
        section3: {
            desc3: '3) Updating the value of a variable:',
            codeTemplate3: `let myNumber = 5;
myNumber = 10; // the value of myNumber is now 10`,
            desc3_2: 'Variables declared with let have block scope, which means that they are only accessible within the block of code in which they are defined. This can help prevent bugs caused by accidentally reusing variable names or accessing variables from unintended places in your code. Here is an example:',
            codeTemplate3_2: `let myGlobalVariable ="Helloworld!"; // global variable

function myFunction() {
    let myLocalVariable = "This is a local variab"; // local variable
    console.log(myGlobalVariable); // can access globvariable
    console.log(myLocalVariable); // can access locvariable
}
            
myFunction();
console.log(myGlobalVariable); // can access globvariable outside of function
console.log(myLocalVariable); // cannot access locvariable outside of function`
        },
        section4: {
            desc4: 'In addition to providing block scoping, the let keyword also prevents the variable from being redeclared within the same block of code. This can help catch errors and improve code readability.',
        },
        section5: {
            title5: "Characteristics of 'let' keyword",
            list5: [
                "Block scope: Variables declared with let have block scope, meaning that they are only accessible within the block of code in which they are defined. This is different from variables declared with var, which have function scope or global scope.",
                "Prevents redeclaration: Variables declared with let cannot be redeclared within the same block of code. This can help prevent errors and improve code readability.",
                "Can be updated: Variables declared with let can be updated by assigning a new value to them.",
                "Preferred over var: 'let' is often preferred over 'var' because it provides better control over variable scope and prevents certain types of errors."
            ]
        }
    },
    {
        name: 'constJs', //component name wise property
        title: `Variable with 'const' keyword`,
        desc: "In JavaScript, the const keyword is used to declare a constant variable, which is a variable whose value cannot be reassigned. Here are some examples of using the const keyword to declare variables:",
        section1: {
            desc1: '1) Declaring a constant variable and assigning a value:',
            codeTemplate1:
                `const myNumber = 5;
const myString = "Hello, world!";
const myObject = { name: "John", age: 30 };`,
        },
        section2: {
            desc2: '2) Trying to reassign a value to a constant variable will result in an error:',
            codeTemplate2: `const myNumber = 5;
myNumber = 10; // TypeError: Assignment to constant variable.`,
            desc2_2: 'Constants declared with const also have block scope, meaning that they are only accessible within the block of code in which they are defined. Here is an example:',
            codeTemplate2_2: `function myFunction() {
    const myLocalVariable = "This is a local constant."; // local constant
    console.log(myLocalVariable); // can access local constant
}
              
myFunction();
console.log(myLocalVariable); // ReferenceError: myLocalVariable is not defined`,
            desc2_3: "Using constants with const can help prevent bugs caused by accidentally reassigning variable values, and can make your code more readable by indicating that certain values should not be changed. It's important to note, however, that constants declared with const can still be mutated if they contain objects or arrays."
        },

        section3: {
            title3: "Characteristics of 'const' keyword",
            list3: [
                "Constant values: Variables declared with const are constant, meaning that their value cannot be reassigned once they have been initialized.",
                "Block scope: Constants declared with const have block scope, meaning that they are only accessible within the block of code in which they are defined.",
                "Prevents redeclaration: Constants declared with const cannot be redeclared within the same block of code.",
                "Can be updated: While the value of a constant variable cannot be reassigned, the properties of objects or elements of an array assigned to a constant variable can be changed.",
                "Preferred over let and var: const is often preferred over let and var when you want to declare a variable that should not be reassigned, as it makes this intention clear and can help prevent certain types of errors."
            ],
            desc3: "Overall, using const to declare variables in JavaScript provides more control over variable values and can help prevent bugs caused by accidentally reassigning variable values. It's important to use const where appropriate to indicate that certain values should not be changed, and to use descriptive variable names to ensure clean and organized code."
        }
    },
    {
        name: 'operator', //component name wise property
        title: `JavaScript Operator`,
        desc: "JavaScript operators are used to perform operations on values, such as addition, subtraction, and comparison. Here are some examples of JavaScript operators:",
        section1: {
            desc1: '1) Arithmetic operators:',
            codeTemplate1:
                `let x = 5 + 3; // addition
let y = 7 - 2; // subtraction
let z = 4 * 6; // multiplication
let w = 15 / 3; // division
let v = 10 % 3; // modulus (remainder of division)`,
        },
        section2: {
            desc2: '2) Comparison operators:',
            codeTemplate2: `let a = 10;
let b = 5;
console.log(a > b); // greater than
console.log(a < b); // less than
console.log(a >= b); // greater than or equal to
console.log(a <= b); // less than or equal to
console.log(a === b); // equal to (strict equality)
console.log(a !== b); // not equal to (strict inequality)`,
        },
        section3: {
            desc3: '3) Logical operators:',
            codeTemplate3: `let a = true;
let b = false;
console.log(a && b); // logical AND
console.log(a || b); // logical OR
console.log(!a); // logical NOT`,
        },
        section4: {
            desc4: '4) Assignment operators::',
            codeTemplate4: `let x = 5;
x += 3; // equivalent to x = x + 3;
x -= 2; // equivalent to x = x - 2;
x *= 4; // equivalent to x = x * 4;
x /= 2; // equivalent to x = x / 2;
x %= 3; // equivalent to x = x % 3;`,
        },
        section5: {
            desc5: '5) Bitwise operators:',
            codeTemplate5: `let x = 5; // equivalent to 101 in binary
let y = 3; // equivalent to 011 in binary
console.log(x & y); // bitwise AND (001)
console.log(x | y); // bitwise OR (111)
console.log(x ^ y); // bitwise XOR (110)
console.log(~x); // bitwise NOT (010)
console.log(x << 2); // left shift (10100)
console.log(x >> 1); // right shift (10)`,
            desc5_2: 'These are just a few examples of the many JavaScript operators that can be used to manipulate values in your code. Understanding how to use these operators effectively is essential for mastering JavaScript programming.'
        }
    },
    {
        name: 'arithmetic', //component name wise property
        title: `Arithmetic Operator`,
        desc: "In JavaScript, arithmetic operators are used to perform mathematical operations on values. Here are some examples of arithmetic operators in JavaScript:",
        section1: {
            desc1: '1) Addition (+):',
            codeTemplate1:
                `let x = 5;
let y = 3;
let z = x + y; // z equals 8`,
        },
        section2: {
            desc2: '2) Subtraction (-):',
            codeTemplate2: `let x = 5;
let y = 3;
let z = x - y; // z equals 2`,
        },
        section3: {
            desc3: '3) Multiplication (*):',
            codeTemplate3: `let x = 5;
let y = 3;
let z = x * y; // z equals 15`,
        },
        section4: {
            desc4: '4) Division (/):',
            codeTemplate4: `let x = 6;
let y = 3;
let z = x / y; // z equals 2`,
        },
        section5: {
            desc5: '5) Modulus (%):',
            codeTemplate5: `let x = 7;
let y = 3;
let z = x % y; // z equals 1`,
            desc5_2: 'Arithmetic operators can be used with both numeric values and variables that contain numeric values. They can also be combined with assignment operators (+=, -=, *=, /=, %=) to modify the value of a variable directly.',
            codeTemplate5_2: `let x = 5;
x += 3; // equivalent to x = x + 3
x -= 2; // equivalent to x = x - 2
x *= 4; // equivalent to x = x * 4
x /= 2; // equivalent to x = x / 2
x %= 3; // equivalent to x = x % 3`
        }
    },
    {
        name: 'assignment', //component name wise property
        title: `Assignment Operator`,
        desc: "In JavaScript, the assignment operator (=) is used to assign a value to a variable. Here are some examples of using the assignment operator:",
        section1: {
            codeTemplate1:
                `let x = 5; // assigns the value 5 to the variable x
let y = "Hello, world!"; // assigns the string "Hello, world!" to the variable y
let z = { name: "John", age: 30 }; // assigns an object to the variable z
            
x = 10; // assigns the value 10 to the variable x, overwriting the previous value of 5
y = "Goodbye!"; // assigns the string "Goodbye!" to the variable y, overwriting the previous value of "Hello, world!"
z.name = "Jane"; // updates the value of the name property in the object assigned to the variable z
            
console.log(x); // outputs 10
console.log(y); // outputs "Goodbye!"
console.log(z); // outputs { name: "Jane", age: 30 }`,
            desc1: 'The assignment operator can also be combined with arithmetic operators (+=, -=, *=, /=, %=) to modify the value of a variable directly.',
            codeTemplate1_2: `let x = 5;
x += 3; // equivalent to x = x + 3, assigns the value 8 to the variable x
x -= 2; // equivalent to x = x - 2, assigns the value 6 to the variable x
x *= 4; // equivalent to x = x * 4, assigns the value 24 to the variable x
x /= 2; // equivalent to x = x / 2, assigns the value 12 to the variable x
x %= 3; // equivalent to x = x % 3, assigns the value 0 to the variable x`,
            desc1_2: 'Using the assignment operator is an essential part of working with variables in JavaScript, as it allows you to store and modify values in your code.'
        },
    },
    {
        name: 'comparison', //component name wise property
        title: `Comparison Operator`,
        desc: "In JavaScript, comparison operators are used to compare two values and return a Boolean value (true or false) based on whether the comparison is true or false. Here are some examples of comparison operators:",
        section1: {
            desc1: '1) Equal to (== or ===):',
            codeTemplate1:
                `console.log(5 == 5); // true
console.log(5 == "5"); // true (loose equality, compares values only)
console.log(5 === "5"); // false (strict equality, compares values and types)`,
        },
        section2: {
            desc2: '2) Not equal to (!= or !==):',
            codeTemplate2: `console.log(5 != 3); // true
console.log(5 != "5"); // false (loose inequality, compares values only)
console.log(5 !== "5"); // true (strict inequality, compares values and types)`,
        },
        section3: {
            desc3: '3) Greater than (>):',
            codeTemplate3: `console.log(5 > 3); // true
console.log(5 > 10); // false`,
        },
        section4: {
            desc4: '4) Less than (<):',
            codeTemplate4: `console.log(5 < 10); // true
console.log(5 < 3); // false`,
        },
        section5: {
            desc5: '5) Greater than or equal to (>=):',
            codeTemplate5: `console.log(5 >= 5); // true
console.log(5 >= 10); // false`,
        },
        section6: {
            desc6: '6) Less than or equal to (<=):',
            codeTemplate5: `console.log(5 <= 10); // true
console.log(5 <= 3); // false`,
            desc6_2: 'Comparison operators are often used in conditional statements (if, else if, switch, etc.) to determine the flow of the program based on the value of a variable or the outcome of a comparison. Understanding how to use comparison operators in JavaScript is essential for creating effective and reliable code.'
        }
    },
    {
        name: 'dataTypes', //component name wise property
        title: `JavaScript Data Types`,
        desc: "In JavaScript, there are several data types that can be used to represent different kinds of values. Here are some of the basic data types in JavaScript:",
        section0: {
            title0: 'Data Types list: ',
            list0: ['Number', 'String', 'Boolean', 'Null', 'Undefined', 'Object', 'Symbol'],
            title0_1: 'Object Data Types: ',
            list0_1: ['Array', 'Object', 'Date'],

        },
        section1: {
            desc1: '1) Number: Used to represent numeric values, including integers, floats, and NaN (Not-a-Number).',
            codeTemplate1:
                `let x = 5; // integer
let y = 3.14; // float
let z = NaN; // Not-a-Number`,
        },
        section2: {
            desc2: '2) String: Used to represent text values.',
            codeTemplate2: `let x = "Hello, world!";
let y = "42"; // note that "42" is a string, not a number`,
        },
        section3: {
            desc3: '3) Boolean: Used to represent logical values of true or false.',
            codeTemplate3: `let x = true;
let y = false;`,
        },
        section4: {
            desc4: '4) Null: Used to represent the intentional absence of any object value.',
            codeTemplate4: `let x = null;`,
        },
        section5: {
            desc5: '5) Undefined: Used to represent a variable that has not been assigned a value.',
            codeTemplate5: `let x;
console.log(x); // outputs undefined`,
        },
        section6: {
            desc6: '6) Object: Used to represent complex data structures, such as arrays and objects.',
            codeTemplate6: `let x = { name: "John", age: 30 }; // object
let y = [1, 2, 3, 4]; // array`,
        },
        section7: {
            desc7: '6) Symbol: Used to represent a unique identifier that is not equal to any other value',
            codeTemplate7: `let x = Symbol("mySymbol");`,
            desc7_2: "Understanding the different data types in JavaScript is important for writing effective code and avoiding common mistakes. It's also important to note that JavaScript is a dynamically typed language, meaning that variables can change data types during runtime."
        }
    },
    {
        name: 'strings', //component name wise property
        title: `JavaScript Strings`,
        desc: "In JavaScript, strings are used to represent text values. A string is a sequence of characters enclosed in single or double quotes. Here are some examples of strings in JavaScript:",
        section1: {
            desc1: 'You can also use template literals (enclosed in backticks) to create strings with embedded expressions:',
            codeTemplate1:
                `let myString = "Hello, world!";
let myOtherString = 'JavaScript is fun!';`,
        },
        section2: {
            codeTemplate2: `let myName = "John";
let myGreeting = Hello, my name is ${'myName'}`,
        },
        section3: {
            title3: 'String methods: ',
            desc3: 'In addition to the basic syntax for creating strings, there are several built-in string methods that can be used to manipulate and extract information from strings. Here are a few examples:',
        },
        section4: {
            desc4: '1) toUpperCase(): Returns the string with all characters converted to uppercase.',
            codeTemplate4: `let myString = "hello, world!";
console.log(myString.toUpperCase()); // outputs "HELLO, WORLD!"`,
        },
        section5: {
            desc5: '2) toLowerCase(): Returns the string with all characters converted to lowercase.',
            codeTemplate5: `let myString = "JAVASCRIPT IS FUN!";
console.log(myString.toLowerCase()); // outputs "javascript is fun!"`,
        },
        section6: {
            desc6: '3) charAt(index): Returns the character at the specified index in the string.',
            codeTemplate6: `let myString = "Hello, world!";
console.log(myString.charAt(7)); // outputs "w"`,
        },
        section7: {
            desc7: '4) slice(startIndex, endIndex): Returns a substring of the original string starting at the specified start index and ending at the specified end index (not inclusive).',
            codeTemplate7: `let myString = "Hello, world!";
console.log(myString.slice(0, 5)); // outputs "Hello"`,
        },
        section8: {
            desc8: '5) concat(string1, string2, ...): Combines two or more strings into a single string.',
            codeTemplate8: `let myString = "Hello, ";
let myOtherString = "world!";
console.log(myString.concat(myOtherString)); // outputs "Hello, world!"`,
        },
        section9: {
            desc9: '6) indexOf(searchValue, startIndex): Returns the index of the first occurrence of the specified search value in the string, starting at the specified start index (optional).',
            codeTemplate9: `let myString = "Hello, world!";
console.log(myString.indexOf("o")); // outputs 4
console.log(myString.indexOf("l", 3)); // outputs 3`,
        },
        section10: {
            desc10: '7) lastIndexOf(searchValue, endIndex): Returns the index of the last occurrence of the specified search value in the string, ending at the specified end index (optional).',
            codeTemplate10: `let myString = "Hello, world!";
console.log(myString.lastIndexOf("o")); // outputs 7
console.log(myString.lastIndexOf("l", 3)); // outputs 2`,
        },
        section11: {
            desc11: '8) replace(searchValue, replaceValue): Replaces the first occurrence of the specified search value with the specified replace value in the string.',
            codeTemplate11: `let myString = "Hello, world!";
console.log(myString.replace("world", "JavaScript")); // outputs "Hello, JavaScript!"`,
        },
        section12: {
            desc12: '9) split(separator, limit): Splits the string into an array of substrings based on the specified separator and optional limit.',
            codeTemplate12: `let myString = "Hello, world!";
console.log(myString.split(" ")); // outputs ["Hello,", "world!"]`,
            desc12_2: 'These are just a few examples of the many built-in string methods available in JavaScript. Understanding how to work with strings is important for many aspects of JavaScript programming, including manipulating text, validating user input, and working with APIs that return string data.'
        },
    },
    {
        name: 'numbers', //component name wise property
        title: `JavaScript Numbers`,
        desc: "In JavaScript, numbers are used to represent numeric values, including integers, floats, and special values such as NaN (Not-a-Number) and Infinity. Here are some examples of numbers in JavaScript:",
        section1: {
            codeTemplate1:
                `let myNumber = 42; // integer
let myOtherNumber = 3.14; // float
let myNaN = NaN; // Not-a-Number
let myInfinity = Infinity; // positive infinity
let myNegativeInfinity = -Infinity; // negatiinfinity`,
            desc1: 'JavaScript provides a variety of built-in methods for working with numbers. Here are some examples of number methods in JavaScript:'
        },
        section2: {
            desc2: '1) toFixed(decimalPlaces): Returns a string representation of the number with the specified number of decimal places.',
            codeTemplate2: `let myNumber = 3.14159265;
console.log(myNumber.toFixed(2)); // outputs "3.14"`,
        },
        section3: {
            desc3: '2) toString(base): Returns a string representation of the number in the specified base (optional, default is base 10).',
            codeTemplate3: `let myNumber = 42;
console.log(myNumber.toString(2)); // outputs "101010"
console.log(myNumber.toString(16)); // outputs "2a"`
        },
        section4: {
            desc4: '3) parseInt(string, base): Parses the specified string as an integer in the specified base (optional, default is base 10).',
            codeTemplate4: `let myString = "42";
console.log(parseInt(myString)); // outputs 42
console.log(parseInt("101010", 2)); // outputs 42`,
        },
        section5: {
            desc5: '4) parseFloat(string): Parses the specified string as a floating-point number.',
            codeTemplate5: `let myString = "3.14";
console.log(parseFloat(myString)); // outputs 3.14`,
        },
        section6: {
            desc6: '5) isNaN(number): Returns true if the specified value is NaN, false otherwise.',
            codeTemplate6: `let myNaN = NaN;
console.log(isNaN(myNaN)); // outputs true
console.log(isNaN(42)); // outputs false`,
        },
        section7: {
            desc7: '6) isFinite(number): Returns true if the specified value is a finite number, false otherwise.',
            codeTemplate7: `let myInfinity = Infinity;
console.log(isFinite(myInfinity)); // outputs false
console.log(isFinite(42)); // outputs true`,
            desc7_2: 'Understanding how to work with numbers and use these methods is important for many aspects of JavaScript programming, including performing mathematical calculations, working with APIs that return numeric data, and validating user input.'
        },
    },
    {
        name: 'array', //component name wise property
        title: `What is an Array?`,
        desc: "An array is a data structure used to store a collection of values. An array can contain any number of elements, and each element can be of a different data type, including strings, numbers, objects, and other arrays. Here is an example of an array in JavaScript:",
        codeTemplate: `let myArray = ["apple", "banana", "cherry"];`,
        desc_1: "In this example, myArray is an array containing three elements, all of which are strings.Arrays in JavaScript are zero-indexed, meaning that the first element of the array is located at index 0. To access elements of an array, you can use square brackets ([]) with the index of the desired element. Here is an example:javascript",
        codeTemplate_1: `let myArray = ["apple", "banana", "cherry"];
console.log(myArray[0]); // outputs "apple"
console.log(myArray[1]); // outputs "banana"
console.log(myArray[2]); // outputs "cherry"
        `,
        desc_2: 'In addition to accessing elements of an array, you can use a variety of built-in methods to manipulate and extract information from arrays in JavaScript. These methods include push(), pop(), shift(), unshift(), indexOf(), slice(), and many more. Understanding how to work with arrays and use these methods is important for many aspects of JavaScript programming, including manipulating data, working with APIs that return array data, and building user interfaces.',
        section1: {
            title1: 'Why Array is used?',
            desc1: 'Arrays are used in JavaScript for a variety of reasons. Here are some of the most common use cases for arrays in JavaScript:',
            list1: [
                "Storing and manipulating data: Arrays are a convenient way to store and manipulate collections of data in JavaScript. For example, an array can be used to store a list of items such as products in an online store or contacts in an address book.",
                "Iterating over data: Arrays can be easily iterated over using loops and other constructs in JavaScript, making them useful for tasks such as searching for specific elements or performing calculations on a set of values.",
                "Passing data between functions: Arrays can be passed as arguments to functions and returned as values, making them a convenient way to transfer data between different parts of a program.",
                "Building user interfaces: Arrays can be used to store and manipulate data for building user interfaces in JavaScript, such as generating dynamic HTML content or populating options in a dropdown menu.",
            ],
            desc1_2: 'Overall, arrays are a fundamental data structure in JavaScript that can be used for a wide range of tasks. Understanding how to work with arrays and use their built-in methods is an essential skill for any JavaScript programmer.'
        },
        section2: {
            title2: 'How to use Array in JavaScipt?',
            desc2: 'To use arrays in JavaScript, you first need to create an array variable and assign it a value. Here are a few ways to create arrays in JavaScript:'
        },
        section3: {
            desc3: '1) Using square brackets: You can create an array by enclosing a comma-separated list of values in square brackets ([]).',
            codeTemplate3: `let myArray = ["apple", "banana","cherry"];`
        },
        section4: {
            desc4: '2) Using the Array() constructor: You can create an array using the Array() constructor function, which takes one or more arguments representing the elements of the array.',
            codeTemplate4: `let myArray = new Array("apple", "banana", "cherry");`,
        },
        section5: {
            title5: 'Once you have created an array, you can access and manipulate its elements using a variety of built-in methods. Here are some examples:',
            desc5: '1) Accessing elements: You can access elements of an array using square brackets ([]) with the index of the desired element. Remember that arrays in JavaScript are zero-indexed, so the first element of the array is located at index 0.',
            codeTemplate5: `let myArray = ["apple", "banana", "cherry"];
console.log(myArray[0]); // outputs "apple"
console.log(myArray[1]); // outputs "banana"
console.log(myArray[2]); // outputs "cherry"`,
        },
        section6: {
            desc6: '2) Modifying elements: You can modify elements of an array by assigning a new value to a specific index.',
            codeTemplate6: `let myArray = ["apple", "banana", "cherry"];
myArray[1] = "orange";
console.log(myArray); // outputs ["apple", "orange", "cherry"]`,
        },
        section7: {
            desc7: '3) Adding elements: You can add elements to the end of an array using the push() method.',
            codeTemplate7: `let myArray = ["apple", "banana", "cherry"];
myArray.push("date");
console.log(myArray); // outputs ["apple", "banana", "cherry", "date"]`,
        },
        section8: {
            desc8: '4) Removing elements: You can remove elements from the end of an array using the pop() method.',
            codeTemplate8: `let myArray = ["apple", "banana", "cherry", "date"];
myArray.pop();
console.log(myArray); // outputs ["apple", "banana", "cherry"]`,
        },
        section9: {
            desc9: '5) Iterating over elements: You can iterate over the elements of an array using a for loop or other looping constructs in JavaScript.',
            codeTemplate9: `let myArray = ["apple", "banana", "cherry"];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
// outputs:
// "apple"
// "banana"
// "cherry"`,
            desc9_2: 'These are just a few examples of how to use arrays in JavaScript. Understanding how to work with arrays and use their built-in methods is an essential skill for any JavaScript programmer.'
        },
    },
    {
        name: 'objects', //component name wise property
        title: `What is Object?`,
        desc: "An object is a collection of related data and/or functionality. Objects are used to represent real-world entities or concepts and can contain properties and methods that define their behavior. Here is an example of an object in JavaScript:",
        codeTemplate: `let myObject = {
name: "Alice",
age: 30,
occupation: "programmer",
greet: function() {
    console.log("Hello, my name is " + this.name + " aI am a " + this.occupation);
}
};`,
        desc_1: "In this example, myObject is an object containing four properties (name, age, occupation) and one method (greet). The properties are key-value pairs, where the key is a string representing the name of the property and the value is the data associated with that property. The method is a function that is associated with the object and can be called using dot notation.You can access properties of an object using dot notation (object.propertyName) or bracket notation (object['propertyName']). Here are some examples:",
        codeTemplate_1: `let myObject = {
name: "Alice",
age: 30,
occupation: "programmer"
};
          
console.log(myObject.name); // outputs "Alice"
console.log(myObject["age"]); // outputs 30
        `,
        desc_2: 'Objects in JavaScript can be very powerful and flexible. They are used extensively in modern web development for tasks such as manipulating the Document Object Model (DOM), handling user input, and communicating with web APIs. Understanding how to work with objects and use their properties and methods is an essential skill for any JavaScript programmer.',
        section1: {
            title1: 'Why Object is used?',
            desc1: 'Objects are used in JavaScript for a variety of reasons. Here are some of the most common use cases for objects in JavaScript:',
            list1: [
                "Representing real-world entities: Objects can be used to represent real-world entities or concepts, such as users, products, or events. Properties of the object can be used to store data related to the entity, and methods can be used to define its behavior.",
                "Organizing data: Objects can be used to organize data in a structured way, making it easier to access and manipulate. For example, you could create an object to represent a shopping cart, with properties for the items in the cart and methods for adding or removing items.",
                "Building user interfaces: Objects can be used to represent UI components and handle user input. For example, you could create an object to represent a form, with properties for the input fields and methods for validating the form data.",
                "Communicating with APIs: Objects can be used to represent data exchanged with web APIs. For example, you could create an object to represent a response from a weather API, with properties for the temperature, humidity, and other weather data.",
            ],
            desc1_2: 'Overall, objects are a fundamental feature of JavaScript that provide a flexible and powerful way to represent and manipulate data. Understanding how to work with objects and use their properties and methods is an essential skill for any JavaScript programmer.'
        },
        section2: {
            title2: 'How to use Object in JavaScipt?',
            desc2: 'To use objects in JavaScript, you first need to create an object variable and assign it a value. Here are a few ways to create objects in JavaScript:'
        },
        section3: {
            desc3: '1) Object literals: You can create an object using object literals, which are comma-separated lists of key-value pairs enclosed in curly braces ({}). Each key-value pair represents a property of the object.',
            codeTemplate3: `let myObject = {
    name: "Alice",
    age: 30,
    occupation: "programmer"
};`
        },
        section4: {
            desc4: '2) Using the Object() constructor: You can create an object using the Object() constructor function, which takes no arguments or an object representing the properties of the object.',
            codeTemplate4: `let myObject = new Object();
myObject.name = "Alice";
myObject.age = 30;
myObject.occupation = "programme`,
        },
        section5: {
            title5: 'Once you have created an object, you can access and manipulate its properties using dot notation (object.propertyName) or bracket notation (object["propertyName"]). Here are some examples:',
            desc5: '1) Accessing properties: You can access properties of an object using dot notation or bracket notation.',
            codeTemplate5: `let myObject = {
    name: "Alice",
    age: 30,
    occupation: "programmer"
};
              
console.log(myObject.name); // outputs "Alice"
console.log(myObject["age"]); // outputs 30`,
        },
        section6: {
            desc6: '2) Modifying properties: You can modify properties of an object by assigning a new value to a specific property.',
            codeTemplate6: `let myObject = {
    name: "Alice",
    age: 30,
    occupation: "programmer"
};
              
myObject.age = 35;
console.log(myObject); // outputs { name: "Alice", age: 35, occupation: "programmer" }`,
        },
        section7: {
            desc7: '3) Adding properties: You can add properties to an object by assigning a value to a new property.',
            codeTemplate7: `llet myObject = {
    name: "Alice",
    age: 30,
    occupation: "programmer"
};
              
myObject.city = "New York";
console.log(myObject); // outputs { name: "Alice", age: 30, occupation: "programmer", city: "New York" }`,
        },
        section8: {
            desc8: '4) Removing properties: You can remove properties from an object using the delete operator.',
            codeTemplate8: `let myObject = {
    name: "Alice",
    age: 30,
    occupation: "programmer"
};
              
delete myObject.age;
console.log(myObject); // outputs { name: "Alice", occupation: "programme`,
            desc8_2: 'These are just a few examples of how to use objects in JavaScript. Understanding how to work with objects and use their properties and methods is an essential skill for any JavaScript programmer.'
        },
    },
    {
        name: 'function', //component name wise property
        title: `What is Function?`,
        desc: "A function is a reusable block of code that performs a specific task or set of tasks. Functions can take inputs (called parameters or arguments) and return outputs, and can be called or invoked from anywhere in a program.",
        codeTemplate: `function addNumbers(num1, num2) {
    return num1 + num2;
}
          
let result = addNumbers(2, 3); // result is now 5`,
        desc_1: "Functions are a fundamental concept in JavaScript and programming, and are used extensively in modern web development for tasks such as handling user input, manipulating the Document Object Model (DOM), and communicating with web APIs. Understanding how to define and call functions is an essential skill for any JavaScript programmer.",
        section1: {
            title1: 'Why Function is used?',
            desc1: 'Functions are an important feature of JavaScript and are used for a variety of reasons. Here are some common use cases for functions in JavaScript:',
            list1: [
                "Reusability: Functions allow you to write a block of code once and reuse it multiple times throughout your program. This can save you time and effort, and also make your code more modular and easier to maintain.",
                "Abstraction: Functions allow you to abstract away complex or repetitive tasks into a single function, making your code more readable and easier to understand. This can also make your code more reusable and flexible.",
                "Scoping: Functions define their own scope, which means that variables declared inside a function are only accessible within that function. This can help to avoid naming conflicts and improve the overall organization of your code.",
                "Callbacks: Functions can be passed as arguments to other functions, allowing you to create more flexible and powerful code. This is known as a callback function and is commonly used in JavaScript for tasks such as handling events and asynchronous operations.",
            ],
            desc1_2: 'Overall, functions are a fundamental concept in JavaScript and are used extensively in modern web development. Understanding how to define and use functions is an essential skill for any JavaScript programmer.'
        },
        section2: {
            title2: 'How to use Function in JavaScipt?',
            desc2: 'To use functions in JavaScript, you need to define the function and then call it from your code. Here is a basic example of defining and calling a function in JavaScript:',
            codeTemplate2: `// Define a function
function greet(name) {
    console.log("Hello, " + name + "!");
}
            
// Call the function
greet("Alice"); // Output: "Hello, Alice!"
greet("Bob"); // Output: "Hello, Bo`,
        desc2_2: 'In this example, we defined a function called greet that takes a parameter name. Inside the function, we used console.log() to print a greeting message to the console, using the value of name as part of the message. We then called the function twice, passing in different values for the name parameter each time.'
        },
        section3: {
            title3: 'Functions in JavaScript can be defined in several ways, including:',
            desc3: "1) Function declarations: A function declaration defines a function using the function keyword, followed by the function name and a set of parentheses containing any parameters, and a block of code enclosed in curly braces that defines the function's behavior.",
            codeTemplate3: `function myFunction(param1, param2) {
    // code to perform task
    return result;
}
};`
        },
        section4: {
            desc4: '2) Function expressions: A function expression defines a function using the function keyword, but does not give the function a name. Instead, the function is assigned to a variable, and can be called using the variable name.',
            codeTemplate4: `let myFunction = function(param1, param2) {
    // code to perform task
    return result;
};`,
        },
        section5: {
            desc5: 'Arrow functions: An arrow function is a shorthand way of defining a function using the => operator, and is useful for simple functions with a single expression in the body.',
            codeTemplate5: `let myFunction = (param1, param2) => result;`,
        },
    },
    {
        name: 'dates', //component name wise property
        title: `What is Date in JavaScript?`,
        desc: "The Date object is used to work with dates and times. It allows you to create new dates, set and get various date and time values, and perform a variety of operations on dates and times.",
        codeTemplate: `let now = new Date();
console.log(now); // outputs the current date and time;`,
        desc_1: "Functions are a fundamental concept in JavaScript and programming, and are used extensively in modern web development for tasks such as handling user input, manipulating the Document Object Model (DOM), and communicating with web APIs. Understanding how to define and call functions is an essential skill for any JavaScript programmer.",
        section1: {
            title1: 'Why Date is used JavaScript?',
            desc1: 'Dates are used in JavaScript for a variety of reasons. Here are some common use cases for dates in JavaScript:',
            list1: [
                "Time-sensitive operations: Dates are often used in JavaScript for time-sensitive operations, such as scheduling events, timing animations, or measuring the elapsed time between two events.",
                "Displaying dates and times: Dates are also commonly used in JavaScript for displaying dates and times in a human-readable format, such as on a web page or in a user interface.",
                "Handling time zones: JavaScript's Date object provides functionality for working with time zones, allowing you to easily convert between different time zones and handle daylight saving time changes.",
                "Working with web APIs: Many web APIs require dates and times to be passed as parameters or returned as responses, making the Date object an important tool for working with web APIs.",
            ],
            desc1_2: 'Overall, dates are an essential component of many modern web applications, and understanding how to work with dates in JavaScript is an important skill for any JavaScript programmer.'
        },
        section2: {
            title2: 'How to use Function in JavaScipt?',
            desc2: 'Setting and getting date values: You can set and get various date and time values using the methods of the Date object, such as getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), and getMilliseconds().',
            codeTemplate2: `let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();
console.log(year + "-" + month + "-" + day); // outputs the current date in YYYY-MM-DD format`,
        },
        section3: {
            desc3: "Formatting dates: You can format dates using the toLocaleDateString() and toLocaleTimeString() methods of the Date object, which allow you to format dates and times according to the user's locale.",
            codeTemplate3: `let now = new Date();
let date = now.toLocaleDateString();
let time = now.toLocaleTimeString();
console.log(date + " " + time); // outputs the current date and time in a localized format`
        },
        section4: {
            desc4: 'Performing date and time calculations: You can perform a variety of operations on dates and times using the methods of the Date object, such as setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds(), and setMilliseconds()',
            codeTemplate4: `let now = new Date();
now.setHours(now.getHours() + 1); // add one hour to the current date and time
console.log(now); // outputs the updated date and time`,
            desc4_2: 'These are just a few examples of how to work with dates and times in JavaScript using the Date object. The Date object is a powerful and versatile tool for working with dates and times, and is used extensively in modern web development for tasks such as scheduling, time-based animations, and event handling.'
        }
    },
    {
        name: 'random', //component name wise property
        title: `What is Math.random() in JavaScript?`,
        desc: "In JavaScript, the Math.random() function is used to generate a random number between 0 and 1 (exclusive of 1). This function returns a floating-point number between 0 and 0.9999999999999999.",
        codeTemplate: `let randomNumber = Math.random();
console.log(randomNumber); // Outputs a random number between 0 and 1`,
        section1: {
            desc1: 'You can also use Math.random() to generate random integers within a specific range, by multiplying the result of Math.random() by the range and then using Math.floor() to round down to the nearest integer. For example, to generate a random integer between 1 and 10:',
            codeTemplate1: `let randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt); // Outputs a random integer between 1 and 10`,
        desc1_2: 'The Math.random() function is a powerful tool in JavaScript for generating random values, which can be used in a variety of applications, such as games, simulations, and randomized algorithms. However, it is important to note that the Math.random() function is not truly random, but rather generates pseudo-random numbers based on a deterministic algorithm.'
        },
        section2: {
            title2: 'Uses of Math.random()',
            list2: ['Security: Random numbers are used in security applications, such as generating secure encryption keys, random passwords, or session tokens.',
            'Simulations: Random numbers are used in simulations to introduce randomness and unpredictability into the system, making the simulation more realistic and allowing for a wider range of outcomes.',
            'Testing: Random numbers are used in software testing to create randomized test data or to simulate random user behavior.',
        ],
        },
        section3: {
            title3: "Here is a example of using Math.random() in JavaScript:",
            desc3: 'Generating a random color:',
            codeTemplate3: `function getRandomColor() {
let letters = "0123456789ABCDEF";
let color = "#";
for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
              
let randomColor = getRandomColor();
console.log(randomColor); // Outputs a random color in hexadecimal format, such as "#3F2AB7"`
        }
    },
    {
        name: 'if-else', //component name wise property
        title: `What is if-else statement in JavaScript?`,
        desc: "The if-else statement is used to control the flow of execution of a program based on a condition. The if statement checks a condition and executes a block of code if the condition is true. If the condition is false, the else statement (if present) executes a different block of code. Here is an example of using if-else in JavaScript:",
        codeTemplate: `let age = 20;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not yet an adult");
}`,
        desc_2: 'In this example, we use the if statement to check whether the age variable is greater than or equal to 18. If it is, we output the message "You are an adult". If it is not, we output the message "You are not yet an adult" using the else statement.You can also use if-else statements with more complex conditions using logical operators (&&, ||, and !) to combine multiple conditions. For example:',
        codeTemplate_2: `let isMember = true;
let age = 25;
        
if (isMember && age >= 18) {
    console.log("You are a member and an adult");
} else if (isMember) {
    console.log("You are a member but not yet an adult");
} else {
    console.log("You are not a member");
}`,
        desc_3: 'In this example, we use the && operator to check if the person is both a member and an adult, and the || operator to check if the person is either a member or an adult. We also use the ! operator to check if the person is not a member.',
        section1: {
            title1: 'Why if-else statement is used?',
            desc1: 'In programming, the if-else statement is used to control the flow of execution of a program based on a condition. It allows a program to make decisions and execute different blocks of code depending on whether a condition is true or false.',
            desc1_2: 'The if statement is used to execute a block of code only if a certain condition is true. If the condition is false, the if statement does not execute the block of code.',
            desc1_3: 'The else statement is used to execute a different block of code if the if condition is false. The else statement is optional and is only executed if the if condition is false.Together, the if-else statement provides a way to choose between two different courses of action depending on a condition. This is an essential programming construct that is used in a wide range of programming applications.',
            desc1_4: 'Some common use cases for the if-else statement include:',
            list1: [
                'Validating user input: The if-else statement can be used to validate user input and provide feedback to the user if the input is invalid.',
                'Controlling program flow: The if-else statement can be used to control the flow of a program based on user input or other conditions.',
                'Error handling: The if-else statement can be used to handle errors and exceptions that may occur during program execution.',
                'Data analysis and decision making: The if-else statement can be used to analyze data and make decisions based on the data.'
            ]
            
        },
        section2: {
            title2: 'How to use if-else statement?',
            desc2: 'Begin by defining a condition that you want to check. The condition should evaluate to either true or false. For example:',
            codeTemplate2: `let age = 25;
if (age >= 18) {
    // execute this block of code if the condition is true
} else {
    // execute this block of code if the condition is false
}`
        },
        section3: {
            desc3: 'The if keyword starts the statement, followed by a set of parentheses that contains the condition you want to check. The parentheses are followed by a set of curly braces that enclose the code to be executed if the condition is true. If you want to execute a different block of code when the condition is false, use the else keyword followed by another set of curly braces that enclose the code to be executed when the condition is false. For example:',
            codeTemplate3: `let age = 25;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not yet an adult");
}`,
            desc3_2: 'In this example, if the age variable is greater than or equal to 18, the if statement outputs the message "You are an adult". Otherwise, the else statement outputs the message "You are not yet an adult".'
        },
        section4: {
            desc4: 'You can also use the else if statement to test multiple conditions. For example:',
            codeTemplate4: `let grade = 85;
if (grade >= 90) {
    console.log("You got an A");
} else if (grade >= 80) {
    console.log("You got a B");
} else if (grade >= 70) {
    console.log("You got a C");
} else {
    console.log("You failed");
}`,
            desc4_2: "In this example, the if statement checks whether the grade variable is greater than or equal to 90. If it is, it outputs 'You got an A'. If it is not, the else if statement checks whether the grade is greater than or equal to 80, and so on. If none of the conditions are true, the else statement outputs 'You failed'.That's it! You can use the if-else statement to check any condition you need in your program and execute different blocks of code depending on the result."
        }
    },
    {
        name: 'switch', //component name wise property
        title: `What is switch statement in JavaScript?`,
        desc: "The switch statement is a control statement that allows you to select one of many code blocks to be executed based on a matching value. It is often used as an alternative to a series of if-else statements when there are multiple conditions to be checked. Here is the basic syntax of a switch statement:",
        codeTemplate: `switch (expression) {
case value1:
    // execute code block 1
    break;
case value2:
    // execute code block 2
    break;
case value3:
    // execute code block 3
    break;
// more cases...
default:
    // execute default code block
    break;
}`,
        desc_2: 'In this syntax, expression is a value that is compared to each case value in turn. If expression matches value1, code block 1 is executed. If expression matches value2, code block 2 is executed, and so on. If expression does not match any of the case values, the default code block is executed (if present). The break statement is used to exit the switch block after each code block is executed.',
        codeTemplate_2: `let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}`,
        desc_3: 'In this example, we use a switch statement to check the value of the day variable and output a message depending on the day. If the day variable is "Monday", the switch statement outputs the message "Today is Monday". If the day variable is "Tuesday", the switch statement outputs the message "Today is Tuesday", and so on. If the day variable does not match any of the case values, the default statement outputs the message "Invalid day".',
        section1: {
            title1: 'Why switch statement is used?',
            desc1: 'The switch statement in JavaScript is used to control the flow of execution of a program based on a matching value. It provides an alternative to multiple if-else statements when you need to check a single variable or expression against multiple values.The switch statement is especially useful when you have a large number of possible values to check, as it can make the code more readable and easier to maintain. It can also be faster than multiple if-else statements in some cases, as the JavaScript interpreter can optimize the code more efficiently.',
            desc1_2: 'Some common use cases for the switch statement include:',
            list1: [
                'Menu navigation: The switch statement can be used to navigate menus in web applications. For example, you can use it to display different pages or perform different actions based on the selected menu item.',
                'Data processing: The switch statement can be used to process data in a more efficient and readable way. For example, you can use it to process different data types or handle different error conditions.',
                'Input validation: The switch statement can be used to validate user input and provide feedback to the user if the input is invalid.',
                'API routing: The switch statement can be used to route API requests to different endpoints based on the URL or request method.'
            ]
            
        },
        section2: {
            title2: 'How to use switch statement?',
            desc2: '1) Begin by defining the variable or expression that you want to compare against the different values. For example:',
            codeTemplate2: `let day = "Monday";`
        },
        section3: {
            desc3: '2) Use the switch keyword followed by a set of parentheses that contains the variable or expression you want to compare. For example:',
            codeTemplate3: `switch (day) {
// cases go here
}`,

        },
        section4: {
            desc4: '3) Define each case followed by a colon and the code to be executed if the value matches. Each case should have a unique value that you want to compare against the variable or expression. For example:',
            codeTemplate4: `switch (day) {
case "Monday":
    console.log("Today is Monday");
    break;
case "Tuesday":
    console.log("Today is Tuesday");
    break;
// more cases...
              }
              `,
        },
        section5: {
            desc5: '4) Add a break statement after each case to exit the switch block after each code block is executed. This is important because without the break statement, the JavaScript interpreter will continue to execute the code blocks for each subsequent case even if the value has already matched.',
        },
        section6: {
            desc6: '5) Optionally, add a default statement at the end of the switch block to handle cases where none of the case values match. The default statement is executed if none of the case values match. For example:',
            codeTemplate6: `switch (day) {
case "Monday":
    console.log("Today is Monday");
    break;
case "Tuesday":
    console.log("Today is Tuesday");
    break;
// more cases...
default:
    console.log("Invalid day");
    break;
}`,
            desc6_2: "Here's the complete example:",
            codeTemplate6_2: `let day = "Monday";switch (day) {
case "Monday":
    console.log("Today is Monday");
break;
case "Tuesday":
    console.log("Today is Tuesday");
break;
case "Wednesday":
    console.log("Today is Wednesday");
break;
case "Thursday":
    console.log("Today is Thursday");
break;
case "Friday":
    console.log("Today is Friday");
break;
case "Saturday":
    console.log("Today is Saturday");
break;
case "Sunday":
    console.log("Today is Sunday");
break;
default:
    console.log("Invalid day");
break;}`,
        desc6_3: 'In this example, we use the switch statement to check the value of the day variable and output a message depending on the day. If the day variable is "Monday", the switch statement outputs the message "Today is Monday". If the day variable is "Tuesday", the switch statement outputs the message "Today is Tuesday", and so on. If the day variable does not match any of the case values, the default statement outputs the message "Invalid day".'
        }
    },
    {
        name: 'loopIntro', //component name wise property
        title: `What is loop in programming?`,
        desc: "A loop is a programming construct that allows a block of code to be executed repeatedly until a specific condition is met. Loops are used to automate repetitive tasks and to process collections of data such as arrays and objects.",
        desc_2: 'In JavaScript, there are several types of loops that you can use depending on your needs. These include:',
        list: ['for loop: This loop is used to iterate over a sequence of values a specific number of times. It consists of three parts: an initialization statement, a condition statement, and an update statement.',
        'while loop: This loop is used to repeat a block of code while a specific condition is true. The condition is checked at the beginning of each iteration.',
        'do-while loop: This loop is similar to the while loop, but the condition is checked at the end of each iteration.',
        'for...in loop: This loop is used to iterate over the properties of an object.',
        'for...of loop: This loop is used to iterate over the values of an iterable object such as an array.'
    ],
        section1: {
            desc1: 'Here is an example of a for loop in JavaScript:',
            codeTemplate1: `for (let i = 0; i < 10; i++) {
    console.log(i);
}`,
            desc1_1: 'In this example, we use a for loop to iterate over a sequence of values from 0 to 9. The loop starts with an initialization statement that initializes the variable i to 0. The condition statement checks whether i is less than 10. If it is, the loop executes the code block and updates the value of i using the update statement (i++). The loop continues until the condition is false.'
            
        },
        section2: {
            title2: 'Why loop is used?',
            desc2: 'Loops are used in programming to execute a block of code repeatedly until a specific condition is met. They are a fundamental programming construct that is used in many different applications, from iterating over arrays and objects to processing user input and performing animations.',
        },
        section3: {
            desc3: 'Some common use cases for loops in JavaScript include:',
            list3: [
                'Iterating over arrays and objects: Loops are commonly used to process collections of data such as arrays and objects. You can use loops to access each element in the collection and perform some operation on it.',
                'User input validation: Loops can be used to validate user input and ensure that the input meets certain criteria. For example, you can use a loop to ensure that a password contains a certain number of characters or meets specific requirements.',
                'Animation and graphics: Loops are often used in animation and graphics programming to update the display and create the illusion of motion.'
            ]

        }
    },
    {
        name: 'forLoop', //component name wise property
        title: 'For loop',
        desc: "In JavaScript, the for loop is used to iterate over a sequence of values a specific number of times. It is often used to process collections of data such as arrays and objects.",
        desc_2: 'The syntax of a for loop is as follows:',
        codeTemplate: `for (initialization; condition; update) {
// code to be executed
}`,
        section1: {
            desc1: 'Here is a breakdown of each component of the for loop:',
            list1: [
                'initialization: This is an optional statement that is executed before the loop starts. It is typically used to initialize a counter variable.',
                'condition: This is a Boolean expression that is evaluated before each iteration of the loop. If the condition is true, the loop will continue; otherwise, the loop will terminate.',
                'update: This is an optional statement that is executed at the end of each iteration. It is typically used to update the counter variable.',
                'code to be executed: This is the block of code that will be executed during each iteration of the loop.'
            ],
        },
        section2: {
            desc2: 'Here is an example of a for loop that iterates over an array of numbers and calculates their sum:',
            codeTemplate2: `let numbers = [1, 2, 3, 4, 5];
let sum = 0;
            
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
            
console.log(sum); // Output: 15`,
        desc2_2: 'In this example, we initialize the variable i to 0, set the condition to iterate while i is less than the length of the numbers array, and update i by incrementing it by 1 at the end of each iteration. During each iteration, we add the current element of the numbers array to the sum variable. After the loop is complete, we output the final value of sum.The for loop is a powerful construct that is used in many different applications. It provides a way to automate repetitive tasks and process collections of data in an efficient and flexible manner.'
        },
        section3: {
            title3: 'Problems and Solutions',
            desc3: 'Here are a few examples of using for loops to solve problems in JavaScript:',
            desc3_2: '1) Finding the sum of the numbers in an array:',
            codeTemplate3: `let numbers = [1, 2, 3, 4, 5];
let sum = 0;
            
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
            
console.log(sum); // Output: 15`
        },
        section4: {
            desc4: '2) Reversing a string:',
            codeTemplate4: `let str = 'hello';
let newStr = '';
            
for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
}
            
console.log(newStr); // Output: olleh`
        },
        section5: {
            desc5: '3) Generating a multiplication table:',
            codeTemplate5: `for (let i = 1; i <= 10; i++) {
for (let j = 1; j <= 10; j++) {
        console.log(${'i'} x ${'j'} = ${'i * j'}); //Note: single quotation must be removed from i, j
    }
}`
        },
        section6: {
            desc6: '4) Finding the factorial of a number:',
            codeTemplate6: `let num = 5;
let factorial = 1;
            
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
            
console.log(factorial); // Output: 120`
        }
    },
    {
        name: 'set', //component name wise property
        title: 'Object Sets',
        desc: "A Set is an object that allows you to store unique values of any type. It can be used to efficiently store and manipulate collections of data without the need for duplicate values.",
        desc_2: 'A Set object is similar to an array, but with some important differences. Unlike an array, a Set does not have an index, and its values are stored in no particular order. Additionally, a Set can only contain unique values; any duplicate values that are added to the Set will be ignored.',
        desc_3: 'Here is an example of how to use a Set in JavaScript:',
        codeTemplate: `let mySet = new Set();

mySet.add(1);
mySet.add('hello');
mySet.add(true);
mySet.add(1); // This value will be ignored because it is a duplicate
        
console.log(mySet); // Output: Set { 1, 'hello', true }`,
        desc_4: "In this example, we create a new Set object called mySet. We then add several values to the Set using the add() method. Because the value 1 is added twice, the second instance of 1 is ignored. Finally, we output the contents of the Set to the console, which contains the values 1, 'hello', and true.",
        desc_5: "The Set object provides a simple and efficient way to store and manipulate unique collections of data in JavaScript. It is especially useful when working with large amounts of data, as it allows you to quickly check whether a value already exists in the collection before adding it.",
        section1: {
            desc1: 'The Set object in JavaScript is used for a variety of purposes, but its primary purpose is to store unique values of any type. Some of the benefits of using a Set include:',
            list1: [
                'Efficient storage of unique values: A Set allows you to store only unique values, which can be more efficient than storing the same values multiple times in an array or other data structure.',
                'Fast membership testing: Checking whether a value exists in a Set is faster than checking whether it exists in an array or other data structure, especially for large collections of data.',
                'Easy removal of duplicate values: If you have a collection of data that contains duplicates, you can quickly remove the duplicates by adding the data to a Set and then converting it back to an array.',
                'Intersecting and merging sets: You can use the Set object to perform set operations such as intersection and merging of sets.'
            ],
        },
        section2: {
            title2: 'How to use set?',
            desc2: 'In JavaScript, you can create a Set object using the Set() constructor. You can then add values to the set using the add() method and remove values from the set using the delete() method. You can also check if a value exists in the set using the has() method, and you can get the number of values in the set using the size property.Here is an example of how to create and use a Set in JavaScript:',
            codeTemplate2: `let mySet = new Set();

mySet.add(1);
mySet.add('hello');
mySet.add(true);
mySet.add(1); // This value will be ignored because it is a duplicate
            
console.log(mySet.has(1)); // Output: true
console.log(mySet.has('world')); // Output: false
console.log(mySet.size); // Output: 3
            
mySet.delete(true);
            
console.log(mySet.has(true)); // Output: false
console.log(mySet.size); // Output: 2`,
        desc2_2: "In this example, we create a new Set object called mySet. We add several values to the Set using the add() method, including a duplicate value which is ignored. We then check whether the value 1 exists in the Set using the has() method, and output the result to the console. We also check whether the value 'world' exists in the Set, which returns false. Finally, we delete the value true from the Set using the delete() method, and check whether it has been successfully removed using the has() method.The Set object in JavaScript is a powerful tool for storing and manipulating collections of unique values. It can be used in a variety of applications, from data processing to algorithmic problem-solving."
        },
        section3: {
            title3: 'Method and uses',
            desc3: 'In JavaScript, the Set object provides several methods that can be used to manipulate and query sets. Here are some of the most commonly used Set methods:',
            list3: [
                'add(value): Adds a new value to the set. If the value already exists in the set, it is not added again.',
                'clear(): Removes all values from the set.',
                'delete(value): Removes a specific value from the set.',
                'has(value): Returns true if the set contains the specified value, and false otherwise.',
                'forEach(callback): Executes a callback function for each value in the set.',
                'keys(): Returns an iterator that contains the keys of each value in the set.',
                'values(): Returns an iterator that contains the values of each value in the set.',
                'entries(): Returns an iterator that contains the key-value pairs of each value in the set.'
            ],
            desc3_2: 'Here is an example of how to use some of these methods:',
            codeTemplate3: `let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);i
            
console.log(mySet.has(2)); // Output: true
            
mySet.forEach(function(value) {
    console.log(value);
});
            
// Output:
// 1
// 2
// 3
            
let keys = mySet.keys();
console.log(keys.next().value); // Output: 1
            
let values = mySet.values();
console.log(values.next().value); // Output: 1
            
let entries = mySet.entries();
console.log(entries.next().value); // Output: [1, 1]`
        },
        desc3_3: 'In this example, we create a new Set object called mySet, and add several values to it using the add() method. We then check whether the value 2 exists in the set using the has() method, which returns true. We also use the forEach() method to execute a callback function for each value in the set, and use the keys(), values(), and entries() methods to create iterators that contain the keys, values, and key-value pairs of each value in the set.The Set object provides many useful methods for manipulating and querying sets in JavaScript, making it a powerful tool for data processing and algorithmic problem-solving.'
    },
    {
        name: 'map', //component name wise property
        title: 'Object Maps',
        desc: "A Map is an object that allows you to store key-value pairs. It is similar to an object in that it uses keys to access values, but a Map can use any value, including objects, as keys, whereas an object can only use strings or symbols as keys.",
        desc_2: 'A Map is useful when you need to store and access data using non-string keys, or when you need to iterate over the keys or values in a specific order. You can add new key-value pairs to a Map using the set() method, access the value of a specific key using the get() method, and remove a key-value pair using the delete() method. You can also check whether a key exists in the Map using the has() method, and get the number of key-value pairs in the Map using the size property.',
        desc_3: 'Here is an example of how to use a Map in JavaScript:',
        codeTemplate: `let myMap = new Map();

myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set(123, 'value3');
myMap.set(true, 'value4');
        
console.log(myMap.get('key1')); // Output: value1
console.log(myMap.get(123)); // Output: value3
console.log(myMap.size); // Output: 4
        
myMap.delete('key2');
        
console.log(myMap.has('key2')); // Output: false
console.log(myMap.size); // Output: 3`,
        desc_4: "In this example, we create a new Map object called myMap. We then add several key-value pairs to the Map using the set() method, including a string key, a numeric key, and a boolean key. We then use the get() method to access the value of the keys 'key1' and 123. We also output the size of the Map to the console, which contains 4 key-value pairs. Finally, we delete the key 'key2' from the Map using the delete() method, and check whether it has been successfully removed using the has() method.",
        desc_5: "The Map object in JavaScript is a powerful tool for storing and accessing key-value pairs, especially when the keys are non-string values or when you need to iterate over the keys or values in a specific order.",
        section1: {
            desc1: 'In JavaScript, a Map object is used for storing and accessing data using key-value pairs. Some of the benefits of using a Map include:',
            list1: [
                'Flexible key types: Unlike objects, which can only use strings or symbols as keys, a Map can use any value, including objects, functions, and other primitive types.',
                'Efficient storage of key-value pairs: A Map allows you to store key-value pairs efficiently, which can be more efficient than using an object or other data structure for large collections of data.',
                'Fast access to key-value pairs: Accessing a value in a Map is faster than searching for a key in an object or other data structure, especially for large collections of data.',
                'Easy iteration over keys and values: The Map object provides methods for iterating over the keys and values in the map, which can be useful for data processing and algorithmic problem-solving.'
            ],
        },
        section2: {
            title2: 'How to use map?',
            desc2: 'In JavaScript, you can create a Map object using the Map() constructor. You can then add key-value pairs to the map using the set() method and remove key-value pairs using the delete() method. You can also access the value of a specific key using the get() method, check whether a key exists in the map using the has() method, and get the number of key-value pairs in the map using the size property.Here is an example of how to use a Map in JavaScript:',
            codeTemplate2: `let myMap = new Map();

let key1 = 'key1';
let key2 = {id: 123};
let key3 = function() {};
let key4 = 123;
            
myMap.set(key1, 'value1');
myMap.set(key2, 'value2');
myMap.set(key3, 'value3');
myMap.set(key4, 'value4');
            
console.log(myMap.get(key1)); // Output: value1
console.log(myMap.get(key2)); // Output: value2
console.log(myMap.size); // Output: 4
            
myMap.delete(key3);
            
console.log(myMap.has(key3)); // Output: false
console.log(myMap.size); // Output: 3`,
        desc2_2: "In this example, we create a new Map object called myMap. We then create four keys of different types, including a string, an object, a function, and a number. We add several key-value pairs to the Map using the set() method, using the different keys we created as the keys and different values as the values. We then use the get() method to access the value of the keys key1 and key2. We also output the size of the Map to the console, which contains 4 key-value pairs. Finally, we delete the key key3 from the Map using the delete() method, and check whether it has been successfully removed using the has() method.The Map object in JavaScript is a powerful tool for storing and accessing key-value pairs, especially when the keys are non-string values or when you need to iterate over the keys or values in a specific order.."
        },
        section3: {
            title3: 'Method and uses',
            desc3: 'In JavaScript, the Map object provides several methods that can be used to manipulate datas. Here are some of the most commonly used Map methods:',
            list3: [
                'set(key, value): Adds or updates the key-value pair with the specified key and value in the map.',
                'get(key): Returns the value associated with the specified key in the map, or undefined if the key is not found.',
                'has(key): Returns a boolean indicating whether the specified key exists in the map.',
                'keys(): Returns an iterator over the keys in the map, in insertion order.',
                'values(): Returns an iterator over the values in the map, in insertion order.',
                'keys(): Returns an iterator that contains the keys of each value in the set.',
                'size: Returns the number of key-value pairs in the map.',
                'clear(): Removes all key-value pairs from the map.',
                'delete(key): Removes the key-value pair with the specified key from the map.',
                'entries(): Returns an iterator over the key-value pairs in the map, in insertion order.'
            ],
            desc3_2: 'Here is an example of how to use a Map to store key-value pairs in JavaScript:',
            codeTemplate3: `let myMap = new Map();

let key1 = 'key1';
let key2 = {id: 123};
let key3 = function() {};
let key4 = 123;
            
myMap.set(key1, 'value1');
myMap.set(key2, 'value2');
myMap.set(key3, 'value3');
myMap.set(key4, 'value4');
            
console.log(myMap.get(key1)); // Output: value1
console.log(myMap.get(key2)); // Output: value2
console.log(myMap.size); // Output: 4
            
myMap.delete(key3);
            
console.log(myMap.has(key3)); // Output: false
console.log(myMap.size); // Output: 3`
        },
        desc3_3: 'In this example, we create a new Map object called myMap. We then create four keys of different types, including a string, an object, a function, and a number. We add several key-value pairs to the Map using the set() method, using the different keys we created as the keys and different values as the values. We then use the get() method to access the value of the keys key1 and key2. We also output the size of the Map to the console, which contains 4 key-value pairs. Finally, we delete the key key3 from the Map using the delete() method, and check whether it has been successfully removed using the has() method.The Map object in JavaScript is a powerful tool for storing and accessing key-value pairs, especially when the keys are non-string values or when you need to iterate over the keys or values in a specific order. It is a powerful tool for data manipulation in JavaScript and can help you to write more efficient and effective code.'
    },
    {
        name: 'typeof', //component name wise property
        title: 'Typeof',
        desc: "'typeof' is a built-in operator in JavaScript that is used to determine the data type of a value or variable. The typeof operator returns a string indicating the data type of the operand. The syntax for the typeof operator is as follows:",
        codeTemplate: `typeof operand`,
        desc_2: "The operand can be any value or variable, such as a string, number, object, function, etc. Here are some examples of using the typeof operator in JavaScript:",
        codeTemplate_2: `typeof "hello" // Output: "string"

typeof 42 // Output: "number"
        
typeof true // Output: "boolean"
        
typeof null // Output: "object"
        
typeof undefined // Output: "undefined"
        
typeof {} // Output: "object"
        
typeof [] // Output: "object"
        
typeof function() {} // Output: "function"`,
        desc_3: 'In this example, we use the typeof operator to determine the data type of several values and variables. The typeof operator returns a string indicating the data type of each operand.The typeof operator is useful for checking the data type of a value or variable before performing certain operations on it. For example, you may want to check if a variable is a number before performing a mathematical operation on it, or you may want to check if a variable is a function before calling it.',
        section1: {
            title1: "Why 'typeof' is used?",
            desc1: 'We use the typeof operator in JavaScript to determine the data type of a value or variable. By using typeof, we can check whether a value or variable is a string, number, boolean, object, function, or undefined, and perform operations or make decisions based on its data type.',
            desc1_2: "For example, if we have a variable that may contain a string or a number, we can use typeof to check its data type before performing a mathematical operation on it. If the variable is a string, we can convert it to a number before performing the operation, while if the variable is already a number, we can perform the operation directly.",
            desc1_3: "The typeof operator is also useful when working with objects and arrays. By checking the data type of an object or array, we can determine whether it contains the expected properties or elements, and avoid errors or unexpected behavior in our code.",
            desc1_4: "In summary, the typeof operator is a powerful tool in JavaScript for checking the data type of values and variables, and can help us write more robust and error-free code."
        },
    },
    {
        name: 'typeof', //component name wise property
        title: 'Typeof',
        desc: "'typeof' is a built-in operator in JavaScript that is used to determine the data type of a value or variable. The typeof operator returns a string indicating the data type of the operand. The syntax for the typeof operator is as follows:",
        codeTemplate: `typeof operand`,
        desc_2: "The operand can be any value or variable, such as a string, number, object, function, etc. Here are some examples of using the typeof operator in JavaScript:",
        codeTemplate_2: `typeof "hello" // Output: "string"

typeof 42 // Output: "number"
        
typeof true // Output: "boolean"
        
typeof null // Output: "object"
        
typeof undefined // Output: "undefined"
        
typeof {} // Output: "object"
        
typeof [] // Output: "object"
        
typeof function() {} // Output: "function"`,
        desc_3: 'In this example, we use the typeof operator to determine the data type of several values and variables. The typeof operator returns a string indicating the data type of each operand.The typeof operator is useful for checking the data type of a value or variable before performing certain operations on it. For example, you may want to check if a variable is a number before performing a mathematical operation on it, or you may want to check if a variable is a function before calling it.',
        section1: {
            title1: "Why 'typeof' is used?",
            desc1: 'We use the typeof operator in JavaScript to determine the data type of a value or variable. By using typeof, we can check whether a value or variable is a string, number, boolean, object, function, or undefined, and perform operations or make decisions based on its data type.',
            desc1_2: "For example, if we have a variable that may contain a string or a number, we can use typeof to check its data type before performing a mathematical operation on it. If the variable is a string, we can convert it to a number before performing the operation, while if the variable is already a number, we can perform the operation directly.",
            desc1_3: "The typeof operator is also useful when working with objects and arrays. By checking the data type of an object or array, we can determine whether it contains the expected properties or elements, and avoid errors or unexpected behavior in our code.",
            desc1_4: "In summary, the typeof operator is a powerful tool in JavaScript for checking the data type of values and variables, and can help us write more robust and error-free code."
        },
    },
    {
        name: 'scope', //component name wise property
        title: 'Scope in JavaScript',
        desc: "In JavaScript, scope refers to the visibility and accessibility of variables and functions in different parts of your code. There are two main types of scope in JavaScript: global scope and local scope.",
        codeTemplate: `const outerVariable = "Out"

function move() {
    const innerVariable = "In"
    console.log(outerVariable, innerVariable)
    // Prints: "Out", "In"
}
        
move()
console.log(outerVariable, innerVariable)
        // Throws Uncaught Reference Error: inner is not defined`,
        desc_2: 'In the above example we have some simple code that defines a variable outside a function and inside a function. We then log both variables to the console from inside and outside the function. This works fine inside the function, but outside the function our log throws an error since we do not have access to the inner variable outside the scope fo the function..',
        section1: {
            title1: "There are 3 types of scope in JavaScript.",
            list1: [
                'Block scope',
                'Function scope',
                'Global scope'
            ]
        },
        section2: {
            title2: "Block Scope",
            desc2: "Block scope is a way of declaring variables in JavaScript using the let and const keywords, which allows variables to be limited to a specific block of code. A block of code is defined by a pair of curly braces {} and can include any number of statements, such as loops or conditionals. Here's an example of block scope using the let keyword:",
            codeTemplate2: `function myFunction() {
let x = 1;
                
if (x === 1) {
    let x = 2;
    console.log(x); // Output: 2
}
                
console.log(x); // Output: 1
}
              
myFunction();`,
        desc2_2: "In this example, the variable x is declared with the let keyword inside the myFunction() function. Inside the if statement block, a new variable x is declared with the same name, but with a value of 2. This new variable x only exists within the if statement block, and does not affect the value of the outer variable x, which remains 1.Block scope can help you avoid naming conflicts and improve the overall organization and readability of your code. It's important to note that variables declared with the var keyword do not have block scope, and are instead function or global scoped."
        },
        section3: {
            title3: "Function Scope",
            desc3: "Function scope is a way of declaring variables in JavaScript using the var, let, or const keywords inside a function. When a variable is declared inside a function, it is only accessible within that function or in nested functions inside that function. This means that the variable has a local scope, and is not accessible outside of the function. Here's an example of function scope using the var keyword:",
            codeTemplate3: `function myFunction() {
    var x = 1;
    console.log(x); // Output: 1
}
              
myFunction();
console.log(x); // Output: Uncaught ReferenceError: x is not defined`,
        desc3_2: "In this example, the variable x is declared with the var keyword inside the myFunction() function. This means that x is only accessible within the myFunction() function, and is not accessible outside of it. Function scope can help you avoid naming conflicts and improve the overall organization and readability of your code. It's important to note that variables declared with the let or const keywords also have function scope, but are only accessible within the block they are declared in, rather than the entire function."
        },

        section4: {
            title4: "Global Scope",
            desc4: "Global scope in JavaScript refers to variables or functions that are declared outside of any function, and are accessible from anywhere in your code, including other functions or blocks. Global variables and functions are declared using the var, let, or const keywords outside of any function or block. Here's an example of global scope using the var keyword:",
            codeTemplate4: `var x = 1;

function myFunction() {
    console.log(x); // Output: 1
}
            
myFunction();
console.log(x); // Output: 1`,
        desc4_2: "In this example, the variable x is declared with the var keyword outside of any function or block, which means it has global scope. This means that the variable x is accessible from within the myFunction() function and outside of it as well. Global scope can be useful when you want to declare variables that are accessible from anywhere in your code. However, it's important to use global variables and functions judiciously, as they can make your code harder to read, maintain, and debug."
        },
    },
    {
        name: 'typeConversion', //component name wise property
        title: 'Type Conversion in JavaScript',
        desc: "Type conversion in programming is the process of converting a value from one data type to another data type. In JavaScript, type conversion can occur implicitly or explicitly.",
        title_2: 'Implicit Conversion',
        desc_2: 'Implicit type conversion, also known as coercion, is when JavaScript automatically converts one data type to another when it is necessary for a specific operation. For example, when you use the + operator to concatenate a string and a number, JavaScript automatically converts the number to a string. Explicit type conversion, also known as casting, is when you manually convert a value from one data type to another using built-in JavaScript functions, such as Number(), String(), and Boolean().',
        codeTemplate: `var num = 10;
var str = "20";
        
var result = num + str;
        
console.log(result); // Output: "1020"`,
        desc_3: 'In this example, the variable num is a number, and the variable str is a string. When we use the + operator to concatenate them, JavaScript converts the number num to a string, and concatenates it with the string str, resulting in the string "1020".',
        title_3: 'Explicit Conversion',
        desc_4: "Explicit type conversion, also known as casting, is when you manually convert a value from one data type to another using built-in JavaScript functions, such as Number(), String(), and Boolean(). Here's an example of explicit type conversion:",
        codeTemplate_2: `var str = "10";

var num = Number(str);
        
console.log(num); // Output: 10
        `,
        desc_5: 'In this example, the Number() function is used to explicitly convert the string "10" to a number. The resulting value is stored in the variable num, and when we log it to the console, we see the number 10.',
        section1: {
            title1: "Why type conversion is used?",
            desc1: 'Type conversion is used in programming to enable the manipulation and use of data in different ways depending on the situation. For example, type conversion can be used to:',
            list1: [
                'Combine data of different types. For instance, you may want to concatenate a string and a number, or perform mathematical operations on a string or a boolean value.',
                'Change the format of data. For instance, you may want to format a number as a currency value or a date as a string in a specific format.',
                'Compare data of different types. For instance, you may want to compare a string and a number or a boolean and a number.',
                'Convert data to a different type for better performance or accuracy. For instance, you may want to convert a string to a number to perform mathematical operations on it, or convert a boolean to a number to use it in a calculation.'
            ]
        },
    },
    {
        name: 'json', //component name wise property
        title: 'What is JSON (JavaScript Object Notation)?',
        desc: "JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON is often used for transmitting data between a server and a web application, as an alternative to XML.JSON is a text-based format that uses a syntax similar to JavaScript object notation. It consists of key-value pairs, with each key and its associated value separated by a colon, and each pair separated by a comma. JSON supports a range of data types, including strings, numbers, booleans, arrays, and objects.",
        desc_2: "Here's an example of a simple JSON object:",
        codeTemplate: `
{
    "name": "John",
    "age": 30,
    "city": "New York"
}`,
        desc_3: 'In this example, the JSON object contains three key-value pairs: name with the value "John", age with the value 30, and city with the value "New York".',
        section1: {
            title1: "Why JSON is used?",
            desc1: 'JSON (JavaScript Object Notation) is used for several reasons in web development:',
            list1: [
                'Data interchange format: JSON is a lightweight data interchange format that is easy to read and write, and easy for machines to parse and generate. It is widely used for transmitting data between a server and a web application, as an alternative to XML.',
                'Language independence: JSON is a language-independent format that can be used with any programming language that can parse JSON data. This makes it a popular choice for web APIs that need to support multiple programming languages.',
                'Easy to understand: JSON syntax is simple and easy to understand, making it an ideal choice for developers who need to work with data structures that are easily readable and writable.',
                'Efficiency: JSON is a compact format that can transmit data efficiently over the network. This is important for web applications that need to transfer large amounts of data quickly and efficiently.'
            ]
        },
        section2: {
            desc2: "Here's an example of a JSON object that represents a list of products:",
            codeTemplate2: `
{
    "products": [
        {
            "id": 1,
            "name": "Product 1",
            "description": "This is first product",
            "price": 19.99
        },
        {
            "id": 2,
            "name": "Product 2",
            "description": "This is second product",
            "price": 29.99
        },
        {
            "id": 3,
            "name": "Product 3",
            "description": "This is third product",
            "price": 39.99
        }
    ]
}`

        },
        desc2_2: 'In this example, the JSON object contains an array of three products, each represented as a JSON object with the keys id, name, description, and price.'
    },
    {
        name: 'class', //component name wise property
        title: 'What is Class?',
        desc: "A class is a blueprint for creating objects that share the same properties and methods. A class is a type of object constructor that defines a set of properties and methods that are common to all instances of the class. JavaScript classes were introduced in ECMAScript 2015 (ES6) as a new syntax for defining classes in JavaScript. Prior to ES6, JavaScript used a prototype-based model for object-oriented programming.",
        desc_2: "Here's an example of a simple JavaScript class:",
        codeTemplate: `class Person {
constructor(name, age) {
    this.name = name;
    this.age = age;
}
          
sayHello() {
    console.log(Hello, my name is $'{this.name} and I am $'{this.age} years old.);
}
}
          
let person1 = new Person('John', 30);
let person2 = new Person('Jane', 25);
          
person1.sayHello(); // Output: "Hello, my name is John and I am 30 years old."
person2.sayHello(); // Output: "Hello, my name is Jane and I am 25 years old."`,
        desc_3: "In this example, we define a Person class that has two properties, name and age, and one method, sayHello(). We then create two instances of the Person class using the new keyword and pass in the name and age values. Finally, we call the sayHello() method on each instance, which prints a message to the console with the person's name and age.",
        section1: {
            title1: "Why Class is used?",
            desc1: 'Class is used for several reasons in web development:',
            list1: [
                'Code organization: Classes provide a way to organize your code into reusable object blueprints that can be used throughout your application. This can help improve code readability, maintainability, and scalability',
                'Modularity: Classes can help modularize code by separating functionality into self-contained units that can be tested and reused independently. This can help improve code organization and scalability.',
                'Abstraction: Classes allow you to abstract away complex implementation details, and instead focus on the interface or API of an object. This makes code easier to read, understand, and reuse.'
            ]
        },
        section2: {
            title2: 'How to use Class?',
            desc2: "To use a class in JavaScript, you need to define the class using the class keyword, and then create instances of the class using the new keyword. Here is a basic example:",
            codeTemplate2: `class Person {
constructor(name, age) {
    this.name = name;
    this.age = age;
}
              
sayHello() {
    console.log(Hello, my name is $'{this.name} and I am $'{this.age} years old.);
}
}
              
let person1 = new Person('John', 30);
let person2 = new Person('Jane', 25);
              
person1.sayHello(); // Output: "Hello, my name is John and I am 30 years old."
person2.sayHello(); // Output: "Hello, my name is Jane and I am 25 years old."`,

        desc2_2: "In this example, we define a Person class with two properties, name and age, and one method, sayHello(). We then create two instances of the Person class using the new keyword and pass in the name and age values. Finally, we call the sayHello() method on each instance, which prints a message to the console with the person's name and age. Once you have defined a class, you can create as many instances of the class as you need by using the new keyword followed by the class name and any arguments required by the constructor. You can then call methods on the instances, just like you would with any other object in JavaScript."
        },
        section3: {
            title3: 'What is Constructor Method?',
            desc3: "In JavaScript, the constructor method is a special method that is called when an object is created using a class. It is used to set up the initial state of the object by assigning values to its properties and performing any other necessary setup tasks. The constructor method is defined using the constructor keyword in the class definition, and it must have the same name as the class. Here is an example of a Person class with a constructor method:",
            codeTemplate3: `class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}`,
        desc3_2: "In this example, the Person class has a constructor method that takes two arguments (name and age) and assigns them as properties of the Person object using the this keyword. When a new Person object is created using the new keyword, the constructor method is automatically called with the supplied arguments.",
        desc3_3: 'Here are some basic rules for writing constructor methods in JavaScript:',
        list3: [
            "The constructor method must have the same name as the class.",
            "The constructor method is defined using the constructor keyword followed by parentheses that contain any arguments that the constructor needs to create the object.",
            "Inside the constructor method, you can use the this keyword to assign values to the object's properties, set up any necessary state, or perform any other necessary tasks.",
            "If the constructor method does not explicitly return a value, it will return a new instance of the object automatically."
        ]
        },
    },
    {
        name: 'error-handling', //component name wise property
        title: 'What is Error Handling?',
        desc: "Error handling is an important part of JavaScript programming, as it allows you to gracefully handle errors and exceptions that may occur during the execution of your code. There are several ways to handle errors in JavaScript:",
        desc_2: "In JavaScript, throw and try...catch...finally are two language constructs used to handle errors and exceptions that may occur during the execution of a block of code. 'throw' is used to explicitly throw an exception or error when a particular condition is met. The syntax for throw is as follows:",
        codeTemplate: `throw new Error('This is an error message.');`,
        desc_3: "In this example, we are throwing a new Error object with a message that describes the error. When this code is executed, an exception is thrown and the JavaScript engine will look for a try...catch block to handle the error.",
        desc_4: "try...catch...finally is a language construct used to handle errors and exceptions that may occur in a block of code. The try block contains the code that may throw an exception or error, the catch block contains the code that handles the error if it occurs, and the finally block contains code that is executed regardless of whether an error occurred or not. Here's an example of how try...catch...finally can be used to handle an error and execute some cleanup code:",
        codeTemplate_2: `try {
    // Code that may throw an exception
    throw new Error('This is an error message.');
} catch (error) {
    // Code that handles the exception
    console.error('An error occurred:', error);
} finally {
    // Code that is always executed
    console.log('Cleanup code here.');
}`,
        desc_5: "In this example, the try block contains code that explicitly throws an Error object. The catch block contains code that logs an error message to the console if an error occurs in the try block. The finally block contains code that is executed regardless of whether an error occurred or not. When the code is executed, the error is caught by the catch block and the error message is logged to the console. The cleanup code in the finally block is then executed. 'throw and try...catch...finally' are powerful features that allow you to handle errors and exceptions gracefully in your JavaScript code.",
        section1: {
            title1: "Why Error Handling is used?",
            desc1: 'Error handling is used in programming to gracefully handle errors and exceptions that may occur during the execution of a block of code. Without error handling, an error or exception can cause a program to crash or produce unexpected results, making it difficult to debug and fix issues in the code.',
            desc1_2: 'By using error handling techniques such as try...catch blocks and throwing custom errors, developers can catch and handle errors in a controlled manner. This allows the program to continue executing, even if an error occurs, and can prevent the program from crashing or producing unexpected results.',
            list1: [
                'Improved reliability: Error handling can improve the reliability of a program by allowing it to continue executing, even if an error occurs. This can prevent the program from crashing or producing unexpected results, which can improve the overall user experience.',
                'Easier debugging: Error handling can make it easier to debug a program by providing more detailed error messages and stack traces. This can help developers identify the root cause of the error more quickly and easily.',
                'Better user experience: By handling errors in a graceful manner, developers can provide a better user experience by preventing the program from crashing or displaying confusing error messages.'
            ]
        },
        section2: {
            title2: "Example of 'try...catch'",
            desc2: "Here is an example of using the try...catch statement for error handling in JavaScript:",
            codeTemplate2: `function divideNumbers(a, b) {
try {
        if (b === 0) {
        throw new Error('Division by zero is not allowed');
        }
        return a / b;
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}
              
console.log(divideNumbers(10, 0)); // Output: An error occurred: Division by zero is not allowed`,
        desc2_2: "In this example, the divideNumbers function takes two parameters a and b and attempts to divide a by b. The try block contains the code that might throw an exception or error, and the catch block contains code that is executed when an exception or error is thrown."
        },
        desc2_3: 'If the value of b is 0, the code throws a custom Error object with the message "Division by zero is not allowed". The catch block then catches the error and logs the error message to the console.',
        desc2_4: "Note that using try...catch statements can help make your code more resilient and prevent it from crashing due to unhandled errors, but it's also important to write code that avoids errors whenever possible. Good programming practices, such as validating user input and checking for null or undefined values, can go a long way in preventing errors from occurring in the first place.",
    },
    {
        name: 'es6', //component name wise property
        title: 'What is ES6?',
        desc: "ES6 stands for ECMAScript 6, which is a major update to the ECMAScript language specification used by JavaScript. It was released in 2015 and introduced several new features and improvements to the language.",
        desc_2: "Some of the key features introduced in ES6 include:",
        list: [
            "Arrow functions: A new syntax for creating functions that makes them more concise and easier to read.",
            "Let and const keywords: A new way to declare variables that provides better scoping rules and prevents accidental reassignment of values.",
            "Classes: A new syntax for creating object-oriented classes that is more intuitive and easier to use than the existing prototype-based syntax.",
            "Template literals: A new way to define strings that allows for easy embedding of variables and expressions.",
            "Destructuring: A new syntax for extracting values from arrays and objects that makes it easier to work with complex data structures.",
            "Modules: A new syntax for organizing and sharing code across multiple files, making it easier to manage large codebases."
        ],
        desc_3: "ES6 has been widely adopted by modern browsers and is now considered the de facto standard for writing modern JavaScript code. Its features have greatly improved the language's readability, maintainability, and performance, and have made it easier to write complex applications with less code.",
        section1: {
            title1: "Why ES6 is used?",
            desc1: 'ES6 is used because it introduced several new features and improvements to the JavaScript language, making it easier to write and maintain code. Some of the key benefits of using ES6 include:',
            list1: [
                'Improved syntax: ES6 introduced several new syntax features, such as arrow functions, template literals, and destructuring, that make it easier to write concise and expressive code.',
                'Better scoping rules: The let and const keywords introduced in ES6 provide better scoping rules that prevent accidental reassignment of values and make it easier to reason about code.',
                'Improved object-oriented programming: ES6 introduced a new class syntax that makes it easier to create and work with object-oriented code in JavaScript.',
                'Modules: ES6 introduced a standard syntax for creating and working with modules, making it easier to organize and share code across different files and projects.',
                "Improved performance: Several new features introduced in ES6, such as for...of loops and Map and Set collections, can help improve the performance of JavaScript code."
            ]
        },
        section2: {
            title2: "How to use ES6 features?",
            desc2: "Here's an example of ES6 code that demonstrates some of the new features introduced in the language:",
            codeTemplate2: `// Arrow functions
const add = (a, b) => a + b;
            
// Template literals
const name = 'Alice';
console.log('Hello, $'{name}!);
            
// Destructuring
const person = { name: 'Bob', age: 30 };
const { name, age } = person;
console.log('$'{name} is $'{age} years old.)
            
// Let and const
let count = 0;
count = 1;
const MAX_COUNT = 10;
            
// Classes
class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
              
    sayHello() {
    console.log('Hello, my name is $'{this.name} and I$'{'this.age} years old.')
    }
}
            
const alice = new Person('Alice', 25);
alice.sayHello();
            
// Modules
import { add } from './math.js';
console.log(add(2, 3));`,
        desc2_2: "This code demonstrates several ES6 features, including arrow functions, template literals, destructuring, let and const variables, classes, and modules. These features make the code more concise, expressive, and easier to read, and can help improve the performance of your JavaScript applications."
        }
    },
    {
        name: 'arrow-function', //component name wise property
        title: 'What is Arrow function?',
        desc: "An arrow function is a new syntax introduced in ES6 for defining functions in JavaScript. It provides a more concise way of defining functions compared to traditional function expressions.",
        desc_2: "Here's an example of a traditional function expression:",
        codeTemplate: `function add(a, b) {
    return a + b;
}`,
        desc_3: "Here's the same function expressed as an arrow function:",
        codeTemplate_2: `const add = (a, b) => a + b;`,
        desc_4: "As you can see, arrow functions use a simplified syntax, with the => operator replacing the function keyword, and the function body being expressed on the right-hand side of the arrow. If the function body contains only a single expression, you can omit the curly braces and return keyword, as shown in the example above. Arrow functions also have a different behavior for the this keyword compared to traditional functions, which makes them especially useful for certain types of programming patterns, such as working with callbacks and event handlers.",
        section1: {
            title1: "Why Arrow function is used?",
            desc1: 'Arrow functions are used for a variety of reasons, but some of the key benefits they provide include:',
            list1: [
                'Conciseness: Arrow functions provide a more concise syntax compared to traditional function expressions, making the code easier to read and write.',
                'Implicit return: If the function body contains a single expression, arrow functions can provide an implicit return value, which can make the code more readable and reduce the amount of boilerplate code.',
                'Use with higher-order functions: Arrow functions can be especially useful when working with higher-order functions, such as map, filter, and reduce, which often require passing in a callback function as an argument. Arrow functions can make it easier to write these callback functions in a concise and readable way.'
            ]
        },
        section2: {
            title2: "How to use Arrow function?",
            desc2: "Here's an example of how to use arrow functions in JavaScript:",
            codeTemplate2: `// Traditional function expression
function add(a, b) {
    return a + b;
}
            
// Arrow function expression
const add = (a, b) => a + b;
            
// Traditional function declaration
function sayHello(name) {
    console.log('Hello, $'{name}!);
}
            
// Arrow function declaration
const sayHello = (name) => console.log(Hello, $'{name}!);
            
// Arrow function with implicit return
const double = (num) => num * 2;
            
// Arrow function with multiple parameters and block body
const sum = (a, b) => {
    const result = a + b;
    return result;
}`,
        desc2_2: "In general, the syntax for arrow functions is very similar to traditional function expressions and declarations. The key difference is the use of the => operator to separate the parameter list from the function body, and the optional use of curly braces and the return keyword for more complex functions."
        }
    },
    {
        name: 'destructuring', //component name wise property
        title: 'What is Destructuring?',
        desc: "Destructuring is a feature introduced in ECMAScript 6 (ES6) that provides a more concise and convenient way to extract data from arrays and objects in JavaScript. It allows you to assign individual values from an array or properties from an object to variables in a single statement, using a syntax that mirrors the structure of the array or object.",
        desc_2: "Here's an example of destructuring an array:",
        codeTemplate: `const colors = ['red', 'green', 'blue'];

const [firstColor, secondColor, thirdColor] = colors;
        
console.log(firstColor); // "red"
console.log(secondColor); // "green"
console.log(thirdColor); // "blue"`,
        desc_3: "In this example, the square brackets on the left-hand side of the assignment define a pattern that matches the structure of the colors array. The variables firstColor, secondColor, and thirdColor are then assigned the corresponding values from the array in a single statement.",
        codeTemplate_2: `const person = {
    name: 'Alice',
    age: 30,
    city: 'New York',
};
          
const { name, age, city } = person;
          
console.log(name); // "Alice"
console.log(age); // 30
console.log(city); // "New York"`,
        desc_4: "In this example, the curly braces on the left-hand side of the assignment define a pattern that matches the structure of the person object. The variables name, age, and city are then assigned the corresponding property values from the object in a single statement.",
        section1: {
            title1: "Why Destructuring is used?",
            desc1: 'Destructuring is used in JavaScript to extract specific values or properties from arrays and objects in a more concise and convenient way.',
            list1: [
                'Readability: Destructuring can make code more readable and easier to understand by clearly identifying the specific values or properties being used.',
                'Efficiency: Destructuring can reduce the amount of code needed to extract values or properties from arrays and objects, which can make code more efficient and easier to maintain.',
                'Flexibility: Destructuring can be used in a variety of contexts, such as function parameters, variable assignments, and for-of loops, which provides developers with greater flexibility and control over how data is used.',
                'Improved debugging: Destructuring can help to identify errors and bugs in code by making it easier to pinpoint where data is being extracted and how it is being used.'
            ]
        },
        section2: {
            title2: "How to use Destructuring?",
            desc2: "In JavaScript, destructuring can be used to extract specific values or properties from arrays and objects in a more concise and convenient way.",
            codeTemplate2: `const numbers = [1, 2, 3, 4, 5];

// Extracting individual values
const [first, second, , fourth] = numbers;
            
console.log(first); // 1
console.log(second); // 2
console.log(fourth); // 4
            
// Extracting remaining values using the spread operator
const [head, ...tail] = numbers;
            
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]`,
        desc2_2: "And here's how to use destructuring for objects:",
        codeTemplate2_2: `const person = {
            name: 'Alice',
            age: 30,
            city: 'New York',
};
          
// Extracting individual properties
const { name, age } = person;
          
console.log(name); // "Alice"
console.log(age); // 30
          
// Renaming properties during extraction
const { name: fullName, age: years } = person;
          
console.log(fullName); // "Alice"
console.log(years); // 30
          
// Using default values for missing properties
const { name: fullName, age: years, job = 'unemployed' } = person;
          
console.log(job); // "unemployed"`,
desc2_3: 'Destructuring can also be used in function parameters to extract specific values or properties from an array or object directly:',
        codeTemplate2_3: `function displayPerson({ name, age }) {
    console.log('Name: $'{name}, Age: $'{age});
}
          
    const person = {
    name: 'Alice',
    age: 30,
    city: 'New York',
};
          
displayPerson(person); // "Name: Alice, Age: 30"`
        },
    },
    {
        name: 'modules', //component name wise property
        title: 'What is Modules?',
        desc: "ES6 modules are a standardized approach for creating and using modules in JavaScript applications. ES6 modules were introduced in ECMAScript 2015 (ES6) as part of the broader effort to modernize and improve the JavaScript language.",
        desc_2: "ES6 modules provide several benefits for JavaScript developers:",
        list: [
            "Explicit dependency management: ES6 modules explicitly define their dependencies, which helps to ensure that only the required dependencies are loaded and used.",
            "Improved performance: ES6 modules can improve application performance by loading only the required code, reducing the overall size of the application, and avoiding unnecessary code execution.",
            "Standardization: ES6 modules provide a standardized approach for creating and using modules in JavaScript applications, which helps to ensure consistency and interoperability across different platforms and environments."
        ],
        desc_3: "Here's an example of using ES6 modules to create and export a simple function:",
        codeTemplate: `// math.js
export function add(a, b) {
    return a + b;
}
        
// app.js
import { add } from './math.js';
        
console.log(add(2, 3)); // 5`,
        desc_4: "In this example, the add() function is defined in the math.js module and exported using the export keyword. In the app.js module, the add() function is imported using the import keyword and used to perform a simple addition operation.",
        section1: {
            title1: "How to use Modules?",
            desc1: "Here's an example of how to create and use an ES6 module in JavaScript:",
            codeTemplate1: `// math.js
export function add(a, b) {
    return a + b;
}
            
// main.js
import { add } from './math.js';
            
console.log(add(2, 3)); // 5`,
desc1_2: "In this example, we define a function add() in the math.js module and export it using the export keyword. In the main.js module, we import the add() function using the import keyword and use it to perform a simple addition operation.",
        desc1_3: "ES6 modules also support the default keyword to export a single value as the default export, like this:",
        codeTemplate1_2 : `// utils.js
export default function sayHello(name) {
    console.log('Hello, $'{name}!);
}
        
// main.js
import sayHello from './utils.js';
        
sayHello('Alice'); // logs "Hello, Alice!"`,
        desc1_4: "In this example, we define a default export for the utils.js module using the export default syntax, and import it in the main.js module using the import keyword and the from keyword."
        },
    },
    {
        name: 'func-declaration', //component name wise property
        title: 'What is Function declaration',
        desc: "In JavaScript, a function declaration is a way to define a named function that can be called later in the code. Function declarations are defined using the 'function' keyword, followed by the name of the function, a set of parentheses, and a set of curly braces containing the code to be executed when the function is called.",
        desc_2: "Here's an example of a function declaration:",
        codeTemplate: `function sayHello(name) {
    console.log("Hello, " + name + "!");
}`,
        desc_3: "In this example, the 'sayHello' function takes one parameter (the name of the person to greet) and logs a message to the console.",
        section1: {
            desc1: "Function declarations can be called anywhere in the code after they are defined, and can be called multiple times with different arguments. For example:",
            codeTemplate1: `sayHello("Alice"); // logs "Hello, Alice!"
sayHello("Bob"); // logs "Hello, Bob!"`,
desc1_2: "Function declarations can also have default parameter values, rest parameters, and can return a value. They are a fundamental building block of JavaScript programming, and are used extensively in writing modular and reusable code.",
        }
    },
    {
        name: 'func-expressions', //component name wise property
        title: 'What is Function expressions',
        desc: "In JavaScript, a function expression is a way to define a function as a value and assign it to a variable, rather than using a function declaration. Function expressions are defined by assigning an anonymous or named function to a variable, and can be used just like any other value in JavaScript.",
        desc_2: "Here's an example of a function expression:",
        codeTemplate: `const sayHello = function(name) {
    console.log("Hello, " + name + "!");
};`,
        desc_3: "In this example, the 'sayHello' function is defined as an anonymous function and assigned to a variable called 'sayHello'. The function takes one parameter (the name of the person to greet) and logs a message to the console.",
        section1: {
            title1: "How to use function expression?",
            desc1: "To use a function expression in JavaScript, you can follow these steps:"
        },
        section2: {
            desc2: "Declare a variable and assign an anonymous or named function to it using the function keyword:",
            codeTemplate2: `const myFunction = function() {
    // Function body
};`
        },
        section2: {
            desc2: "Use the variable name to call the function:",
            codeTemplate2: `myFunction();`
        },
        section3: {
            desc3: "Pass arguments to the function (if necessary) by placing them inside the parentheses:",
            codeTemplate3: `const myFunction = function(a, b) {
    console.log(a + b);
};
              
myFunction(2, 3); // Output: 5`
        },
        section4: {
            desc4: "Function expressions can also be used as arguments to other functions, as return values from functions, and as objects in their own right. For example:",
            codeTemplate4: `const add = function(a, b) {
    return a + b;
};
              
const multiply = function(a, b) {
    return a * b;
};
              
const calculator = {
    add: add,
    multiply: multiply
};
              
console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.multiply(2, 3)); // Output: 6`
        },
        desc4_2: "In this example, two functions (add and multiply) are defined as function expressions and assigned to variables. These variables are then used as properties of an object called calculator. The functions can be called using dot notation and passed arguments as needed."
    },
    {
        name: 'func-anonymous', //component name wise property
        title: 'What is anonymous functions?',
        desc: "In JavaScript, an anonymous function is a function that does not have a name identifier. Instead, it is defined as an expression and typically assigned to a variable or used as an argument to another function. Anonymous functions are commonly used in JavaScript for a variety of purposes, such as event handlers, callbacks, and self-executing functions. They allow you to define a function on the fly without the need to assign a name to it, which can be useful in cases where you only need to use the function once or where naming the function is not necessary or desirable.",
        desc_2: "Here's an example of an anonymous function defined as an expression and assigned to a variable:",
        codeTemplate: `const add = function(x, y) {
    return x + y;
};`,
        desc_3: "In this example, an anonymous function that takes two parameters and returns their sum is defined as an expression and assigned to the variable add. The function can be called using the add variable, like this:",
        section1: {
            title1: "How to use anonymous function?",
            desc1: "Here's an example of an anonymous function being used as a callback function for an asynchronous operation:",
            codeTemplate1: `const fetchData = function(url, callback){
fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error));
};
              
fetchData('https://jsonplaceholder.typicode.com/todos/1', function(data) {
console.log(data);
});`,
        desc1_2: "In this example, fetchData is a function that makes a network request to a URL and passes the resulting data to a callback function. The callback function is defined inline as an anonymous function that logs the data to the console. When fetchData is called, it executes the anonymous function with the fetched data as its argument."
        },
    },
    {
        name: 'callback', //component name wise property
        title: 'What is Callback function?',
        desc: "A callback function is a function that is passed as an argument to another function and is then called inside that function. Callback functions are commonly used in asynchronous programming to handle responses or actions that are not immediately available.",
        desc_2: "Here's a simple example of a callback function:",
        codeTemplate: `function doSomething(callback) {
    console.log("Doing something...");
    callback();
}
          
function doSomethingElse() {
    console.log("Doing something else...");
}
          
doSomething(doSomethingElse);`,
        desc_3: "In this example, doSomething() is a function that takes a callback argument. When doSomething() is called, it logs a message to the console and then calls the callback function. In this case, the callback function is doSomethingElse(), which also logs a message to the console. When doSomething() is called with doSomethingElse as its argument, the output will be:",
        codeTemplate_2: `Doing something...
Doing something else...`,
        desc_4: "This is because doSomething() logs its message first, then calls the callback function (doSomethingElse()), which logs its message next.",
        section1: {
            title1: "Why Callback functions are used?",
            desc1: "Callbacks are used in JavaScript for several reasons, including:",
            list1: [
                "Asynchronous programming: In JavaScript, many operations such as network requests, file I/O, and user input are asynchronous, meaning that they happen outside of the normal program flow. Callbacks can be used to handle the results of these operations once they are complete, without blocking the main program.",
                "Event handling: When an event occurs in the browser, such as a user clicking a button or scrolling the page, a callback function can be used to handle the event and update the page accordingly.",
                "Reusability: Callback functions can be defined separately from the functions that use them, allowing them to be reused in multiple contexts."
            ],
        desc1_2: "Overall, callbacks are a powerful tool in JavaScript for handling asynchronous and event-driven programming, and are an essential part of modern web development."
        },
        section2: {
            title2: "How to use Callback function?",
            desc2: "In JavaScript, you can use callback functions by passing them as arguments to other functions. Here's a basic example:",
            codeTemplate2: `function multiply(num1, num2, callback) {
    let result = num1 * num2;
    callback(result);
}
              
function printResult(result) {
    console.log("Result:", result);
}
              
multiply(5, 10, printResult); // Output: Result: 50`,
        desc2_2: "In this example, multiply() is a function that takes two numbers (num1 and num2) and a callback function as arguments. The multiply() function multiplies num1 and num2 to get the result, and then calls the callback function with the result as its argument. The printResult() function is a callback function that takes the result as its argument and logs it to the console. When multiply() is called with 5, 10, and printResult as its arguments, it calculates the result (50) and passes it to the printResult() function as a callback. The printResult() function then logs the result to the console.",
        desc2_3: "Note that you can also define callback functions inline, without giving them a name:",
        codeTemplate2_2: `multiply(5, 10, function(result) {
    console.log("Result:", result);
});`,
        desc2_4 : "This has the same effect as the previous example, but the printResult() function is defined inline as an anonymous function.Overall, callback functions provide a flexible and powerful way to handle asynchronous and event-driven programming in JavaScript."
        },
    },
    {
        name: 'asynchronous', //component name wise property
        title: 'What is Asynchronous programming?',
        desc: "In JavaScript, asynchronous programming refers to the use of non-blocking methods and functions to allow the program to continue running while waiting for a response or action to be completed. Asynchronous programming is essential in web development to handle tasks that take time, such as making network requests or reading files, without blocking the main program.",
        desc_2: "In JavaScript, asynchronous programming is usually achieved through the use of callbacks, promises, and async/await syntax. Here's an example using callbacks:",
        codeTemplate: `console.log("Start");

setTimeout(function() {
    console.log("Middle");
}, 2000);
        
console.log("End");`,
        desc_3: "In this example, the console.log('Start') statement is executed first. Then, a setTimeout() function is called with a callback function that logs 'Middle' after a delay of 2 seconds. The console.log('End') statement is executed immediately after the setTimeout() function call, without waiting for the callback to be executed. The output of this program will be:",
        codeTemplate_2: `Start
End
Middle`,
        desc_4: "This shows that the program is not blocked by the delay caused by the setTimeout() function, and can continue executing other code while waiting for the callback to be called.",
        section1: {
            title1: "Why asynchronous programming is used?",
            desc1: "Asynchronous programming is used in JavaScript for several reasons, including:",
            list1: [
                "Non-blocking code: Asynchronous programming allows code to continue executing while waiting for a response or action to be completed, rather than blocking the program until the response is received. This can make the program more responsive and efficient.",
                "Better performance: Asynchronous programming can improve the performance of web applications by allowing multiple tasks to be performed simultaneously, without blocking the program flow.",
                "Handling large datasets: Asynchronous programming is particularly useful for handling large datasets, where blocking the program flow could cause performance issues.",
                "Network requests: Asynchronous programming is essential for making network requests, as these requests can take varying amounts of time to complete and could block the program if done synchronously."
            ],
        desc1_2: "Asynchronous programming is an important technique in JavaScript for improving performance, handling complex tasks, and providing a responsive user experience in web applications."
        },
        section2: {
            title2: "How to use asynchronous programming?",
            desc2: "Asynchronous programming can be achieved using several techniques, including callbacks, promises, and async/await. Here's an example using promises:",
            codeTemplate2: `console.log("Start");

new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Middle");
    }, 2000);
}).then(function(result) {
    console.log(result);
});
            
console.log("End");`,
        desc2_2: "In this example, the console.log('Start') statement is executed first. Then, a new Promise object is created with a callback function that logs 'Middle' after a delay of 2 seconds and resolves the promise with that value. Finally, a .then() method is called on the promise object with a callback function that logs the resolved value (result). The console.log('End') statement is executed immediately after the Promise object is created, without waiting for the callback to be executed.",
        desc2_3: "The output of this program will be:",
        codeTemplate2_2: `Start
End
Middle`,
        desc2_4 : "This shows that the program is not blocked by the delay caused by the setTimeout() function, and can continue executing other code while waiting for the promise to be resolved."
        },
    },
    {
        name: 'promise', //component name wise property
        title: 'What is Promise?',
        desc: "A promise in JavaScript is an object that represents a value that may not be available yet, but will be resolved at some point in the future. It is a way to handle asynchronous operations, such as fetching data from an API or reading a file from the file system, without blocking the execution of other code.",
        desc_2: "A promise has three states:",
        list: [
            "1. pending: the initial state, before the promise is resolved or rejected.",
            "2. fulfilled: the state when the promise is successfully resolved with a value.",
            "3. rejected: the state when the promise is rejected with an error."
        ],
        
        desc_3: "A promise has a then method, which is used to handle the resolved value when the promise is fulfilled, and a catch method, which is used to handle the rejection when the promise is rejected. Here's an example of a simple promise in JavaScript:",
        codeTemplate: `const promise = new Promise((resolve, reject)=> {
setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
        resolve(randomNumber);
    } else {
        reject(new Error('Random number is greater than 0.5'));
    }
}, 1000);
});
          
promise
    .then((result) => console.log('Resolved with result:{result}'))
    .catch((error) => console.error('Rejected with error: $'{error.message}'));`,
        desc_4: "In this example, a promise is created with a function that resolves or rejects the promise after a delay of 1 second. If the generated random number is less than 0.5, the promise is resolved with the number. Otherwise, the promise is rejected with an error message. The then method is called with a callback function that is executed when the promise is resolved, and the catch method is called with a callback function that is executed when the promise is rejected.",
        section1: {
            title1: "Why Promise is used?",
            desc1: "Promises are used in JavaScript to handle asynchronous operations in a more elegant and organized way. Before promises, developers used callback functions to handle asynchronous code, which often led to callback hell and unreadable code. Promises provide a cleaner and more concise syntax for dealing with asynchronous operations. Using promises, you can chain multiple asynchronous operations together in a readable and maintainable way. Promises also provide a way to handle errors in asynchronous operations, making it easier to catch and handle errors in a consistent way.",
            list1: [
                "Improved readability: Promises provide a cleaner and more concise syntax for handling asynchronous operations, making it easier to read and understand the code.",
                "Chaining: Promises can be chained together, allowing multiple asynchronous operations to be executed in a sequential order.",
                "Error handling: Promises provide a standardized way to handle errors in asynchronous operations, making it easier to catch and handle errors in a consistent way.",
                "Asynchronous control flow: Promises make it easier to control the flow of asynchronous operations, ensuring that they are executed in the correct order and with the correct dependencies."
            ],
        },
        section2: {
            title2: "How to use Promise in JavaScript?",
            desc2: "Promises in JavaScript are created using the Promise constructor. Here is an example of how to create and use a promise in JavaScript:",
            codeTemplate2: `const promise = new Promise((resolve, reject) => {
// Perform an asynchronous operation
// If the operation succeeds, call resolve with the result
// If the operation fails, call reject with an error object
              
if (/* asynchronous operation succeeds */) {
    resolve('Success!');
} else {
    reject(new Error('Something went wrong!'));
}
});
              
promise
.then(result => {
    // Handle the success case
    console.log(result);
})
.catch(error => {
    // Handle the error case
    console.error(error);
});`,
        desc2_2: "In this example, the Promise constructor takes a callback function with two arguments: resolve and reject. The asynchronous operation is performed inside this callback function. If the operation succeeds, the resolve function is called with the result. If the operation fails, the reject function is called with an error object.",
        desc2_3: "Once the promise is created, you can use the .then() method to handle the success case, and the .catch() method to handle the error case. The then() method takes a callback function that will be called with the result of the promise if it succeeds. The catch() method takes a callback function that will be called with the error object if the promise fails.",
        desc2_4 : "By using promises, you can write asynchronous code that is easy to read, write, and maintain."
        },
    },
    {
        name: 'async-await', //component name wise property
        title: 'What is Async/wait?',
        desc: "Async/await is a syntax in JavaScript that makes it easier to work with promises. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.",
        desc_2: "Here is an example of how to use async/await in JavaScript:",
        codeTemplate: `async function getData() {
try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
          
getData();
          `,
        desc_3: "In this example, the getData() function is marked as async, which means it returns a promise. Inside the function, we use the await keyword to wait for the fetch() function to resolve the promise returned by it. Once the promise is resolved, the response is converted to JSON using the json() method, which also returns a promise. We use the await keyword again to wait for this promise to resolve before logging the data to the console.",
        desc_4: "If any error occurs during this process, the catch block is executed and the error is logged to the console.Using async/await makes the code easier to read and maintain, as it avoids the nested callback structure that can arise when working with promises directly.",
        section1: {
            title1: "Why Async/await is used?",
            desc1: "Async/await is used in JavaScript to simplify working with promises. Promises allow you to write asynchronous code in a more manageable way, but can still lead to complex and nested code structures. Async/await allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. By using async/await, you can avoid the need for callbacks or chained .then() methods, and instead use simple and intuitive syntax to handle asynchronous operations. This can improve the readability and maintainability of your code, and make it easier to handle errors and exceptions. Async/await has several advantages over traditional approaches to handling asynchronous operations in JavaScript:",
            list1: [
                "Simplified syntax: Async/await allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and understand.",
                "Improved error handling: Async/await makes it easier to handle errors and exceptions that may occur during asynchronous operations. You can use try/catch blocks to catch and handle errors in a more intuitive and straightforward way.",
                "Sequential execution: Async/await allows you to write asynchronous code that executes in a sequential order, making it easier to reason about the flow of your program.",
                "Better control flow: Async/await allows you to easily handle complex control flows in your code, such as loops and conditional statements, without creating deeply nested callback functions."
            ],
        },
        section2: {
            title2: "How to use Async/await?",
            desc2: "As we've seen an example above here's another example that demonstrates how to use async/await with multiple API requests using Promise.all():",
            codeTemplate2: `async function fetchData() {
    try {
        const [userData, postList] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/1'),
            fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        ]);
              
        const userDataJSON = await userData.json();
        const postListJSON = await postList.json();
              
        console.log(userDataJSON);
        console.log(postListJSON);
    } catch (error) {
        console.error(error);
    }
}
              
fetchData();`,
        desc2_2: "In this example, we define an async function called fetchData(). Inside the function, we use Promise.all() to make two asynchronous API requests to retrieve data for a user and a list of posts by that user. The Promise.all() method takes an array of Promises and waits for all of them to resolve before returning an array of results in the same order as the input array. In this case, we pass an array with two Promises that make the two API requests.",
        desc2_3: "We use destructuring assignment to assign the results of the Promise.all() call to two variables: userData and postList. We then use await to wait for each of the responses to be parsed using the .json() method, and log the resulting JSON data to the console. As before, we use a try/catch block to handle any errors that might occur during the asynchronous operations.",
        desc2_4 : "When the fetchData() function is called, it will execute the two API requests, wait for both to complete, and then log the resulting data to the console."
        },
    }
    
];

export default JsData;