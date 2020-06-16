// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(n1, n2) {
  var n1, n2;
  if (n1 > n2)
    return n1;
  else
    return n2;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words) {
  if (words.length == 0)
    return null;
  var new1 = {};
  var max = words[0],
    maxCount = 1;
  for (var i = 0; i < words.length; i++) {
    var element1 = words[i];
    if (new1[element1] == null)
      new1[element1] = 1;
    else
      new1[element1]++;
    if (new1[element1] > maxCount) {
      max = element1;
      maxCount = new1[element1];
    }
  }
  return max;
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  if (numbers.length == 0)
    return 0;
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

// Progression #4: Calculate the average

function midPointOfLevels(numbers) {
  if (numbers.length == 0)
    return null;
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  var avg = sum / numbers.length;
  return avg;
}
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  if (wordsArr == 0)
    return null;
  // var sum = 0,
  //   avg;
  // for (i = 0; i < wordsArr.length; i++) {
  //   wordsArr.forEach((wordsArr[i]) {
  //     sum += wordsArr[i].length;
  //   });
  // }
  // avg = sum / wordsArr.length;
  // return avg;
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique) {
  if (wordsUnique == 0)
    return null;
  var out = [];
  for (let i = 0; i < wordsUnique.length; i++) {
    let el = wordsUnique[i];
    if (out.indexOf(el) === -1)
      out.push(el);
  }
  return out;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind, matter) {
  if (wordsFind == 0)
    return null;
  len = wordsFind.length;
  for (var i = 0; i < len; i++) {
    if (wordsFind[i] === matter) { // strict equality test
      return true;
    }
  }
  return false;
}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount, matter) {
  if (wordsCount == 0)
    return 0;
  var count = 0;
  for (var i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] === matter) {
      count++;
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
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];