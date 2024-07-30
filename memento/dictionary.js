// DICTIONNARY
let userDictionary = {
  name: "GreG",
  age: 30,
  isConnected: true,
  keyToPrint: "une clé",
  sayHi: function() { // une fonction anonyme stockée dans un dictionnaire
    console.log("Hi !")
  }
}

userDictionary.anotherKey = "another value" // clé rajouté à postériori

console.log(userDictionary.name) // clé name de l'objet userDictionary

console.log(userDictionary.keyToPrint) // clé keyToPrint de l'objet userDictionary

console.log(userDictionary["isConnected"]) // clé "isConnected" de l'objet userDictionary

let keyToPrint = "isConnected"
console.log(userDictionary[keyToPrint]) // variable keyToPrint permettant d'accéder à la clé "isConnected" de l'objet userDictionary

userDictionary.sayHi()

console.log(userDictionary.anotherKey)