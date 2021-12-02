const httpsPromise = require('../httpsPromise').default

httpsPromise('/2021/day/1/input').then(data => calculateResult(data))

const calculateResult = data => {
  const integerArrayOfDepthMeasures = data.map(x => parseInt(x))

  const resultTaskOne = integerArrayOfDepthMeasures.reduce(countDepthMeasures, 0)
  const resultTaskTwo = integerArrayOfDepthMeasures.reduce(countSlidingWindowOfDepthMeasures, 0)

  printResult('task one result', resultTaskOne)
  printResult('task two result', resultTaskTwo)
}

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
