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
    {
        id: 13,
        title: 'Check if an array contains a specific element.',
        codeSnippet: `const numbers = [1, 2, 3, 4, 5];
        const target = 3;
        let found = false;
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] === target) {
            found = true;
            break;
          }
        }
        console.log("Element Found:", found);`
    },
    {
        id: 14,
        title: ':Remove all even numbers from an array.',
        codeSnippet: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const filteredNumbers = [];
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] % 2 !== 0) {
            filteredNumbers.push(numbers[i]);
          }
        }
        console.log("Filtered Numbers:", filteredNumbers);`
    },
    {
        id: 15,
        title: 'Calculate the product of all numbers in an array.',
        codeSnippet: `const numbers = [1, 2, 3, 4, 5];
        let product = 1;
        for (let i = 0; i < numbers.length; i++) {
          product *= numbers[i];
        }
        console.log("Product:", product);`
    },
    {
        id: 16,
        title: 'Find the index of the first occurrence of a specific element in an array.',
        codeSnippet: `const numbers = [1, 2, 3, 4, 5];
        const target = 3;
        let index = -1;
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] === target) {
            index = i;
            break;
          }
        }
        console.log("Index of First Occurrence:", index);`
    },
    {
        id: 17,
        title: 'Sort an array of numbers in ascending order using the bubble sort algorithm.',
        codeSnippet: `const numbers = [5, 2, 9, 4, 7, 1, 8];
        for (let i = 0; i < numbers.length - 1; i++) {
          for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
              const temp = numbers[j];
              numbers[j] = numbers[j + 1];
              numbers[j + 1] = temp;
            }
          }
        }
        console.log("Sorted Numbers:", numbers);`
    },
    
    {
        id: 18,
        title: 'Calculate the cumulative sum of an array.',
        codeSnippet: `const numbers = [1, 2, 3, 4, 5];
        const cumulativeSum = [];
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
          cumulativeSum.push(sum);
        }
        console.log("Cumulative Sum:", cumulativeSum);`
    },
    {
        id: 19,
        title: 'Find the average of only positive numbers in an array.',
        codeSnippet: `const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9];
        let sum = 0;
        let count = 0;
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] > 0) {
            sum += numbers[i];
            count++;
          }
        }
        const average = sum / count;
        console.log("Average of Positive Numbers:", average);`
    },
    {
        id: 20,
        title: 'Rotate an array by a given number of positions to the right.',
        codeSnippet: `const array = [1, 2, 3, 4, 5];
        const rotations = 2;
        for (let i = 0; i < rotations; i++) {
          const lastElement = array.pop();
          array.unshift(lastElement);
        }
        console.log("Rotated Array:", array);`
    },
    {
        id: 21,
        title: ' Check if an array is a palindrome (reads the same forwards and backwards).',
        codeSnippet: `const array = [1, 2, 3, 2, 1];
        let isPalindrome = true;
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
          if (array[i] !== array[array.length - 1 - i]) {
            isPalindrome = false;
            break;
          }
        }
        console.log("Is Palindrome:", isPalindrome);`
    },
    {
        id: 22,
        title: ' Find the sum of the diagonal elements in a square matrix.',
        codeSnippet: `const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
          ];
          let sum = 0;
          for (let i = 0; i < matrix.length; i++) {
            sum += matrix[i][i];
          }
          console.log("Sum of Diagonal Elements:", sum);`
    },
    {
        id: 23,
        title: ' Merge two sorted arrays into a single sorted array.',
        codeSnippet: `const array1 = [1, 3, 5, 7, 9];
        const array2 = [2, 4, 6, 8, 10];
        const mergedArray = [];
        let i = 0;
        let j = 0;
        while (i < array1.length && j < array2.length) {
          if (array1[i] < array2[j]) {
            mergedArray.push(array1[i]);
            i++;
          } else {
            mergedArray.push(array2[j]);
            j++;
          }
        }
        while (i < array1.length) {
          mergedArray.push(array1[i]);
          i++;
        }
        while (j < array2.length) {
          mergedArray.push(array2[j]);
          j++;
        }
        console.log("Merged Array:", mergedArray);`
    },
    {
        id: 24,
        title: 'Find the second largest number in an array.',
        codeSnippet: `const numbers = [7, 2, 9, 4, 5, 1, 8];
        let max = -Infinity;
        let secondLargest = -Infinity;
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] > max) {
            secondLargest = max;
            max = numbers[i];
          } else if (numbers[i] > secondLargest && numbers[i] !== max) {
            secondLargest = numbers[i];
          }
        }
        console.log("Second Largest Number:", secondLargest);`
    },
    {
        id: 25,
        title: 'Find the missing number in a given range of numbers.',
        codeSnippet: `const numbers = [1, 2, 3, 5, 6, 7, 8, 9];
        let missingNumber;
        for (let i = 1; i <= numbers.length + 1; i++) {
          if (!numbers.includes(i)) {
            missingNumber = i;
            break;
          }
        }
        console.log("Missing Number:", missingNumber);`
    },
    {
        id: 26,
        title: ' Check if an array contains duplicate elements.',
        codeSnippet: `const array = [1, 2, 3, 4, 2, 5];
        let hasDuplicates = false;
        for (let i = 0; i < array.length; i++) {
          for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
              hasDuplicates = true;
              break;
            }
          }
          if (hasDuplicates) {
            break;
          }
        }
        console.log("Has Duplicates:", hasDuplicates);`
    },
    {
        id: 27,
        title: 'Merge overlapping intervals in an array.',
        codeSnippet: `const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
        intervals.sort((a, b) => a[0] - b[0]);
        const mergedIntervals = [intervals[0]];
        for (let i = 1; i < intervals.length; i++) {
          const currentInterval = intervals[i];
          const previousInterval = mergedIntervals[mergedIntervals.length - 1];
          if (currentInterval[0] <= previousInterval[1]) {
            previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
          } else {
            mergedIntervals.push(currentInterval);
          }
        }
        console.log("Merged Intervals:", mergedIntervals);`
    },
    {
        id: 28,
        title: 'Remove duplicates from a sorted array in-place.',
        codeSnippet: `const array = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6];
        let i = 0;
        for (let j = 1; j < array.length; j++) {
          if (array[j] !== array[i]) {
            i++;
            array[i] = array[j];
          }
        }
        array.length = i + 1;
        console.log("Array without Duplicates:", array);`
    },
    {
        id: 29,
        title: 'Find the maximum subarray sum in an array.',
        codeSnippet: `const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        let maxSum = array[0];
        let currentSum = array[0];
        for (let i = 1; i < array.length; i++) {
          currentSum = Math.max(array[i], currentSum + array[i]);
          maxSum = Math.max(maxSum, currentSum);
        }
        console.log("Maximum Subarray Sum:", maxSum);`
    },
    {
        id: 30,
        title: 'Find the common elements between two sorted arrays.',
        codeSnippet: `const array1 = [1, 3, 4, 6, 7, 9];
        const array2 = [2, 3, 5, 7, 8, 9];
        const commonElements = [];
        let i = 0;
        let j = 0;
        while (i < array1.length && j < array2.length) {
          if (array1[i] === array2[j]) {
            commonElements.push(array1[i]);
            i++;
            j++;
          } else if (array1[i] < array2[j]) {
            i++;
          } else {
            j++;
          }
        }
        console.log("Common Elements:", commonElements);`
    },
    {
        id: 31,
        title: 'Find the longest word in a sentence.',
        codeSnippet: `const sentence = "This is a sample sentence";
        const words = sentence.split(" ");
        let longestWord = "";
        for (let i = 0; i < words.length; i++) {
          if (words[i].length > longestWord.length) {
            longestWord = words[i];
          }
        }
        console.log("Longest Word:", longestWord);`
    },
    {
        id: 32,
        title: 'Remove duplicates from an unsorted array.',
        codeSnippet: `const array = [3, 2, 1, 2, 4, 5, 3, 6, 4, 7];
        const uniqueArray = [];
        const uniqueSet = new Set();
        for (let i = 0; i < array.length; i++) {
          if (!uniqueSet.has(array[i])) {
            uniqueArray.push(array[i]);
            uniqueSet.add(array[i]);
          }
        }
        console.log("Array without Duplicates:", uniqueArray);`
    },
    {
        id: 33,
        title: 'Find the first non-repeating element in an array.',
        codeSnippet: `const array = [1, 2, 3, 2, 4, 3, 5];
        const frequencyMap = {};
        for (let i = 0; i < array.length; i++) {
          if (frequencyMap[array[i]]) {
            frequencyMap[array[i]]++;
          } else {
            frequencyMap[array[i]] = 1;
          }
        }
        let nonRepeatingElement;
        for (let i = 0; i < array.length; i++) {
          if (frequencyMap[array[i]] === 1) {
            nonRepeatingElement = array[i];
            break;
          }
        }
        console.log("First Non-Repeating Element:", nonRepeatingElement);`
    },
    {
        id: 34,
        title: 'Rearrange positive and negative numbers in an array.',
        codeSnippet: `const array = [4, -1, -3, 2, 5, -2, 1, -4];
        const rearrangedArray = [];
        const positiveNumbers = [];
        const negativeNumbers = [];
        for (let i = 0; i < array.length; i++) {
          if (array[i] >= 0) {
            positiveNumbers.push(array[i]);
          } else {
            negativeNumbers.push(array[i]);
          }
        }
        rearrangedArray.push(...positiveNumbers, ...negativeNumbers);
        console.log("Rearranged Array:", rearrangedArray);`
    },
    {
        id: 35,
        title: 'Find the common elements among multiple arrays.',
        codeSnippet: `const array1 = [1, 2, 3, 4, 5];
        const array2 = [4, 5, 6, 7, 8];
        const array3 = [3, 5, 9, 10];
        const commonElements = [];
        for (let i = 0; i < array1.length; i++) {
          if (array2.includes(array1[i]) && array3.includes(array1[i])) {
            commonElements.push(array1[i]);
          }
        }
        console.log("Common Elements:", commonElements);`
    },
    {
        id: 36,
        title: 'Find the maximum difference between two elements in an array, such that the larger element appears after the smaller element.',
        codeSnippet: `const array = [7, 2, 9, 4, 5, 1, 8];
        let maxDifference = -Infinity;
        let minElement = array[0];
        for (let i = 1; i < array.length; i++) {
          if (array[i] < minElement) {
            minElement = array[i];
          } else {
            const difference = array[i] - minElement;
            if (difference > maxDifference) {
              maxDifference = difference;
            }
          }
        }
        console.log("Maximum Difference:", maxDifference);`
    },
]