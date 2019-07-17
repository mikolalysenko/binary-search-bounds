var bounds = require('../search-bounds')

//Create an array
var array = [1, 2, 3, 3, 3, 5, 6, 10, 11, 13, 50, 1000, 2200]
console.log({array})

//Print all elements in array contained in the interval [3, 50)
console.log(
  array.slice(
    bounds.ge(array, 3),
    bounds.lt(array, 50)))

//Test if array contains the element 4
console.log('indexOf(6)=', bounds.eq(array, 6))
let index =  bounds.eq(array, 4)
console.log('indexOf(4)=', index)

function insert (array, value) {
  let index = bounds.eq(array,value)
  console.log({index})
  if (index < 0) array.splice(-index-1,0,value)
  else array.splice(index,0,value)
}
console.log('Insert')
insert(array, 4)
console.log({array})

insert(array, 4)
insert(array, 4)
insert(array, 4)
insert(array, 0)
insert(array, 12)
insert(array, 200)
insert(array, 12200)
console.log({array})
