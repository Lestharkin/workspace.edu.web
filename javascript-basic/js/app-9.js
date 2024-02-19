const header = document.querySelector('.header h1');
console.log(header);

// The innerText property of the HTMLElement interface represents the rendered text content of a node and its descendants.
console.log(header.innerText);
/* The textContent property of the Node interface represents the text content of the node and its descendants.
textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements. */
console.log(header.textContent);
// Element.innerHTML returns HTML, as its name indicates.
console.log(header.innerHTML);
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext

console.log(document.querySelector('.header h1').innerHTML);

document.querySelector('.header h1').textContent = 'New heading';

const imagen = document.querySelector('.header img');
imagen.src = 'img/bga.jpeg';
