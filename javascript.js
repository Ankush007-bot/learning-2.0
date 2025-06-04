

//Algorithm , Logic, Coding round



// Basic Level
//1. Reverse a string

// Input: "hello" → Output: "olleh"

//2. Check for a palindrome

// "racecar" → true, "hello" → false

//3. Find the largest number in an array

// [1, 5, 3, 9, 2] → 9

//4. Count the number of vowels in a string

// "hello" → 2

//5. Remove duplicates from an array

// [1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]

//6. Sum all numbers in an array

// [1, 2, 3] → 6

//7. Factorial of a number

// 5! = 120

// ⚙️ Intermediate Level
//8. Fibonacci sequence (n-th term or full list)

// 0, 1, 1, 2, 3, 5, 8, ...

//9. Anagram checker

// "listen" and "silent" → true

//10. Check if two arrays are equal

// [1,2,3] vs [3,2,1] → false (if order matters)

//11. Flatten a nested array

// [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]

//12. Find the first non-repeating character in a string

// "aabbcde" → "c"

//13. Check if a number is prime

//14. Sort an array without using sort()

//15. Find missing number in a sequence




//reverse string 

// let str = "Hello";

//   str = str.split("");

//   let revStr = [];

//   ["Hello"];

//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr.push(str[i]);
//   }
//   revStr.toString();

//   console.log(revStr, "revStr");

//   console.log(str, "str");





//   Check for a palindrome

  // "racecar" → true, "hello" → false

//   const revStr = (string) => {
//     let str = string;

//     str = str.split("");

//     let revStr = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//       revStr += str[i];
//     }
//     return revStr;
//   };

//   let palindrome = revStr("racecar");

//   if (palindrome === "racecar") {
//     console.log("string is palindrom");
//   } else {
//     console.log("string is not palindrom");
//}


// Find the largest number in an array

let arr = [1, 5, 3, 9, 2, 10];
let lrgNum = 0;

// for(let i=0;i<arr.length;i++){

//   for(let j=i;j<arr.length;i++){
//     if(arr[i]>arr[j]){
//       lrgNum=arr[i]
//     }
//   }
// }

// for (let j = 0; j < arr.length; j++) {
//   if (lrgNum < arr[j]) {
//     lrgNum = arr[j];
//   }
// }

// console.log("lrgNumbr1");
// console.log(lrgNum, "lrgNumbr");


//<-----ANAGRAM----->