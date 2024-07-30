const dateFns = require("date-fns")

const maDate = new Date()
const maDateFormatee = dateFns.format(maDate, "dd/MM/yyyy HH:mm")
const maDateFormateeBis = dateFns.format(maDate, "dd LLLL yyyy à HH 'h' mm")

console.log(maDateFormatee)
console.log(maDateFormateeBis)
