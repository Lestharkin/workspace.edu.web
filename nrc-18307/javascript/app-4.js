"use strict";

console.log('# Numbers');

const numero1 = 20;
const numero2 = "20";
console.log('---');

console.log(numero1);
console.log(numero2);

const numero3 = 20.20;
const numero4 = .102030;
const numero5 = -20;
console.log(numero3);
console.log(numero4);
console.log(numero5);

const numero6 = new Number(80);
console.log(numero6);
console.log('---');

const n1 = 30;
const n2 = 20;

let resultado;

resultado = n1 + n2;
console.log(resultado);
resultado = n1 - n2;
console.log(resultado);
resultado = n1 * n2;
console.log(resultado);
resultado = n1 / n2;
console.log(resultado);
resultado = n1 % n2;
console.log(resultado);
console.log('---');


resultado = Math.PI;

resultado = Math.round(2.8);
console.log(resultado);
resultado = Math.round(2.2);
console.log(resultado);
resultado = Math.round(2.6);
console.log(resultado);
resultado = Math.round(2.5);
console.log(resultado);
resultado = Math.round(2.4);
console.log(resultado);
console.log('---');

resultado = Math.ceil(2.1);
console.log(resultado);
resultado = Math.floor(2.9);
console.log(resultado);
resultado = Math.sqrt(144);
console.log(resultado);
resultado = Math.abs(-500);
console.log(resultado);
resultado = Math.pow(8, 3);
console.log(resultado);
resultado = Math.min(3, 5, 12, -1);
console.log(resultado);
resultado = Math.max(3, 5, 12, -1);
console.log(resultado);
resultado = Math.random();
console.log(resultado);
resultado = Math.min(3,5,12,-1);
console.log(resultado);
resultado = Math.floor( Math.random() * 30 );
console.log(resultado);
console.log('---');

let res;
res = 20 + 30 * 2;
console.log(res);
res = (20 + 30) * 2;
console.log(res);
res = (20 + 30 + 40 + 50 +60) * 0.2;
console.log(res);
res = (20 + 30) * 1.16;
console.log(res);
console.log('---');

res = 5;
console.log(res);
res++;
console.log(res);
++res;
console.log(res);
res--;
console.log(res);
--res;
console.log(res);
res += 3;
console.log(res);
res -= 3;
console.log(res);
console.log('---');

const n61 = "20";
const n62 = "20.2";
const n63 = "Uno";
const n64 = 20;

console.log(n61);
console.log(typeof n61);
console.log(Number.parseInt(n61));
console.log(Number.parseFloat(n62));
console.log(Number.parseInt(n63));
console.log(Number.isInteger(n64));
console.log(Number.isInteger(n63));
console.log('---');