// on importe le code d'un project externe grâce à require
const dateFns = require("date-fns")

const maDate = new Date() // on va dire que c'est une fonction, tkt
const maDateFormatee = dateFns.format(maDate, "dd/MM/yyyy HH:mm")
const maDateFormateeBis = dateFns.format(maDate, "dd LLLL yyyy à HH 'h' mm")

console.log(maDateFormatee)
console.log(maDateFormateeBis)
