var bounds = require('../search-bounds')

// Create an array of objects
var creatures = [
  { legs: 8, name: 'spider' },
  { legs: 4, name: 'mouse' },
  { legs: 4, name: 'cat' },
  { legs: 2, name: 'Ben Franklin' },
  { legs: 4, name: 'table', isCreature: false },
  { legs: 100, name: 'centipede' },
  { legs: 4, name: 'dog' },
  { legs: 6, name: 'ant' }
]

// Sort the array by number of legs
function byLegs(a,b) { return a.legs - b.legs }
creatures.sort(byLegs)

// Find the next creature with more than 4 legs
console.log('What has more than 4 legs? Answer:', creatures[bounds.gt(creatures, {legs:4}, byLegs)])

let names = [
  'jan',
  'piet',
  'koos',
  'klaas',
  'alta',
  'kaspaas'
]
function nameSort(a,b) {
  return (a).localeCompare(b)
}
names.sort(nameSort)
console.log({names})

console.log('Who is before klaas?', names[ bounds.lt(names, 'klaas', nameSort)])
