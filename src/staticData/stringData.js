export const stringData = [
    {
        id: 1,
        title: "Find the length of a string.",
        codeSnippet: `function findStringLength(str) {
    return str.length;
}
          
const inputStr = "Hello, World!";
const length = findStringLength(inputStr);
console.log("Length:", length);`
    },
    {
        id: 2,
        title: "How you can concat two strings",
        codeSnippet: `function concatenateStrings(str1, str2) {
    return str1 + str2;
}
          
const string1 = "Hello, ";
const string2 = "World!";
const result = concatenateStrings(string1, string2);
console.log("Concatenated String:", result);`
    },
    {
        id: 3,
        title: "How to convert a string to uppercase?",
        codeSnippet: `function convertToUppercase(str) {
    return str.toUpperCase();
}
          
const inputStr = "Hello, World!";
const uppercaseStr = convertToUppercase(inputStr);
console.log("Uppercase String:", uppercaseStr);`
    },
    {
        id: 4,
        title: "Check if a string contains a specific substring.",
        codeSnippet: `function containsSubstring(str, substr) {
return str.includes(substr);
}
          
const inputStr = "Hello, World!";
const substring = "World";
const containsSubstringResult = containsSubstring(inputStr, substring);
console.log("Contains Substring:", containsSubstringResult);`
    },
    {
        id: 5,
        title: 'Split a string into an array of substrings based on a separator.',
        codeSnippet: `function splitString(str, separator) {
    return str.split(separator);
}
          
const inputStr = "Hello, World!";
const separator = ", ";
const substrings = splitString(inputStr, separator);
console.log("Substrings:", substrings);`
    },
    {
        id: 6,
        title: 'Replace a substring with another substring in a string.',
        codeSnippet: `function replaceSubstring(str, oldSubstr, newSubstr) {
    return str.replace(oldSubstr, newSubstr);
}
          
const inputStr = "Hello, World!";
const oldSubstring = "World";
const newSubstring = "Universe";
const replacedStr = replaceSubstring(inputStoldSubstring, newSubstring);
console.log("Replaced String:", replacedStr);`
    },
    {
        id: 7,
        title: 'Find the index of a substring in a string.',
        codeSnippet: `function findSubstringIndex(str, substr) {
    return str.indexOf(substr);
}
          
const inputStr = "Hello, World!";
const substring = "World";
const index = findSubstringIndex(inputStr, substring);
console.log("Substring Index:", index);`
    },
    {
        id: 8,
        title: 'Trim whitespace from the beginning and end of a string.',
        codeSnippet: `function trimWhitespace(str) {
    return str.trim();
}
          
const inputStr = "   Hello, World!   ";
const trimmedStr = trimWhitespace(inputStr);
console.log("Trimmed String:", trimmedStr);`
    },
    {
        id: 9,
        title: 'Write a program that can count the number of vowels in a string.',
        codeSnippet: `function countVowels(inputStr) {
const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for (let char of inputStr.toLowerCase()) {
    if (vowels.includes(char)) {
    count++;
    }
}
return count;
}
          
const text = "Hello, World!";
const vowelCount = countVowels(text);
console.log("Vowel Count:", vowelCount);`
    },
    {
        id: 10,
        title: 'Check if a string is an anagram of another string.',
        codeSnippet: `function isAnagram(str1, str2) {
const sortedStr1 = str1.toLowerCase().split('').sort().join('');
const sortedStr2 = str2.toLowerCase().split('').sort().join('');
return sortedStr1 === sortedStr2;
}
          
const word1 = "listen";
const word2 = "silent";
const isAnagramResult = isAnagram(word1, word2);
console.log("Is Anagram:", isAnagramResult);`
    },
    {
        id: 11,
        title: 'Reverse the words in a sentence.',
        codeSnippet: `function reverseWords(sentence) {
const words = sentence.split(' ').reverse();
const reversedSentence = words.join(' ');
return reversedSentence;
}
          
const inputSentence = "Hello, World!";
const reversedSentence = reverseWords(inputSentence);
console.log("Reversed Sentence:", reversedSentence);`
    },
    {
        id: 12,
        title: 'Check if a string is a palindrome, considering only alphanumeric characters and ignoring case.',
        codeSnippet: `function isPalindrome(str) {
const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
const reversedStr = alphanumericStr.split('').reverse().join('');
return alphanumericStr === reversedStr;
}
          
const inputStr = "A man, a plan, a canal: Panama!";
const isPalindromeResult = isPalindrome(inputStr);
console.log("Is Palindrome:", isPalindromeResult)`
    },
    {
        id: 13,
        title: 'Find the most common character in a string.',
        codeSnippet: `function mostCommonCharacter(inputStr) {
const charCount = {};
let mostCommonChar = '';
let maxCount = 0;
for (let char of inputStr) {
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
    if (charCount[char] > maxCount) {
        maxCount = charCount[char];
        mostCommonChar = char;
    }
}
return mostCommonChar;
}
          
const text = "abracadabra";
const mostCommonChar = mostCommonCharacter(text);
console.log("Most Common Character:", mostCommonChar);`
    },
    {
        id: 14,
        title: 'Check if a string is a pangram (contains every letter of the alphabet at least once).',
        codeSnippet: `function isPangram(str) {
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const lowercaseStr = str.toLowerCase();
for (let char of alphabet) {
    if (!lowercaseStr.includes(char)) {
        return false;
    }
}
    return true;
}
          
const sentence = "The quick brown fox jumps over the lazy dog";
const isPangramResult = isPangram(sentence);
console.log("Is Pangram:", isPangramResult)`
    },
    {
        id: 15,
        title: 'Capitalize the first letter of each word in a sentence.',
        codeSnippet: `function capitalizeWords(sentence) {
const words = sentence.split(' ');
const capitalizedWords = [];
for (let word of words) {
    const capitalizedWord = word[0].toUpperCase()word.slice(1);
    capitalizedWords.push(capitalizedWord);
}
return capitalizedWords.join(' ');
}
          
const inputSentence = "hello, world!";
const capitalizedSentence = capitalizeWords(inputSentence);
console.log("Capitalized Sentence:", capitalizedSentence);`
    },
    {
        id: 16,
        title: 'Remove duplicate characters from a string.',
        codeSnippet: `function removeDuplicates(str) {
    const uniqueChars = [...new Set(str)];
    return uniqueChars.join('');
}
          
const inputStr = "aabbccddeeffgghh";
const withoutDuplicates = removeDuplicates(inputStr);
console.log("Without Duplicates:", withoutDuplicates);
          `
    },
    {
        id: 17,
        title: 'Check if a string is a valid palindrome ignoring non-alphanumeric characters and case.',
        codeSnippet: `function isPalindrome(str) {
    const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = alphanumericStr.split('').reverse().join('');
return alphanumericStr === reversedStr;
}
          
const inputStr = "A man, a plan, a canal: Panama!";
const isPalindromeResult = isPalindrome(inputStr);
console.log("Is Palindrome:", isPalindromeResult);`
    },
    {
        id: 18,
        title: 'Replace all occurrences of a given substring in a string.',
        codeSnippet: `function replaceSubstring(str, substr, newSubstr) {
return str.split(substr).join(newSubstr);
}
          
const inputStr = "Hello, World!";
const newStr = replaceSubstring(inputStr, "World", "Universe");
console.log("New String:", newStr);`
    },
    {
        id: 19,
        title: 'Find the longest word in a sentence.',
        codeSnippet: `function findLongestWord(sentence) {
const words = sentence.split(' ');
let longestWord = '';
for (let word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
return longestWord;
}
          
const inputSentence = "The quick brown fox jumped over the lazy dog";
const longestWord = findLongestWord(inputSentence);
console.log("Longest Word:", longestWord);`
    },
    {
        id: 20,
        title: 'Count the occurrences of each character in a string.',
        codeSnippet: `function countCharacters(str) {
const charCount = {};
for (let char of str) {
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}
    return charCount;
}
          
const inputStr = "hello, world!";
const charCount = countCharacters(inputStr);
console.log("Character Count:", charCount);`
    },
    // ,{
    //     id: 21,
    //     title: '',
    //     codeSnippet: ``
    // }
    // ,{
    //     id: 22,
    //     title: '',
    //     codeSnippet: ``
    // }
    // ,{
    //     id: 23,
    //     title: '',
    //     codeSnippet: ``
    // },{
    //     id: 24,
    //     title: '',
    //     codeSnippet: ``
    // },{
    //     id: 25,
    //     title: '',
    //     codeSnippet: ``
    // },{
    //     id: 26,
    //     title: '',
    //     codeSnippet: ``
    // },{
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
    // {
    //     id: 37,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 38,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 39,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 40,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 41,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 42,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 43,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 44,
    //     title: '',
    //     codeSnippet: ``
    // },
    // {
    //     id: 45,
    //     title: '',
    //     codeSnippet: ``
    // }
]