// ARRAY
let tableau = [1, 10, 15, 9, 3]
console.log(tableau[0]) // le premier index d'un tableau est 0
console.log(tableau[4])

const [isOpen, setIsOpen] = useState(false)
// équivalent à
// const returnOfUseState = useState(false)
// const isOpen = returnOfUseState[0]
// const setIsOpen = returnOfUseState[1]
