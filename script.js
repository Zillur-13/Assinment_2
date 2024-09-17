// task 01
function calculateDifference(a, b) {
    return a - b;
}
let resultCalculations = calculateDifference(15,10);
console.log(resultCalculations);


// task 02
function isOdd(number){
 return number%2!==0
}
console.log(isOdd(5))


// task 03
function findMin(array) {
    return Math.min(...array);
 }
 
 let numbers = [5, 2, 9, 1, 7];
 let minNumber = findMin(numbers);
 console.log(minNumber);


// task 04
function filterEvenNumbers(evenNumber){
    return evenNumber.filter(item => item%2===0) 
}

let num1 = [3,5,8,6,10,11];
let numResult = filterEvenNumbers(num1);
console.log(numResult)



// task 05
function sortArrayDescending(array) {

    return array.sort((a, b) => b - a);
}

let sortArray = [11,4,2,7,9,5,1];
let sortArrayResult = sortArrayDescending(sortArray);
console.log(sortArrayResult)



// task 06
function lowercaseFirstLetter (srt){
  return srt.toLowerCase()[0]
}
let string = `Hellow`;
let stringResult = lowercaseFirstLetter(string);
console.log(stringResult)



// task 07
function countVowels(str) {
    return (str.match(/[aeiouAEIOU]/g) || []).length;
  }
  let text = `Zillur`;
  const result = countVowels(text);
  console.log(result)



// task 08
function findAverage(add){
 return add.reduce((m,n)=>m+n)
}

let addArrayElements = [1,2,3,4,5];
let addArrayResult = (findAverage(addArrayElements));
console.log(addArrayResult)