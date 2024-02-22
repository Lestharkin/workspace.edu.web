// ByClassName
const header = document.getElementsByClassName("header");
console.log(header);

const container = document.getElementsByClassName("container");
console.log(container);

const nav_item = document.getElementsByClassName("nav-item");
console.log(nav_item);

const does_not_exist = document.getElementsByClassName("does-not-exist");
console.log(does_not_exist);

// ById
const form = document.getElementById("idf-1");
console.log(form);

const form_does_not_exist = document.getElementById("form-does-not-exist");
console.log(form_does_not_exist);

// querySelector css

// solo el primero
const card = document.querySelector(".card");
console.log(card);

//selectores como css
const nav_item1 = document.querySelector(".collapse .nav-item");
console.log(nav_item1);

//seleccionar el segundo
const nav_item2 = document.querySelector(".collapse .nav-item:nth-child(2)");
console.log(nav_item2);

//seleccionar por id
const idf = document.querySelector("#idf-1");
console.log(idf);

//seleccionar por id
const idf1 = document.querySelector(".collapse #idf-1");
console.log(idf1);

//seleccionar por tag
const nav = document.querySelector("nav");
console.log(nav);

// querySelectorALL

const cards = document.querySelectorAll(".card");
console.log(cards);

const noExiste = document.querySelectorAll(".no-existe");
console.log(noExiste);

