const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let nbCarton = input[0]
    let poid = 0
    let nb = 0
    let compteur = 0
    
    while (nbCarton > 0) {
      while (poid < 100) {
        for (i = 1 ; i < input.length ; i++) {
          poid += input[i]
          nb += 1
          console.log(poid)
          input.splice(i, i+1)
          console.log(input)
          i--
        }
      nbCarton -= nb
      compteur += 1
    }}
    return compteur


    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}