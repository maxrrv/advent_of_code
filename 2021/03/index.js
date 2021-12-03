const { default: httpsPromise } = require('../httpsPromise')
const { debug, printResult } = require('../prettyPrint')

const solutionTaskOne = data => {
  let gammaRate = ''
  let epsilonRate = ''

  const getMajorityCount = (data, amountOfOnes) => amountOfOnes < data.length/2 ? '0' : '1'
  const getMinorityCount = (data, amountOfOnes) => amountOfOnes < data.length/2 ? '1' : '0'

  for(let binaryIndex = 0; binaryIndex < data[0].length; binaryIndex++) {
    const countAllOnesInColumn = (countOfOnes, currentBinaryString) => {
      return parseInt(currentBinaryString[binaryIndex]) === 1 ? ++countOfOnes : countOfOnes
    }

    const amountOfOnes = data.reduce(countAllOnesInColumn, 0)

    gammaRate += getMajorityCount(data, amountOfOnes)
    epsilonRate += getMinorityCount(data, amountOfOnes)
  }

  printResult('result: ', parseInt(gammaRate, 2) * parseInt(epsilonRate, 2))
}

httpsPromise('/2021/day/3/input').then(solutionTaskOne)

