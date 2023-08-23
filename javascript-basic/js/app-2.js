"use strict";

console.log('# Variables');

var oldVariable = 'esta es una variable vieja';
console.log('oldVariable => '+ oldVariable);

oldVariable = 20;
console.log('oldVariable => '+ oldVariable);

oldVariable = true;
console.log('oldVariable => '+ oldVariable);

var oldPrototype = 123, name = 'old', lastname = "varible";

console.log(name);


let vnueva = 'esta es una variable nueva';
console.log(vnueva);

const cnueva = 'esta es una constante u operador de referencia';
console.log(cnueva);

const object = {
    nombre: "pepe",
    apellido: "perez",
};

console.log(`${object.nombre} ${object.apellido}`);

let variable = 123;
console.log(variable);
variable = 'abc';
console.log(variable);
variable = "cadenas";
console.log(variable);
variable = true;
console.log(variable);
variable = false;
console.log(variable);

const constante = 'esto es constante';
// constante = 123;
console.log(constante);

object.nombre = "juan";
console.log(object);


function hola() {
    console.log("ok");
    console.log("Hola");
    console.log("Mundo");
}