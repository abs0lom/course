
function cutVegetable(vegetable) {
  const slicedVegetable = vegetable.split("")
  return slicedVegetable
}

// exports est un dictionnaire qui contient une clé par exportation (ici la clé cutVegetable)
exports.cutVegetable = cutVegetable // pas de parenthèses, donc on STOCKE la fonction, on ne l'execute pas.