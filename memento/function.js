function doSomething() {

}

doSomething()

function cutVegetable(vegetable) {
  const slicedVegetable = vegetable.split("")
  return slicedVegetable
}

const slicedCarrot = cutVegetable("carrot")
console.log(slicedCarrot)

const slicedEggplant = cutVegetable("eggplant")
console.log(slicedEggplant)

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