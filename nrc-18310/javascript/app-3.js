"use strict";

console.log('# Strings');

const string1 = "Esto es una cadena\"";
const string2 = String('Esto es una cadena"');
const string3 = new String("Esto es una cadena de caracteres");
console.log(string1);
console.log(string2);
console.log(string3);

console.log('##############');

const string4 = 'Esto es otra cadena';
console.log(string4);
console.log(string4.length);
console.log(string4.indexOf('es'));
console.log(string4.includes('cadena'));

console.log('##############');

const stringa = 'cadena a';
const stringb = 'cadena b';
console.log(stringa.concat(stringb));
console.log(stringa.concat(' más otra candena c'));
console.log('cadena c ' + stringa + ' ' +  stringb);
console.log('cadena c', stringa, stringb);
console.log(`cadena c ${stringa} ${stringb}`);

console.log('##############');

let bigstring = '                        Cadena con muchos espacios   ';

console.log(bigstring);
console.log(bigstring.length);

console.log(bigstring.trimStart());
console.log(bigstring.trimEnd());

const bigstring2 = '                        Cadena con muchos espacios   ';
console.log(bigstring2.trimStart().trimEnd());

const bigstring3 = '                        Cadena con muchos espacios   ';
console.log(bigstring3.trim());

console.log('##############');

const string5 = 'JavaScript is the world\'s most popular programming language';

console.log(string5);

console.log(string5.replace("JavaScript", 'JavaPRO'));

console.log(string5.slice(0, 10));
console.log(string5.slice(8));

console.log(string5.substring(0, 10));

const usuraio = "Cadena 12345";
console.log(usuraio.substring(7,8));
console.log(usuraio.charAt(0));

console.log('##############');

const string6 = 'is the world\'s most popular programming language ';

const text = ' JavaScript'.repeat(3);
console.log(text);
console.log(`${text} ${string6}`);

console.log('##############');

const string7 = 'JavaScript is the world\'s most popular programming language';
console.log(string7.split(" "));

const string8 = 'Leer, caminar, escribir, caminar, aprender a programar';
console.log(string8.split(", "));

const string9 = "Javascript #JSModerno";
console.log(string9.split('#'));

console.log('##############');

const string10 = 'JavaScript is the world\'s most popular programming language ';

console.log(string10.toUpperCase());
console.log(string10.toLowerCase());

const numtostr = 300;
console.log(numtostr);
console.log(numtostr.toString());
