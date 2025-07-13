"use strict";

console.log('# Spread Operator');

const meses = ['Enero', 'Febrero', 'Marzo', 'abril', 'mayo'];

console.table(meses);
console.table(meses.length);

for (let index = 0; index < meses.length; index++) {
    console.log(index);
    console.log(meses[index]);
}

// Spread Operator

console.log(...meses);

const bag  = [];

const producto1 = {
    name: "Moinitor Asus",
    precio: 200,
}

const producto2 = {
    name: "Celular",
    precio: 800,
}

const producto3 = {
    name: "Teclado",
    precio: 50,
}

let resultado = [...bag, producto1];

resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);

const shopcar = [
    { nombre: 'Monitor HP', precio: 700},
    { nombre: 'Televisión LG', precio: 1200},
    { nombre: 'Tablet Samsung', precio: 2000},
    { nombre: 'Audifonos Buen sonido', precio: 300},
    { nombre: 'teclado gammer', precio: 400},
    { nombre: 'Celular Iphone', precio: 18000},
];

for (let index = 0; index < shopcar.length; index++) {
    console.log(shopcar[index]);
}

for (let index of shopcar) {
    console.log(shopcar[index]);
}

for (let itemcar in shopcar) {
    console.log(itemcar);
}

const nfor = shopcar.forEach((producto) => {
    return (`${producto.nombre} - Precio: ${producto.precio}`);
});

const nmap = shopcar.map((producto) => {
    return (`${producto.nombre} - Precio: ${producto.precio}`);
});


console.log(nmap);
console.log(nfor);


const item = {
    nombre: "Monitor lg 27'",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '2Kg',
            medida: '1m',
        },
        fabricacion: {
            pais: 'Colombia'
        }
    }
}

console.log(item);

const { nombre, informacion, informacion: { fabricacion: { pais } } } = item;

console.log(nombre);
console.log(informacion);
console.log(pais);
