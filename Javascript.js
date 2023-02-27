// const value = [];
// for (let i = 0; i < 10; i++) {
//   const number = prompt(`Add a number ${i + 1}:`);
//   value.push(parseFloat(number));
// }

function mergeSort(array) {
  //if the array is empty or contain 1 element, so it is sorted
  if (array.length <= 1) {
    return array;
  }
  //MergeSort is a divide and conquer sorting algorithm so we should split the array in the middle
  const middle = Math.floor(array.length / 2);
  const leftSide = array.slice(0, middle);
  const rightSide = array.slice(middle);

  //Sort left side and right side recursively
  const sortLeft = mergeSort(leftSide);
  const sortRight = mergeSort(rightSide);
  
  //Concatenate the 2 sorted sides
   const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < sortLeft.length && rightIndex < sortRight.length) {
    if (sortLeft[leftIndex] < sortRight[rightIndex]) {
      mergedArray.push(sortLeft[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(sortRight[rightIndex]);
      rightIndex++;
    }
  }

  return mergedArray.concat(sortLeft.slice(leftIndex)).concat(sortRight.slice(rightIndex));
}
const sortedArray = mergeSort(value);
document.getElementById("numbers").innerHTML=sortedArray;



function checkPalindrome(){
var word=document.getElementById("word").value;
if (Palindrome(word)) {
  document.getElementById("palindrome").innerHTML=(`${word} is a palindrome!`);
} else {
   document.getElementById("palindrome").innerHTML=(`${word} is not a palindrome!`);
}
}

function Palindrome(s) {
  if (s.length < 2) {
    return true;
  } else {
//check first and last character   
if (s[0] !== s[s.length - 1]) {
      return false;
} else {
// Apply same algorithm recursively
      const middle = s.substring(1, s.length - 1);
      return Palindrome(middle);
    }
  }
}

function checkPrime(){

const x=document.getElementById("age").value;
const yearOfBirth = parseInt(x);
const currentYear = new Date().getFullYear();
const age = currentYear - yearOfBirth;

if (Prime(age)) {
  document.getElementById("prime").innerHTML=(`${age} is a prime number!`);
} else {
   document.getElementById("prime").innerHTML=(`${age} is not a prime number!`);
}
}

function Prime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
    
     return false;
    }
  }
  return true;
}

function reverseWord(){
var word=document.getElementById("reverseText").value;

  document.getElementById("reverse").innerHTML=swapNumbers(word) ;
}

function swapNumbers(word) {
  const letters = []; 
  const numbers = []; 

  //separate the letters from numbers
  for (let i = 0; i < word.length; i++) {
    if (isNaN(parseInt(word[i]))) {
      letters.push(word[i]);
    } else {
      numbers.push(word[i]);
    }
  }
  numbers.reverse();

  let result = ''; 
  let j = 0; // j indicates the numbers' index

  for (let i = 0; i < word.length; i++) {
    if (isNaN(parseInt(word[i]))) {
      result += letters[i - j]; 
    } else {
      result += numbers[j]; 
      j++; 
    }
  }

  return result;
}

function moveConsonant(){
var word=document.getElementById("moveConsonant").value;

  document.getElementById("consonant").innerHTML= Consonant(word) ;
}
function Consonant(word) {
  const consonantsRegex = /^[bcdfghjklmnpqrstvwxyz]+/i;

  let result = word.match(consonantsRegex);
  let consonants;
  if (result) {
    consonants = result[0];
  } else {
    consonants = '';
  }

  let newWord = word.slice(consonants.length) + consonants;
  newWord += "ay";

  return newWord;
}

function getIpAddress() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.ipify.org');
  xhr.onload = function() {
    if (xhr.status === 200) {
      const ipAddress = xhr.responseText;
      const digits = ipAddress.match(/\d/g);
      let sum = 0;
      for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 0) {
          sum += parseInt(digits[i]);
        }
      }
      document.getElementById('ip-address').textContent = `${ipAddress}`;
      document.getElementById('even-digits-sum').textContent = `Sum of even digits: ${sum}`;
    } else {
      console.log('Unable to retrieve IP address');
    }
  };
  xhr.send();
}









