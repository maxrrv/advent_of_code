const httpsPromise = require('../httpsPromise').default
const printResult = require('../prettyPrint').printResult

const solutionTaskOne = (data) => {
  let forward = 0
  let depth = 0

  data.map(entry => {
    let [direction, value] = entry.split(' ')
    value = parseInt(value)

    if(direction === 'forward') {
      forward += value
    }
    if(direction === 'down') {
      depth += value
    }
    if(direction === 'up') {
      depth -= value
    }
  })

  printResult("Forward * Depth: ", forward*depth)
}

const solutionTaskTwo = (data) => {
  let forward = 0
  let aim = 0
  let depth = 0

  data.map(entry => {
    let [direction, value] = entry.split(' ')
    value = parseInt(value)

    if(direction === 'forward') {
      forward += value
      depth += aim * value
    }
    if(direction === 'down') {
      aim += value
    }
    if(direction === 'up') {
      aim -= value
    }
  })

  printResult("Forward * Depth: ", forward*depth)
}

httpsPromise('/2021/day/2/input')
  .then(solutionTaskTwo)
