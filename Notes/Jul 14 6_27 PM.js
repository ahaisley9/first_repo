// Part II
// Complete the following, starting from the following array: let arr = ["JavaScript", "Python", "Ruby", "Java"]

// Return the following array: ["Python", "Ruby"].
// Combine the array with the array ["Haskell", "Clojure"].
// Return the string "JavaScript, Python, Ruby, Java".
// Try to explain, in your own words (or diagrams!) what the difference is between passing by value vs. passing by reference.


let arr = ["JavaScript", "Python", "Ruby", "Java"];
arr; 
let arr1 = []







// // // ["Python", "Ruby"]

// // const python = arr[1];
// // const ruby = arr[2];

// // const answer = ["Python","Ruby"];



// // ["JavaScript", "Java"]
// const 1 = arr[3];// // ;
// // ["JavaScript", "Java"]




// // // ["Python", "Ruby"]

// // const pythonShorthand = arr[1];
// // const rubyShorthand = arr[2];

// let arr = [];

// arr[1];



// CONCAT
// What is it? Concatenate (Combining);
//  array.concat(myOtherArray)

// const array1 = ["Hi", "Alan"]
// const array2 = ["Python", "Ruby"];



// const array3 = array1.concat(array2).concat(array1).concat(array2);

// const firstElementOfX = array3[0];
// // ["Hi", "Alan","Python", "Ruby" ];


// const sameThing = [...array1, ...array2, ...array1, ...array2];

// console.log(array3);


// // PUSH
// // Add to end;

// const spread1 = [...array1, "NEW ITEM"];



// GOAL: "JavaScript, Python, Ruby, Java" (STRING)


// // const python = arr[1];
// // const ruby = arr[2];

const array = ["JavaScript", "Python", "Ruby", "Java"];

const javascript = array[0]; 
const python = array[1];
const ruby = array[2];
const java = array[3];

const punctuation = ", ";
const exclamation = "!";

// JUST STRINGS...

// "cat" + "dog" = "catdog"
// "cat" + "  dog" = "cat  dog"
// "cat" + ", dog" = "cat, dog"

// PRIMITIVES = 
// String = "abc"
// Boolean = true false
// Number = 9


const result = javascript + punctuation + python + punctuation + ruby + punctuation + java + exclamation; 


// 1 + 1 = 2;
// 1 + "1" = "11";


//  8 + 9 = 17;
//  9 + "eight" = "9eight" 
// result = "JavaScript, Python, Ruby, Java!"
// whatTheyAskedFor = "JavaScript, Python, Ruby, Java!"



// countPositiveSumNegative
// [1, 2, 3, -2, -2, -2 ] => [3, -6]

// function countPositiveSumNegative(array){
//   // 0 1 2 3 4 5 6 7
//   let countPositive = 0;
//   let sumNegative = 0;
  
//   for (let i = 0; i < array.length + 1; i++){
    
//     const currentArrayItem = array[i];
    
//     // If currentArrayItem is positive, add +1 to countPositive;
//     if (currentArrayItem > 0){
//       countPositive++;
//     }
    
//     // If currentArrayItem is negative, add it to sumNegative;
//     if (currentArrayItem < 0){
//       sumNegative = sumNegative + currentArrayItem;
//     }
//   }
  
//   const result =  [countPositive, sumNegative];
  
//   return result;
  
// }

// function countPositiveSumNegative(array){
//   // 0 1 2 3 4 5 6 7
//   let countPositive = 0;
//   let sumNegative = 0;
  
//   let i = 0;
  
  
//   while(i < array.length + 1){
    
//     const currentArrayItem = array[i];
    
//     // If currentArrayItem is positive, add +1 to countPositive;
//     if (currentArrayItem > 0){
//       countPositive++;
//     }
    
//     // If currentArrayItem is negative, add it to sumNegative;
//     if (currentArrayItem < 0){
//       sumNegative = sumNegative + currentArrayItem;
//     }
    
//     i++;
//   }
  
  
//   const result =  [countPositive, sumNegative];
  
//   return result;
  
// }

// [1, 2, 3, -2, -2, -2 ] => [3, -6]
function countPositiveSumNegative(array){
  let countPositive = 0;
  let sumNegative = 0;

  array.forEach((currentArrayItem) => {
    // If currentArrayItem is positive, add +1 to countPositive;
    if (currentArrayItem > 0){
      countPositive++;
    }
    
    // If currentArrayItem is negative, add it to sumNegative;
    if (currentArrayItem < 0){
      sumNegative = sumNegative + currentArrayItem;
    }
  })
  
  const result =  [countPositive, sumNegative];
  
  return result;
}


// [0, 0]

const sampleArray = [1, 2, 3, -2, -2, -2];

// countPositiveSumNegative(sampleArray); [3, -6]



