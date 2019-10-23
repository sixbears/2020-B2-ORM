const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let gain = 0
    let classement = parseInt(input[0])
    let avancee = ['0','0']
    console.log(classement)
    for (i = 1; i < input.length ; i++) {
      avancee = input[i].split(" ")
      classement += parseInt(avancee[0]) - parseInt(avancee[1])
    }
    // a partir d'ici les console log ne marche plus

    if (classement <= 100) {
      gain = 1000
    }
    else if (classement <= 10000) {
      gain = 100
    }
    else {
      gain = 'KO'
    }
    return gain

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