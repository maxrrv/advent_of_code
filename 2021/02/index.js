const httpsPromise = require('../httpsPromise').default

httpsPromise('/2021/day/2/input')
  .then(data => {
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

      console.log(direction, value)
    })
    console.log({forward, depth})
    console.log(forward * depth)

  })

//todo split each entry into text and value
//depending on the text, we want to increment forward movement or increment/decrement depth
//when we are done, we want to multiply both values
