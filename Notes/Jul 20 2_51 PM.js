



const person  = {
  name: 'Al',
  age: 34,
  sexy: true,
  address: {
    city: 'San Diego',
    state: 'CA',
  },
  favoriteColors: ["Blue", "Green"],
  phoneNumbers: [
    {
      id: 'dfijsd2234jilk',
      number: '999-9999',
      priority: 1,
    },
    {
      id: 'asdasdasdas',
      number: '888-9999'
      priority: 2,
    },
  ]
}


// THE SAME
person.name // 'Al'
person[name] // 'Al'


const people = ["Al", "Bobert"];

// NOT THE SAME
people[0] // Al
people[1] // Bobert
people.Al // Undefined...


const favColors = person.favoriteColors // ["Blue", "Green"]
const firstFavoritColor = person.favoriteColors[0] // "Blue"


const firstPhoneNumber = person.phoneNumbers[0].number;
const firstPhoneNumber = person.phoneNumbers.filter(phone => phone.priority === 1);

// '999-9999'

const AlsCity = person.address.city. // 'San Diego'   //person.city  Undefined...


const users = [
  {
    id: 1,
    username: '@atown',
    realName: 'Alan'
  },
  {
    id: 2,
    username: '@bob',
    realName: 'Bobert'
  }
]


const tweet = {
  userId: 1,
  id: 1,
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
}

const tweetUser = user[0];
// {
//     id: 1,
//     username: '@atown',
//     realName: 'Alan'
//   },
tweetUser.realName = 'Hello';

console.log(tweetUser);
// {
//     id: 1,
//     username: '@atown',
//     realName: 'Hello'
//   },
console.log(users[0]);
// {
//     id: 1,
//     username: '@atown',
//     realName: 'Alan'
//   },


const tweetUserRealName = tweetUser.realName;

//'Alan'

let x = 1;

x = 2;

let object = {
  id: 1,
}

object = 8; // bad;


object.id = 9;

const isNine = object.id === 9;

if (isNine){
  console.log('IS NINE!')
}





// 99% SAME;
function doSomething(){
  console.log('I am doing something');
}

const doSomething = () => {
  console.log('I am doing something');
}

// ...

doSomething();
// "I am doing something"

doSomething();
// "I am doing something"
// "I am doing something"


// const number = 8;
// const isNine = number === 9;


// const number2 = 5;
// const isNine2 = number2 === 9;

// const number3 = 5;
// const isNine3 = number3 === 9;


function isNumberNine(number){
  return number === 9;
}


isNumberNine(8);
// false

isNumberNine(9);
// true;

isNumberNine('HI');
// false // better? ERROR!!!!


const alansWeinerLength = 4;

isNumberNine(alansWeinerLength)
// false;


function addTogether(number1, number2){
  return number1 + number2;
}

addTogether(1,2);
// 3;

addTogether(10, 10);
// 20;


// getFirstElementOfArray.js;

/**
 * 
 * This returns the first element of an array
 */
function getFirstElementOfArray(array){
  return array[0];
}




const fruits = ["Apple", "Orange"];


getFirstElementOfArray(fruits);


// "Apple";


function sayMyName(name){
  console.log(name);
}

sayMyName("Bobert");

// "Bobert"

function sayNameIsCool(name){
  console.log(name + " is cool");
}

sayNameIsCool("Bobert");

sayNameIsCool("Alan");


// "Bobert is cool"
// "Alan is cool"


// function addTogether(n1, n2){
//   return n1 + n2;
// }

// const four = addTogether(2,2);




// RETURN STATEMENTS

// function sayMyName(name){
//  return name;
// }

// const bobert = sayMyName("Bobert");

// console.log(bobert);
// "Bobert";


// Console: 



// "Bobert"

function sayNameIsCool(name){
  return name + " is cool";
}


const bobertIsCool = sayNameIsCool("Bobert");


console.log(bobertIsCool)
// Console: "Bobert is cool"



function isGreaterThanTen(number){
  
  if (number > 10){
    return true; 
  } else {
    return false;
  }
  
}

console.log(isGreaterThanTen(11));
//true
const isElevenGreaterThanTen = isGreaterThanTen(11)

console.log(isElevenGreaterThanTen)
// true


function firstItemOfArray(arrUno){
  return arrUno[0];
}

const fruits = ["apples", "oranges"];


const firstFruit = firstItemOfArray(fruits);


console.log(firstFruit);
console.log(firstItemOfArray(fruits))


// console: "apples"

const Bobert = {
  id: 1,
  name: "Bobert"
}

const Alan = {
  id: 2,
  name: "Alan"
}

function getUserId(user){
  return user.id
}


const bobertsId = getUserId(Bobert);
//1
const alansId = getUserId(Alan);
//2






function getEvenNumbers(arrayOfNumbers){
  // [2,4,6,8,10];
  const result = [];
  
  for (let i = 0; i < arrayOfNumbers.length; i++){
    const currentNumberOfArray = arrayOfNumbers[i];
    
    if (currentNumberOfArray % 2 === 0){
      result.push(currentNumberOfArray);
    }
  }
  
  return result;
}


const evenNumbers = getEvenNumbers([1,2,3,4,5,6,7,8,9,10]); // [2,4,6,8,10]

console.log(evenNumbers);

// [2,4,6,8,10]








function addTwo(number){
  return number + 2;
}

addTwo(9) // 11;

addTwo(10) // 12;

addTwo('Hi') // 'Hi2'

const twelve = addTwo(10);

const ten = addTwo(8);

console.log(twelve + ten) // 22;









