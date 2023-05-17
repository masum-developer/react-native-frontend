export const loopData = [
    {
        id: 1,
        title: "Print numbers from 1 to 10.",
        codeSnippet: `for (let i = 1; i <= 10; i++) {
            console.log(i);
          }`
    },
    {
        id: 2,
        title: "Calculate the sum of numbers from 1 to 10.",
        codeSnippet: `let sum = 0;
        for (let i = 1; i <= 10; i++) {
          sum += i;
        }
        console.log("Sum:", sum);`
    },
    {
        id: 3,
        title: "Print even numbers from 1 to 20.",
        codeSnippet: `for (let i = 2; i <= 20; i += 2) {
            console.log(i);
          }`
    },
    {
        id: 4,
        title: "Calculate the factorial of a number.",
        codeSnippet: `function factorial(n) {
            let result = 1;
            for (let i = 1; i <= n; i++) {
              result *= i;
            }
            return result;
          }
          
          const number = 5;
          const factorialResult = factorial(number);
          console.log("Factorial:", factorialResult);`
    },
    {
        id: 5,
        title: "Print the Fibonacci sequence up to a given number of terms.",
        codeSnippet: `function fibonacci(n) {
            let sequence = [0, 1];
            for (let i = 2; i < n; i++) {
              sequence.push(sequence[i - 1] + sequence[i - 2]);
            }
            return sequence;
          }
          
          const terms = 10;
          const fibonacciSequence = fibonacci(terms);
          console.log("Fibonacci Sequence:", fibonacciSequence);`
    },
    {
        id: 6,
        title: "Calculate the sum of all positive numbers in an array.",
        codeSnippet: `const numbers = [3, -2, 9, -4, 5, -1, 7];
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] > 0) {
            sum += numbers[i];
          }
        }
        console.log("Sum of Positive Numbers:", sum);`
    },
    {
        id: 7,
        title: "Find the maximum number in an array.",
        codeSnippet: `const numbers = [7, 2, 9, 4, 5, 1, 8];
        let max = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
          if (numbers[i] > max) {
            max = numbers[i];
          }
        }
        console.log("Maximum Number:", max);`
    },
    {
        id: 8,
        title: "Count the number of vowels in a string.",
        codeSnippet: `const inputStr = "Hello, World!";
        let count = 0;
        for (let char of inputStr.toLowerCase()) {
          if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
            count++;
          }
        }
        console.log("Vowel Count:", count);`
    },
    {
        id: 10,
        title: "Print the multiplication table of a given number.",
        codeSnippet: `const number = 5;
        for (let i = 1; i <= 10; i++) {
          console.log('{number} x {i} = {number * i}');
        }`
    },
    {
        id: 11,
        title: "Print the reverse of a given string.",
        codeSnippet: `const inputStr = "Hello, World!";
        let reverseStr = "";
        for (let i = inputStr.length - 1; i >= 0; i--) {
          reverseStr += inputStr[i];
        }
        console.log("Reversed String:", reverseStr);`
    },
    {
        id: 12,
        title: "Check if a number is prime.",
        codeSnippet: `function isPrime(number) {
            if (number <= 1) {
              return false;
            }
            for (let i = 2; i <= Math.sqrt(number); i++) {
              if (number % i === 0) {
                return false;
              }
            }
            return true;
          }
          
          const number = 17;
          const isPrimeNumber = isPrime(number);
          console.log("Is Prime:", isPrimeNumber);`
    },
    {
        id: 13,
        title: "Find the average of numbers in an array.",
        codeSnippet: `const numbers = [5, 2, 9, 4, 7, 1, 8];
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
        }
        const average = sum / numbers.length;
        console.log("Average:", average);`
    },
    {
        id: 14,
        title: "Generate a triangle pattern using asterisks.",
        codeSnippet: `const rows = 5;
        for (let i = 1; i <= rows; i++) {
          let pattern = "";
          for (let j = 1; j <= i; j++) {
            pattern += "* ";
          }
          console.log(pattern);
        }`
    },
    {
        id: 15,
        title: "Calculate the factorial of a number using a while loop.",
        codeSnippet: `function factorial(n) {
            let result = 1;
            let i = 1;
            while (i <= n) {
              result *= i;
              i++;
            }
            return result;
          }
          
          const number = 5;
          const factorialResult = factorial(number);
          console.log("Factorial:", factorialResult);`
    },
    {
        id: 16,
        title: "Print the digits of a number in reverse order.",
        codeSnippet: `const number = 12345;
        let reversedNumber = 0;
        while (number > 0) {
          const digit = number % 10;
          reversedNumber = reversedNumber * 10 + digit;
          number = Math.floor(number / 10);
        }
        console.log("Reversed Number:", reversedNumber);`
    },
    {
        id: 17,
        title: "Determine if a number is a perfect square.",
        codeSnippet: `function isPerfectSquare(number) {
            for (let i = 1; i <= Math.sqrt(number); i++) {
              if (i * i === number) {
                return true;
              }
            }
            return false;
          }
          
          const number = 25;
          const isPerfectSquareNumber = isPerfectSquare(number);
          console.log("Is Perfect Square:", isPerfectSquareNumber);`
    },
    {
        id: 18,
        title: "Find the GCD (Greatest Common Divisor) of two numbers using the Euclidean algorithm.",
        codeSnippet: `function findGCD(a, b) {
            while (b !== 0) {
              const remainder = a % b;
              a = b;
              b = remainder;
            }
            return a;
          }
          
          const num1 = 24;
          const num2 = 36;
          const gcd = findGCD(num1, num2);
          console.log("GCD:", gcd);`
    },
    {
        id: 19,
        title: "Generate a pyramid pattern using numbers.",
        codeSnippet: `const rows = 5;
        let num = 1;
        for (let i = 1; i <= rows; i++) {
          let pattern = "";
          for (let j = 1; j <= i; j++) {
            pattern += num + " ";
            num++;
          }
          console.log(pattern);
        }`
    },
    {
        id: 20,
        title: "Find the factorial of a number using a do-while loop.",
        codeSnippet: `function factorial(n) {
            let result = 1;
            let i = 1;
            do {
              result *= i;
              i++;
            } while (i <= n);
            return result;
          }
          
          const number = 5;
          const factorialResult = factorial(number);
          console.log("Factorial:", factorialResult);`
    },
    {
        id: 21,
        title: "Calculate the sum of the digits in a number.",
        codeSnippet: `const number = 12345;
        let sum = 0;
        let temp = number;
        while (temp > 0) {
          const digit = temp % 10;
          sum += digit;
          temp = Math.floor(temp / 10);
        }
        console.log("Sum of Digits:", sum);`
    },
]