// const langOne = document.querySelector('.langOne');
// const langTwo = document.querySelector('.langTwo');
// const langthree = document.querySelector('.langThree');
// const multLang = document.querySelector('.multLang');

// langOne.addEventListener('mouseover', () => {
//   langOne.classList.add('progress-bar-striped');
// });

// langOne.addEventListener('mouseout', () => {
//   langOne.classList.remove('progress-bar-striped');
// });

// langTwo.addEventListener('mouseover', () => {
//   langTwo.classList.add('progress-bar-striped');
// });

// langTwo.addEventListener('mouseout', () => {
//   langTwo.classList.remove('progress-bar-striped');
// });

// Leetcode #66
// var plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//       digits[i] = digits[i] + 1;
//       return digits;
//       ß;
//     } else {
//       digits[i] = 0;
//     }
//   }
//   digits.unshift(1);
//   return digits;
// };

// Linear search
const unsortedArr = [
  31,
  27,
  28,
  42,
  13,
  8,
  11,
  30,
  17,
  41,
  15,
  43,
  1,
  36,
  9,
  16,
  20,
  35,
  48,
  37,
  7,
  26,
  34,
  21,
  22,
  6,
  29,
  32,
  49,
  10,
  12,
  19,
  24,
  38,
  5,
  14,
  44,
  40,
  3,
  50,
  46,
  25,
  18,
  33,
  47,
  4,
  45,
  39,
  23,
  2,
];
const sortedArr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
];

const linear = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `Found ${arr[i]} in ${i + 1} steps!`;
    }
  }
};

console.log(linear(unsortedArr, 40));
console.log(linear(sortedArr, 40));

const binary = (arr, target) => {
  let start = 0;
  let end = arr.length;
  let pivot = Math.floor((start + end) / 2);
  let steps = 0;

  for (let i = 0; i < arr.length; i++) {
    if (target < arr[pivot]) end = pivot;
    else start = pivot;
    pivot = Math.floor((start + end) / 2);

    if (arr[pivot] === target) {
      return `Found: ${target} in ${i + 1} steps!`;
    }
  }
};
console.log(binary(sortedArr, 43));

// Leetcode #9
const isPalindrome = (x) => {
  const inputArray = x.toString().split('');
  let reverse = ``;

  for (let i = inputArray.length - 1; i >= 0; i--) {
    reverse += `${inputArray[i]}`;
  }
  const outputNumber = parseInt(reverse, 10);

  if (x === outputNumber) {
    return true;
  }
  return false;
};
console.log('isPalindrome:', isPalindrome(121));

// Leetcode #34

const searchRange = (nums, target) => {
  const unfilteredOutputArray = [];
  const filteredOutputArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      unfilteredOutputArray.push(i);
    }
  }
  if (unfilteredOutputArray.length === 0) {
    return [-1, -1];
  }
  filteredOutputArray.push(unfilteredOutputArray[0]);
  filteredOutputArray.push(
    unfilteredOutputArray[unfilteredOutputArray.length - 1]
  );
  return filteredOutputArray;
};
testNums = [5, 7, 7, 8, 8, 10];
console.log('searchRange:', searchRange(testNums, 8));

// Leetcode #412
const fizzBuzz = (n) => {
  let outputArray = [];
  for (let i = 1; i <= n; i++) {
    let output = `${i}`;
    if (i % 3 === 0 && i % 5 !== 0) {
      output = `Fizz`;
    }
    if (i % 5 === 0 && i % 3 !== 0) {
      output = `Buzz`;
    }
    if (i % 5 === 0 && i % 3 === 0) {
      output = `FizzBuzz`;
    }
    outputArray.push(output);
  }
  return outputArray;
};
console.log('fizzBuzz:', fizzBuzz(15));
