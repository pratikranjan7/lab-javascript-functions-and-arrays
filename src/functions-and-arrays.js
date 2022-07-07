// Progression #1: Greatest of the two numbers

var num1 = 56;
var num2 = 93;
function greatestOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Progression #2: The lengthy word
// const words = [
//   "mystery",
//   "brother",
//   "aviator",
//   "crocodile",
//   "pearl",
//   "orchard",
//   "crackpot",
// ];

const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findScaryWord(words) {
  var lens = [];
  if (words.length === 0) {
    return null;
  }
  if (words.length === 1) {
    return words[0];
  }
  for (let index = 0; index < words.length; index++) {
    const size = words[index].length;
    lens.push(size);
  }
  largest = 0;
  large_index = 0;
  for (let index = 0; index < lens.length; index++) {
    if (lens[index] > largest) {
      largest = lens[index];
      large_index = index;
    }
  }
  return words[large_index];
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Progression #3: Net Price

const prices = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(prices) {
  var x = 0;
  for (let i = 0; i < prices.length; i++) {
    x = x + prices[i];
  }
  return x;
}

// Progression #3.1: Bonus

const mixedArr = [
  63,
  122,
  "audi",
  61,
  true,
  "volvo",
  "20",
  "lamborghini",
  38,
  156,
];
function add(mixedArr) {
  initial = 0;
  if (mixedArr.length === 0) {
    return 0;
  }
  for (let index = 0; index < mixedArr.length; index++) {
    if (typeof mixedArr[index] === "string") {
      initial = initial + mixedArr[index].length;
    }
    if (typeof mixedArr[index] === "number") {
      initial = initial + mixedArr[index];
    }
    if (typeof mixedArr[index] === "boolean") {
      if (mixedArr[index] === true) {
        initial = initial + 1;
      }
      if (mixedArr[index] === false) {
        initial = initial + 0;
      }
    }
    if (typeof mixedArr[index] === "object") {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return initial;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg) {
  var sum = 0;
  if (numbersAvg.length === 0) {
    return null;
  }
  for (let i = 0; i < numbersAvg.length; i++) {
    sum = sum + numbersAvg[i];
  }
  var average = 0;
  average = sum / numbersAvg.length;
  return average;
}

// Progression 4.2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(wordsArr) {
  x = 0;
  if (wordsArr.length === 0) {
    return null;
  }
  for (let i = 0; i < wordsArr.length; i++) {
    x = x + wordsArr[i].length;
  }
  return x / wordsArr.length;
}

// Progression 4.3: Generic Average

function avg(mixedArr) {
  total_chars = 0;
  if (mixedArr.length === 0) {
    return null;
  }
  for (let index = 0; index < mixedArr.length; index++) {
    if (typeof mixedArr[index] === "string") {
      total_chars = total_chars + mixedArr[index].length;
    }
    if (typeof mixedArr[index] === "number") {
      total_chars = total_chars + mixedArr[index];
    }
    if (typeof mixedArr[index] === "boolean") {
      if (mixedArr[index] === true) {
        total_chars = total_chars + 1;
      }
      if (mixedArr[index] === false) {
        total_chars = total_chars + 0;
      }
    }
  }
  ave = total_chars / mixedArr.length;
  return parseFloat(ave.toFixed(2));
}

// Progression #5: Unique arrays

const wordsUnique = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
  "egg",
  "flour",
];

function uniqueArray(wordsUnique) {
  var duplicate = [];

  var unique = [0];

  var bool = 0;

  if (wordsUnique.length === 0) {
    return null;
  }

  for (var x = 0; x < wordsUnique.length; x++) {
    for (var y = 0; y < unique.length; y++) {
      if (wordsUnique[x] != unique[y]) {
        bool = 1;
      } else if (wordsUnique[x] === unique[y]) {
        bool = 0;
        duplicate.push(wordsUnique[x]);
        break;
      }
    }
    if (bool === 1) {
      unique.push(wordsUnique[x]);
    }
  }
  unique.shift();
  return unique;
}

// Progression #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function searchElement(wordsFind, tofind) {
  if (wordsFind.length === 0) {
    return null;
  }

  var bool1 = 0;
  for (var i = 0; i < wordsFind.length; i++) {
    if (tofind === wordsFind[i]) {
      bool1 = 1;
    }
  }
  if (bool1 === 1) {
    return true;
  } else if (bool1 === 0) {
    return false;
  }
}

// Progression #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimesElementRepeated(words, toCount) {
  if (words.length === 0) {
    return 0;
  }

  var count = 0;
  for (var x = 0; x < words.length; x++) {
    if (toCount === words[x]) {
      count = count + 1;
    }
  }
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
];

function maximumProduct(matrix) {
  z = 1;
  for (var x = 0; x < matrix.length; x++) {
    for (var y = 0; y < matrix.length; y++) {
      if (matrix[x][y] != 1) {
        z = 0;
      }
    }
  }
  if (z == 1) {
    return 1;
  }
}
