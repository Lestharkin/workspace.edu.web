const link = document.createElement('a');

link.textContent = 'Nuevo link';

link.href = '/nuevo-link';

link.target = '_blank';

link.setAttribute('data-link', 'nuevo-link');

link.classList.add('btn');
link.classList.add('btn-primary');

const miFunction = () => alert("test");

link.onclick = miFunction;

console.log(link);

const navBarNav = document.querySelector('.navbar-nav');
// navBarNav.appendChild(link);
navBarNav.insertBefore(link, navBarNav.children[3]);

//Crear un card
const p1 = document.createElement('p');
p1.textContent = 'Texto 1';
p1.classList.add('alert', 'alert-info');

const p2 = document.createElement('p');
p2.textContent = 'Texto 2';
p2.classList.add('text-end');

const p3 = document.createElement('p');
p3.textContent = 'Texto 3';
p3.classList.add('text-center');

const info = document.createElement('div');
info.classList.add('info');

info.appendChild(p1);
info.appendChild(p2);
info.appendChild(p3);

const imagen = document.createElement('img');
imagen.src = 'img/bga.jpeg';
imagen.classList.add('img-fluid');
imagen.alt = 'Texto Altenativo';

imagen.addEventListener('click', miFunction);

const card = document.createElement('div');
card.classList.add('card');
card.classList.add('m-4');

card.appendChild(imagen);
card.appendChild(info);

console.log(card);

const cardContainer = document.querySelector('.card-container');

//cardContainer.appendChild(card);
cardContainer.insertBefore(card, cardContainer.children[1]);
