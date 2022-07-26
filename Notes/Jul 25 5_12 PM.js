
// [2,4,6...]


//const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];
function getEvens(arrayOfNumbers){
  let evens = [];

  // iterating over the numbers array
  // if number is even, do something so we remember
  for (let i = 0; i < arrayOfNumbers.length; i++){
    // is arrayOfNumbers[i] even?
    let currentItem = arrayOfNumbers[i];

    let isEven = currentItem % 2 === 0;

    if (isEven){
      evens.push(currentItem);
    }
  };
  
  return evens;
}


let numbers = [1,2,3,4,5,6,7,8,9,10];
const evens = getEvens(numbers;)



// for(let i = 0; i < numbers.length; i++){
//   // action here
// }

// if(x === true){
//   // action here
// }else {
//   // action here
// }



let numbers = [1,2,3,4,5,6,7,8,9,10];



function getOdds(arrayOfNumbers){
  let oddNumbers = [];
  
  for (let i = 0; i < arrayOfNumbers.length; i++){
   const currentItem = arrayNumbers[i];
   let isOddItem = currentItem % 2 !== 0;
  
     if (isOddItem){
      oddNumbers.push(currentItem) 
     }
  
  }
  
  return oddNumbers;  
}



const odds = getOdds(numbers)


console.log(odd); // [1,3,5,7,9];





// for(let i = 0; i < numbers.length; i++){
//   // action here
// }

// if(x === true){
//   // action here
// }else {
//   // action here
// }





const sandwiches = ["ham", "turkey", "beef"];

// takes a string (name), returns a string (sandwich);

function makeLunches(name){
  const ham = sandwiches[0]
  
  // bobert wants ham
  if (name === "bobert"){
   return ham;
  }
  
  // alan wants beef
  const beef = sandwiches[2]
  
  if (name === "alan"){
    return beef; 
  }
  // default: say sorry
  return  "sorry"
// END
}


const alansLunch = makeLunches('alan');
const bobertsLunch = makeLunches('bobert');

const hoboLunch = makeLunches('hobo'); // "sorry"

console.log(makeLunchs('Eric')) // "sorry"
console.log(makeLunchs('hui')) // "sorry"
console.log(makeLunchs('Erhuihuiic')) // "sorry"


console.log(bobertsLunch) // => "ham";
console.log(alanLunch) //  => "beef"





let numbers = [1,2,3,4,5,6,7,8,9,10,11] // 10;
/


function getEvens(arrayOfNumbers){
  
  function isEven(number){
   return number % 2 === 0;
  }

  
  let evens = [];
  
  
  for (let i = 0; i < arrayOfNumbers.length; i++){
    const currentItem = arrayOfNumbers[i];
    const isCurrentItemEven = isEven(currentItem);
    
    if (isCurrentItemEven){
      evens.push(currentItem);
    }
  }
  
  
  return evens;
  
}


function isOdd(number){
   return number % 2 !== 0;
}

function isEven(number){
   return number % 2 === 0;
}


function getOdds(arrayOfNumbers){
  
  let evens = [];
  
  for (let i = 0; i < arrayOfNumbers.length; i++){
    const currentItem = arrayOfNumbers[i];
    const isCurrentItemOdd = isOdd(currentItem);
    
    if (isCurrentItemOdd){
      evens.push(currentItem);
    }
  }
  
  
  return evens;
  
}

const evens = isEvens(numbers); // []



let isLoading = false;

// if (isLoading === false){
//   isLoading = true;
// }

// if (isLoading === true){
//   isLoading = false;
// }


const name = "";

if (name === ''){
  alert('Error: No name! Name required.')
}
















// console...... 