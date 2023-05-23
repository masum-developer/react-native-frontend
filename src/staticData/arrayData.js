export const arrayData = [
    {
        id: 1,
        title: 'Find the sum of all numbers in an array.',
        codeSnippet: `const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum:", sum);`
    },
    {
        id: 2,
        title: 'Calculate the average of numbers in an array.',
        codeSnippet: `const numbers = [4, 6, 8, 2, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
const average = sum / numbers.length;
console.log("Average:", average);`
    },
    {
        id: 3,
        title: 'Find the maximum number in an array.',
        codeSnippet: `const numbers = [7, 2, 9, 4, 5];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
    max = numbers[i];
    }
}
console.log("Maximum Number:", max);`
    },
    {
        id: 4,
        title: 'Find the minimum number in an array.',
        codeSnippet: `const numbers = [7, 2, 9, 4, 5];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
    min = numbers[i];
    }
}
console.log("Minimum Number:", min);`
    },
    {
        id: 5,
        title: 'Count the number of even numbers in an array.',
        codeSnippet: `const numbers = [3, 8, 12, 5, 7, 10];
let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
    evenCount++;
    }
}
console.log("Even Count:", evenCount);`
    },
    {
        id: 6,
        title: 'Find the index of a specific element in an array.',
        codeSnippet: `const fruits = ['apple', 'banana', 'orange', 'mango'];
const target = 'orange';
let index = -1;
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === target) {
    index = i;
    break;
    }
}
console.log("Index of", target + ":", index);`
    },
    {
        id: 7,
        title: 'Check if all elements in an array are positive numbers.',
        codeSnippet: `const numbers = [1, 2, 3, -4, 5];
let allPositive = true;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
    allPositive = false;
    break;
    }
}
console.log("All Positive:", allPositive);`
    },
    {
        id: 8,
        title: 'Find the second smallest number in an array.',
        codeSnippet: `const numbers = [7, 2, 9, 4, 5, 1, 8];
let smallest = Infinity;
let secondSmallest = Infinity;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
    secondSmallest = smallest;
    smallest = numbers[i];
    } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
    secondSmallest = numbers[i];
    }
}
console.log("Second Smallest Number:", secondSmallest);`
    },
    {
        id: 9,
        title: 'Count the number of occurrences of a specific element in an array.',
        codeSnippet: `const numbers = [1, 2, 3, 4, 2, 2, 5, 6, 2];
const target = 2;
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
    count++;
    }
}
console.log("Count:", count);`
    },
    {
        id: 10,
        title: 'Reverse the order of elements in an array.',
        codeSnippet: `const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
}
console.log("Reversed Numbers:", reversedNumbers);`
    },
    {
        id: 11,
        title: 'Find the maximum difference between any two elements in an array.',
        codeSnippet: `const numbers = [7, 2, 9, 4, 5, 1, 8];
let maxDifference = 0;
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
    const difference = Math.abs(numbers[i] - numbers[j]);
    if (difference > maxDifference) {
        maxDifference = difference;
    }
    }
}
console.log("Maximum Difference:", maxDifference);`
    },
    {
        id: 12,
        title: 'Concatenate multiple arrays into a single array.',
        codeSnippet: `const array1 = [1, 2, 3];
const array2 = [4, 5];
const array3 = [6, 7, 8];
const combinedArray = [];
combinedArray.push(...array1, ...array2, ...array3);
console.log("Combined Array:", combinedArray);`
    },
    // {
    //     id: 13,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 14,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 15,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 16,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 17,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 18,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 19,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 20,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 21,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 22,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 23,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 24,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 25,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 26,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 27,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 28,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 29,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 30,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 31,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 32,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 33,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 34,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 35,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 36,
    //     title: '',
    //     codeSnippet: ``
    // },
]