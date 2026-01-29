"use strict"

console.log('# Operators')

const num1 = 1000
const num2 = "1000"
const num3 = 3000

console.log(`Número 1 = ${num1}, Número 2 = ${num2}, Número 3 = ${num3}`)
console.log('---')
console.log(`Número 1 (${num1}) > Número 3 (${num3}) => ${num1 > num3}`)
console.log(`Número 3 (${num3}) > Número 1 (${num1}) => ${num3 > num1}`)
console.log(`Número 1 (${num1}) < Número 3 (${num3}) => ${num1 < num3}`)
console.log(`Número 3 (${num3}) < Número 1 (${num1}) => ${num3 < num1}`)
console.log('---')

const num21 = 1000
const num22 = "1000"
const num23 = 3000

console.log(`Número 1 (${num1}) == Número 3 (${num3}) => ${num1 == num3}`)
console.log(`Número 1 (${num1}) == Número 2 (String -> ${num2}) => ${num1 == num2}`)
console.log(`Número 1 (${num1}) == parseInt(Número 2 String -> (${num2})) => ${num1 == parseInt(num2)}`)
console.log(`Número 1 (${num1}) === Número 3 (${num3}) => ${num1 === num3}`)
console.log('---')
console.log(`typeof(Número 1 (${num1})) => ${typeof num1}`)
console.log(`typeof(Número 2 (${num2})) => ${typeof num2}`)
console.log('---')
console.log(`Número 1 (${num1}) != Número 2 (String -> ${num2}) => ${num1 != num2}`)
console.log(`Número 1 (${num1}) !== Número 2 (String -> ${num2}) => ${num1 !== num2}`)
console.log(`Número 1 (${num1}) !== Número 2 parseInt(Número 2 String -> (${num2})) => ${num1 !== parseInt(num2)}`)
console.log('---')

const password1 = "admin"
const password2 = "Admin"
console.log(`Password 1 = ${password1}, Password 2 = ${password2}`)
console.log(`Password 1 == Password 2 => ${password1 == password2}`)
console.log(`Password 1 === Password 2 => ${password1 === password2}`)
console.log(`Password 1 != Password 2 => ${password1 != password2}`)
console.log('---')

let varn
console.log(`varn => ${varn}`)
console.log(`typeof(varn) => ${typeof varn}`)
let varn2 = null
console.log(`varn2 => ${varn2}`)
console.log(`typeof(varn2) => ${typeof varn2}`)
console.log(`varn == varn2 => ${varn == varn2}`)
console.log(`varn === varn2 => ${varn === varn2}`)
console.log('---')
