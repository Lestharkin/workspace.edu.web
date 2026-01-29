"use strict"

let newVar = 'esta es una variable nueva'
console.log(newVar)

const newConst = 'esta es una constante u operador de referencia'
console.log(newConst)

const object = {
    nombre: "pepe",
    apellido: "Pérez",
}

console.log(`${object.nombre} ${object.apellido}`)

let variable = 123
console.log(variable)
variable = 'abc'
console.log(variable)
variable = "cadenas"
console.log(variable)
variable = true
console.log(variable)
variable = false
console.log(variable)

const constante = 'esto es constante'
// constante = 123;
console.log(constante)

object.nombre = "juan"
console.log(object)

function hola () {
    console.log("ok")
    console.log("Hola")
    console.log("Mundo")
}

hola()

const anonymous = (function () {
    console.log("anonymous function")
})()

anonymous()

const arrowFn_1 = a => "Arrow Function"

console.log(arrowFn_1())

const arrowFn_2 = (param1, paramN) => param1 + paramN
console.log(arrowFn_2(1, 2))
