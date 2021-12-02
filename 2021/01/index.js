const https = require('https')
const config = require('../config').default

const handleResponse = (response) => {
let list = ''

response.on('data', data => list += data)
response.on('end', () => calculateResult(list))
}

https.get(config('/2021/day/1/input'), handleResponse)
     .on('error', error => console.log('something went wrong', error))

const calculateResult = data => {
  const arrayOfDepthMeasures = getArrayFromString(data)
  const integerArrayOfDepthMeasures = arrayOfDepthMeasures.map(x => parseInt(x))

  const resultTaskOne = integerArrayOfDepthMeasures.reduce(countDepthMeasures, 0)
  const resultTaskTwo = integerArrayOfDepthMeasures.reduce(countSlidingWindowOfDepthMeasures, 0)

  printResult('task one result', resultTaskOne)
  printResult('task two result', resultTaskTwo)
}

const getArrayFromString = (values) => values.split(/\n/)

const countDepthMeasures = (previousCount, currentDepth, currentIndex, depthMeasurements) => {
  if ( currentDepth < depthMeasurements[currentIndex +1] ) {
    return ++previousCount
  }
  return previousCount
}

const countSlidingWindowOfDepthMeasures = (counter, _, currentIndex, depthMeasurements) => {
  if (currentIndex + 3 > depthMeasurements.length) {
    return counter
  }

  const firstWindow = getDepthWindowSum(depthMeasurements, currentIndex)
  const secondWindow = getDepthWindowSum(depthMeasurements, currentIndex+1)

  return firstWindow < secondWindow ? counter + 1 : counter
}

const getDepthWindowSum = (array, index) => array[index] + array[index+1] + array[index+2]

const printResult = (explanation, result) => {
  console.log(`${explanation}: ${result}`)
}
