import getData, { sum } from './data.js'

const obj = await getData()
console.log(obj)

console.log(sum(1, 2))