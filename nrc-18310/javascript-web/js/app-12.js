document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento Listo');
});

const navBar = document.querySelector('.navbar');

navBar.addEventListener('click', () => {
    console.log('click en nav');    
});

navBar.addEventListener('dblclick', () => {
    console.log('dblclick en nav');    
});

navBar.addEventListener('mousedown', () => {
    console.log('mousedown en nav');    
});

navBar.addEventListener('mouseup', () => {
    console.log('mouseup en nav');    
});
const container = document.querySelector('.container');

container.addEventListener('mouseenter', () => {
    console.log('entrando en la container');

    container.style.backgroundColor = 'white';
});

container.addEventListener('mouseout', () => {
    console.log('saliendo en la container');

    container.style.backgroundColor = 'transparent';
});

const search = document.querySelector('.me-sm-2');

search.addEventListener('keydown', () => {
    console.log('keydown');
});

search.addEventListener('keyup', () => {
    console.log('keyup');
});

search.addEventListener('blur', () => {
    console.log('salir del elemento');
});

search.addEventListener('copy', () => {
    console.log('ctrl + C');
});

search.addEventListener('cut', () => {
    console.log('ctrl + x');
});

search.addEventListener('paste', () => {
    console.log('ctrl + v');
});

search.addEventListener('input', (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.value);
    if(e.target.value === '') {
        console.log('esta vacio');
    }
});