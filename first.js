const nameOne = "Ulysses";
const nameTwo = "Hercules";
const sayHi = nameOne + ", " + nameTwo + " Hello";
console.log(sayHi);
const sayHiAgain = `${nameOne} and ${nameTwo} rule!`; 



window.onload=function(){
    const textElement = document.getElementById("text");

console.log(textElement);

textElement.innerText = sayHiAgain
textElement.style.color = "red"

}