const { solutionTaskTwo } = require('./index')
const { printTestResult } = require('../prettyPrint')

const data = [
'00100',
'11110',
'10110',
'10111',
'10101',
'01111',
'00111',
'11100',
'10000',
'11001',
'00010',
'01010',
]

const solutionTaskTwoShouldReturn230OnTestData = () => {
  const result = solutionTaskTwo(data)
  printTestResult(230, result)
}

solutionTaskTwoShouldReturn230OnTestData()

