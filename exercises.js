/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function doubleArray(Array) {
  let emptyArry = [];
  for (let i = 0; i < Array.length; i++) {
    emptyArry.push(Array[i]*2)
  }
  return emptyArry;
}
console.log(doubleArray([1,2,3]));

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays = function sumArrays(arry1, arry2) {
  let sumArry1 = 0;
  let sumArry2 = 0;
  for (let i = 0; i < arry1.length; i++) {
    sumArry1+=arry1[i];
    sumArry2+=arry2[i];
  }
  return sumArry1 + sumArry2;
}
console.log(sumArrays([1,2,3],[3,2,1]));

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function stringCount(str) {
  let stringToArray = str.split('');
  return stringToArray.length;
}
console.log(stringCount("hello"))
/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function arrayLength(Array) {
  return Array.length
}
console.log(arrayLength([1,2,3,4,5,6,1,2]));

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function countAll(Array) {
  let sumArry = 0;
  for (let i = 0; i < Array.length; i++) {
    sumArry+=Array[i];
  }
  return sumArry
}
console.log(countAll([1,2,3,4,5,6]));


/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function countStrings(Array) {
  let emptyArry = [];
  for (let i = 0; i < Array.length; i++) {
    let splitString = Array[i].split('');
    emptyArry.push(splitString.length);
  }
  return emptyArry;
};
console.log(countStrings(["hello", "whatsup", "devleague"]));
/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
var countAllStrings = function countAllStrings(arry) {
  let sumArry = 0;
  let newArr = countStrings(arry);
  for (let i = 0; i < arry.length; i++) {
    sumArry+=newArr[i];
  }
  return sumArry
};
console.log(countAllStrings(["hello", "whatsup", "devleague"]));


/* #convertToArray sameprob:objvalues
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function convertToArray(obj) {
  let emptyArry = [];
  let emptyArry2 = [];
  for (let x in obj) {
    emptyArry2.push(x);
  }
  // console.log(emptyArry2.length)
  // console.log(Object.keys(Object)[1])
  for (let i = 0; i < emptyArry2.length; i++) {
    emptyArry.push(obj[Object.keys(obj)[i]])
  }
  return emptyArry;
};
console.log(convertToArray({Name: 'Kevin', Age: 28, Sex: 'Male'}))
/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function objectSize(obj) {
  let emptyArry = [];
  for(let x in obj) {
    emptyArry.push(obj.x);
  }
  return emptyArry.length
};
console.log(objectSize({Name: 'Kevin', Age: 28, Sex: 'Male'}))
/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
var createZeroFilledArray = function createZeroFilledArray(num) {
  let zeroArry = [];
  let zero = 0;
  for (let i = 0; i < num; i++) {
    zeroArry.push(zero)
  }
  return zeroArry
};
console.log(createZeroFilledArray(5))

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function  poppedArray(arry) {
  let emptyArry = [];
  for (let i = 0; i < arry.length - 1; i++) {
    emptyArry.push(arry[i])
  }
  return emptyArry;
};
console.log(poppedArray([1,2,3,4,5,6]))
/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function splitString(str) {
  let emptyArry = [];
  for (let i = 0; i < str.length; i++) {
    emptyArry.push(str[i])
  }
  return emptyArry
};
console.log(splitString("helloworld"));

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
var lengthOfLast = function lengthOfLast(arry) {
    //console.log(countStrings(arry)) to see if returns length of all strings in array
    return countStrings(arry)[arry.length - 1]
};
console.log(lengthOfLast(["hello","world","devleague"]))
/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function sumBelowTen(arry) {
  let newArr = [];
  let sumArr = 0;
    for (let i = 0; i < arry.length; i++) {
      if (arry[i] < 10) {
        newArr.push(arry[i])
      }
    }
    for (let x = 0; x < newArr.length; x++) {
      console.log(newArr[x])
      sumArr+=newArr[x]
    }
    return sumArr;
};
console.log("==================" + sumBelowTen([5,5,15]));
/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
var moreThanTenLetters = function moreThanTenLetters(arry) {
  let emptyArry = [];
  // console.log(countStrings(arry)[0])
  // console.log(arry.length)
  for (let i = 0; i < arry.length; i++) {
    if (countStrings(arry)[i] > 10) {
      // console.log(countStrings(arry)[i])
      emptyArry.push(countStrings(arry)[i])
    }
  }
  return emptyArry.length
};
console.log(moreThanTenLetters(["hello","worasdasdld","devleagueeee"]));

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function multiplyAll(arry) {
  let product = 1;
  for (let i = 0; i < arry.length; i++) {
    product = product * arry[i]
  }
  return product
};
console.log(multiplyAll([5,4,3,2,1]))
/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive = function sumAllPositive(arry) {
  let sum = 0;
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] >= 0) {
      sum+=arry[i]
    }
  }
  return sum;
};
console.log(sumAllPositive([-1,-2,-1,2,2]))
/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function stringCountBelowThree(arry) {
  let emptyArry = [];
  for (let i = 0; i < arry.length; i++) {
    if (countStrings(arry)[i] <= 3) {
      emptyArry.push(countStrings(arry)[i]);
    }
  }
  console.log(emptyArry)
  return emptyArry.length
};
console.log(stringCountBelowThree(["a","ab","abc","abcd"]))

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function countObjects(arry) {
  return arry.length
};
console.log(countObjects([{Name: "Kevin", Age: 28, Sex: "Male"}, {Fruits: "Orange", Color: "Blue"}]))

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function getObjectKeys(obj) {
  let emptyArry = [];
  for (let x in obj) {
    emptyArry.push(x)
  }
  return emptyArry;
};
console.log(getObjectKeys({Name: "Kevin", Age: 28, Sex: "Male"}))

/* #getObjectValues sameprob:objvalues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function getObjectValues(obj) {
  // let emptyArry = [];
  // convertToArray(obj)
  return convertToArray(obj);
};

console.log(getObjectValues({Name: "Kevin", Age: 28, Sex: "Male"}));

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function makeObject(str1, str2) {
  let obj = {
    
  }
  obj[str1] = str2
  return obj
};
console.log(makeObject("Greetings", "Hello World"))

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse = function makeObjectReverse(str1, str2) {
   let obj = {

   }
   obj[str2] = str1;
   return obj
};
console.log(makeObjectReverse("Greetings", "Hello World"))

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function tupleToObject(arry) {
  let obj = {

  }
  obj[arry[0]] = arry[1];
  return obj
};
console.log(tupleToObject(["Greetings", "Hello World"]))

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function tupleToObjectReverse(arry) {
  let obj = {

  }
  obj[arry[1]] = arry[0];
  return obj;
};
console.log(tupleToObjectReverse(["Greetings", "Hello World"]));

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function stringToKeys(arry) {
  let obj = {

  }
  for (let i = 0; i < arry.length; i++) {
    console.log(arry[i])
    obj[arry[i]] = 0;
  }
  return obj;
};
console.log(strToKeys(["Name", "Age", "Sex"]));

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function getValues(obj) {
  let arry = [];
  for (let x in obj) {
    // console.log(obj[x])
    arry.push(obj[x])
  }
  return arry;
};
console.log(getValues({Name: "Kevin", Age: 28, Sex: "Male"}))
/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function getKeys(obj) {
  let arry = [];
  for (let x in obj) {
    arry.push(x)
  }
  return arry
};
console.log(getKeys({Name: "Kevin", Age: 28, Sex: "Male"}))
/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function objectToArray(obj) {
  let objLength = [];
  let emptyArry = [];
  for (let x in obj) {
    objLength.push(x)
  }
  for (let i = 0; i < objLength.length; i++) {
    
    
  }
  return emptyArry
};
console.log(objectToArray({Name: "Kevin", Age: 28, Sex: "Male"}))
/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject;

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject;

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples;

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues;

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts;

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums;

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Object}
 */
var frequencyMap;

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Object}
 */
var tupleConvertToObject;


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: null,
  mapStringCounts: null,
  arrayToObjectNums: null,
  stringToKeys: null,
  charCountMap: null,
  frequencyMap: null,
  tupleConvertToObject: null
}
