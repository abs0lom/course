
// IF … ELSE
if (true) {

} else {

}

let maCondition = true

if (maCondition) {

}

let age = 30

if (age >= 18) {
  console.log("be my guest")
} else {
  console.log("you're underage")
}

let isOver18 = age >= 18

if (isOver18) {

} else {

}

while (/* CONDITION */ false) {

}

let growingAge = 0

while (growingAge < 18) {
  console.log("Happy birthday !!")
  growingAge = growingAge + 1
}

console.log("you're not underage anymore.")

for (let counter = 0; counter < 18; counter++) {
  console.log("Happy birthday !!")
}

console.log("you're not underage anymore.")

let numberToIncrement = 0

numberToIncrement = numberToIncrement + 1

numberToIncrement += 1

numberToIncrement++

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