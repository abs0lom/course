// DICTIONNARY
let userDictionary = {
  name: "GreG",
  age: 30,
  isConnected: true,
  keyToPrint: "une clé",
}

console.log(userDictionary.name) // clé name de l'objet userDictionary

console.log(userDictionary.keyToPrint) // clé keyToPrint de l'objet userDictionary

console.log(userDictionary["isConnected"]) // clé "isConnected" de l'objet userDictionary

let keyToPrint = "isConnected"
console.log(userDictionary[keyToPrint]) // variable keyToPrint permettant d'accéder à la clé "isConnected" de l'objet userDictionary
