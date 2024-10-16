
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

// BEURK...
"1" == 1 // true

// YEAAH !
"1" === 1 // false

let variableToAssign = null

if (maCondition) {
  variableToAssign = "toto";
} else {
  variableToAssign = "tata";
}

// ternaire : un si…sinon qui assigne une valeur à une variable
const constanteToAssign = age >= 18 ? "toto" : "tata";