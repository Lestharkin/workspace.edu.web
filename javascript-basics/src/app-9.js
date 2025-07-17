import data, { sum, sub } from './data.js'

const obj = await data()
console.log(obj)

console.log(sum(1, 2))
console.log(sub(2, 1))