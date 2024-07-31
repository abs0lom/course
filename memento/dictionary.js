// DICTIONNARY
let userDictionary = {
  pseudo: "GreG",
  age: 30,
  isConnected: true,
  keyToPrint: "une clé",

  sayHi: function() { // une fonction anonyme stockée dans un dictionnaire
    console.log("Hi !")
  },

  subDictionnary: { // un dictionnaire dans un dictionnaire !
    subKey: "", // de la dictionnaireception !!
  },
}

userDictionary.anotherKey = "another value" // clé rajouté à postériori

console.log(userDictionary.pseudo) // clé pseudo de l'objet userDictionary

console.log(userDictionary.keyToPrint) // clé keyToPrint de l'objet userDictionary

console.log(userDictionary["isConnected"]) // clé "isConnected" de l'objet userDictionary

let keyToPrint = "isConnected"
console.log(userDictionary[keyToPrint]) // variable keyToPrint permettant d'accéder à la clé "isConnected" de l'objet userDictionary

userDictionary.sayHi()

console.log(userDictionary.anotherKey)

const age = userDictionary.age

age + age

const { pseudo, isConnected } = userDictionary
// équivalent à
// const pseudo = userDictionary.pseudo
// const isConnected = userDictionary.isConnected

console.log("Bonjour " + pseudo + " ! Tu t'appelles bien " + pseudo + " ?");