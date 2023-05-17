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
    ,{
        id: 21,
        title: 'Reverse the order of words in a sentence while maintaining the order of characters within each word.',
        codeSnippet: `function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}
          
const inputSentence = "Hello, World!";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log("Reversed Sentence:", reversedSentence);`
    }
    ,{
        id: 22,
        title: 'Check if a string has balanced parentheses (every opening parenthesis has a corresponding closing parenthesis).',
        codeSnippet: `function hasBalancedParentheses(str) {
        const stack = [];
        for (let char of str) {
            if (char === '(') {
                stack.push(char);
            } else if (char === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
            }
        }
    return stack.length === 0;
}
          
const inputStr = "(a + b) * (c - d)";
const isBalanced = hasBalancedParentheses(inputStr);
console.log("Is Balanced:", isBalanced);`
    }
    ,{
        id: 23,
        title: 'Convert a string to title case (capitalize the first letter of each word while converting the remaining letters to lowercase).',
        codeSnippet: `function toTitleCase(str) {
    const words = str.toLowerCase().split(' ');
    const titleCaseWords = words.map(word => word.charAt(0)toUpperCase() + word.slice(1));
    const titleCaseStr = titleCaseWords.join(' ');
    return titleCaseStr;
}
          
const inputStr = "hello, world!";
const titleCaseStr = toTitleCase(inputStr);
console.log("Title Case String:", titleCaseStr);`
    },{
        id: 24,
        title: 'Check if a string is a valid email address.',
        codeSnippet: `function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
          
const inputEmail = "test@example.com";
const isValid = isValidEmail(inputEmail);
console.log("Is Valid Email:", isValid);`
    },{
        id: 25,
        title: 'Remove extra whitespace from a string.',
        codeSnippet: `function removeExtraWhitespace(str) {
    return str.replace(/\s+/g, ' ').trim();
}
          
const inputStr = "   Hello,    World!   ";
const trimmedStr = removeExtraWhitespace(inputStr);
console.log("Trimmed String:", trimmedStr);`
    },{
        id: 26,
        title: 'Calculate the hamming distance between two strings of equal length',
        codeSnippet: `function hammingDistance(str1, str2) {
    let distance = 0;
    if (str1.length !== str2.length) {
            return -1; // Strings must have equal length
        }
        for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            distance++;
            }
        }
    return distance;
}
          
const string1 = "karolin";
const string2 = "kathrin";
const distance = hammingDistance(string1, string2);
console.log("Hamming Distance:", distance);`
    },{
        id: 27,
        title: 'Check if a string is a valid palindrome by considering only letters and ignoring case.',
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
        id: 28,
        title: 'Find the first non-repeating character in a string.',
        codeSnippet: `function findFirstNonRepeatingChar(str) {
        const charCount = {};
        for (let char of str) {
            if (charCount[char]) {
                charCount[char]++;
              } else {
                charCount[char] = 1;
              }
            }
            for (let char of str) {
            if (charCount[char] === 1) {
            return char;
        }
    }
    return null; // No non-repeating character found
}
          
const inputStr = "abracadabra";
const nonRepeatingChar = findFirstNonRepeatingChar(inputStr);
console.log("First Non-Repeating Character:", nonRepeatingChar);`
    },
    {
        id: 29,
        title: 'Generate all permutations of a string.',
        codeSnippet: `function permuteString(str) {
        if (str.length <= 1) {
            return [str];
        }
          
        const permutations = [];
          
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const remainingChars = str.slice(0, i) + str.slice(i + 1);
            const innerPermutations = permuteString(remainingChars);
            for (let perm of innerPermutations) {
                permutations.push(char + perm);
            }
        }
          
        return permutations;
    }
          
const inputStr = "abc";
const result = permuteString(inputStr);
console.log("Permutations:", result);`
    },
    {
        id: 30,
        title: 'Count the number of words in a sentence.',
        codeSnippet: `function countWords(sentence) {
    const words = sentence.trim().split(/\s+/);
    return words.length;
}   
          
const inputSentence = "   Hello, World!   ";
const wordCount = countWords(inputSentence);
console.log("Word Count:", wordCount);`
    },
    {
        id: 31,
        title: 'Convert a sentence to pig latin.',
        codeSnippet: `function convertToPigLatin(sentence) {
        const words = sentence.trim().split(/\s+/);
        const pigLatinWords = words.map(word => {
        const firstLetter = word[0];
        const remainingLetters = word.slice(1);
        return remainingLetters + firstLetter + "ay";
    });
        return pigLatinWords.join(" ");
    }
          
const inputSentence = "Hello, World!";
const pigLatinSentence = convertToPigLatin(inputSentence);
console.log("Pig Latin Sentence:", pigLatinSentence);`
    },
    {
        id: 32,
        title: 'Check if a string is a valid URL.',
        codeSnippet: `function isValidURL(url) {
        const regex = /^(https?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/.*)?$/;
         return regex.test(url);
    }
          
const inputURL = "https://www.example.com";
const isValid = isValidURL(inputURL);
console.log("Is Valid URL:", isValid);`
    },
    {
        id: 33,
        title: 'Find the second most frequent character in a string.',
        codeSnippet: `function findSecondMostFrequentChar(str) {
    const charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }
          
    let maxCount = 0;
    let secondMaxCount = 0;
    let secondMostFrequentChar = null;
          
    for (let char in charCount) {
        const count = charCount[char];
        if (count > maxCount) {
        secondMaxCount = maxCount;
        maxCount = count;
        secondMostFrequentChar = char;
        } else if (count > secondMaxCount && count < maxCount) {
            secondMaxCount = count;
            secondMostFrequentChar = char;
        }
    }
          
    return secondMostFrequentChar;
}
          
const inputStr = "abracadabra";
const secondMostFrequentCharfindSecondMostFrequentChar(inputStr);
console.log("Second Most Frequent Character:", secondMostFrequentChar);`
    },
    {
        id: 34,
        title: 'Remove vowels from a string.',
        codeSnippet: `function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = [];
    for (let char of str) {
        if (!vowels.includes(char.toLowerCase())) {
        result.push(char);
        }
    }
        return result.join('');
}
          
const inputStr = "Hello, World!";
const withoutVowels = removeVowels(inputStr);
console.log("Without Vowels:", withoutVowels);`
    },
    {
        id: 35,
        title: 'Check if a string contains only unique characters.',
        codeSnippet: `function hasUniqueCharacters(str) {
    const charSet = new Set(str);
    return charSet.size === str.length;
}
          
const inputStr = "abcdefg";
const hasUnique = hasUniqueCharacters(inputStr);
console.log("Has Unique Characters:", hasUnique);`
    },
    {
        id: 36,
        title: 'Reverse the order of words in a sentence while preserving whitespace.',
        codeSnippet: `function reverseWordsWithWhitespace(sentence) {
    const words = sentence.split(/\s+/);
    const reversedWords = words.reverse();
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}
          
const inputSentence = "   Hello,    World!   ";
const reversedSentence = reverseWordsWithWhitespace(inputSentence);
console.log("Reversed Sentence with Whitespace:", reversedSentence);`
    },
    {
        id: 37,
        title: 'Check if a string is a valid IPv4 address.',
        codeSnippet: `function isValidIPv4Address(ip) {
    const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(ip);
}
          
const inputIP = "192.168.0.1";
const isValidIPv4 = isValidIPv4Address(inputIP);
console.log("Is Valid IPv4 Address:", isValidIPv4);`
    },
    {
        id: 38,
        title: 'Count the number of occurrences of a substring in a string.',
        codeSnippet: `function countSubstringOccurrences(str, substr) {
    const regex = new RegExp(substr, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}
          
const inputStr = "Hello, Hello, Hello, World!";
const substring = "Hello";
const occurrenceCount = countSubstringOccurrences(inputStr, substring);
console.log("Substring Occurrence Count:", occurrenceCount);`
    },
    {
        id: 39,
        title: 'Check if a string is a valid palindrome, considering alphanumeric characters and ignoring case.',
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
        id: 40,
        title: 'Convert a string to snake case.',
        codeSnippet: `function toSnakeCase(str) {
    return str.replace(/\s+/g, '_').toLowerCase();
}
          
const inputStr = "Hello, World!";
const snakeCaseStr = toSnakeCase(inputStr);
console.log("Snake Case String:", snakeCaseStr);`
    },
    {
        id: 41,
        title: 'Find the first recurring character in a string.',
        codeSnippet: `function findFirstRecurringChar(str) {
const charSet = new Set();
for (let char of str) {
    if (charSet.has(char)) {
    return char;
    }
    charSet.add(char);
}
return null; // No recurring character found
}
          
const inputStr = "abcaedf";
const firstRecurringChar = findFirstRecurringChar(inputStr);
console.log("First Recurring Character:", firstRecurringChar);`
    },
    {
        id: 42,
        title: 'Capitalize the first letter of each word in a sentence.',
        codeSnippet: `function capitalizeWords(sentence) {
const words = sentence.split(' ');
const capitalizedWords = words.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
});
return capitalizedWords.join(' ');
}
          
const inputSentence = "hello, world!";
const capitalizedSentence = capitalizeWords(inputSentence);
console.log("Capitalized Sentence:", capitalizedSentence);`
    },
    {
        id: 43,
        title: 'Find the length of the longest common prefix among an array of strings.',
        codeSnippet: `function longestCommonPrefix(strs) {
if (strs.length === 0) {
    return '';
}
          
let prefix = strs[0];
for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
    prefix = prefix.slice(0, -1);
    }
}
          
    return prefix;
}
          
const inputStrs = ['flower', 'flow', 'flight'];
const commonPrefix = longestCommonPrefix(inputStrs);
console.log("Longest Common Prefix:", commonPrefix);`
    },
]