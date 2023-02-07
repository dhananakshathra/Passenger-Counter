let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;

console.log(saveEl)

function Increament(){

  count = count + 1;
  countEl.innerText = count

}

function save() {

  let countStr = count +   "  -  "

  saveEl.innerText = saveEl.innerText + countStr

  countEl.textContent = 0
  count = 0

  console.log(count)
}








/************ */

//let count = 5 / 10

//console.log(count)

//1. Create two varialbles, myAge and humanDogRatio
//2. Multiply the two together and store the result in myDogAge
//3. Log myDogAge to the console

//let myAge = 28

//let humanDogRatio = 7

//let myDogAge = myAge * humanDogRatio

//console.log(myDogAge)



