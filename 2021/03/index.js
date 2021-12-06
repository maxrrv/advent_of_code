const { default: httpsPromise } = require('../httpsPromise')
const { debug, printResult } = require('../prettyPrint')

const solutionTaskOne = data => {
  let [gammaRate, epsilonRate] = getMaxMinPattern(data)
  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
}

const solutionTaskTwo = data => {
  let [oxygenPattern, co2Pattern] = getMaxMinPattern(data)

  const oxygenRating = filterByPattern(oxygenPattern, data)
  const co2Rating = filterByPattern(co2Pattern, data)

  return parseInt(oxygenRating, 2) * parseInt(co2Rating, 2)
}

const filterByPattern = (pattern, listToFilter) => {
  let list = listToFilter
  let index = 0

  while(list.length > 1) {
    list = list.filter(element => element[index] === pattern[index])
    index++
  }

  return list[0]
}

const getMajorityCount = (data, amountOfOnes) => amountOfOnes < Math.round(data.length/2) ? '0' : '1'
const getMinorityCount = (data, amountOfOnes) => amountOfOnes < Math.round(data.length/2) ? '1' : '0'

// while dataset.length > 1 do
// get dominant number in column x
// filter data by dominant number in column x

const getDominantNumberInColumn = (column, data) => {

}

const getMaxMinPattern = (itemList) => {
  maxPattern = ''
  minPattern = ''
  for(let binaryIndex = 0; binaryIndex < itemList[0].length; binaryIndex++) {
    const countAllOnesInColumn = (countOfOnes, currentBinaryString) => {
      return parseInt(currentBinaryString[binaryIndex]) === 1 ? ++countOfOnes : countOfOnes
    }

    const amountOfOnes = itemList.reduce(countAllOnesInColumn, 0)

    maxPattern += getMajorityCount(itemList, amountOfOnes)
    minPattern += getMinorityCount(itemList, amountOfOnes)
  }
  return [maxPattern, minPattern]
}

httpsPromise('/2021/day/3/input')
  .then(solutionTaskTwo)
  .then(result => printResult('result: ', result))

module.exports.solutionTaskTwo = solutionTaskTwo
