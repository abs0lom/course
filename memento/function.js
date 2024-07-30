function doSomething() {

}

doSomething()

function addOne (numberToIncrement) {
  return numberToIncrement + 1
}

const two = addOne(1)
const three = addOne(2)

// f(x) = 3 * x + 2
// f(3) = 3 * 3 + 2
// f(3) = 11

function sayHiWithLabel() {
  console.log("Hi !");
}

sayHiWithLabel()

const sayHiWithVariable = function() {
  console.log("Hi !");
}

sayHiWithVariable()

const sayHiWithArrow = () => {
  console.log("Hi !");
}

sayHiWithArrow()

// "." = le dossier de mon fichier actuel
// "vegetable.js" = le fichier présent dans le dossier actuel à importer

// on récupère le dictionnaire des exports dans la variable "vegetable"
// le dictionnaire des exports contient la clé cutVegetable, donc "vegetable" contient la même chose.
const vegetable = require('./vegetable.js');

const slicedCarrot = vegetable.cutVegetable("carrot")
console.log(slicedCarrot)

const slicedEggplant = vegetable.cutVegetable("eggplant")
console.log(slicedEggplant)