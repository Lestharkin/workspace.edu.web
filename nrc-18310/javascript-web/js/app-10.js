
/*
const header = document.querySelector('h1')
console.log(header.style)

header.style.backgroundColor = 'red'
header.style.fontFamily = 'Arial'
header.style.textTransform = 'uppercase'


const card = document.querySelector('.card')
card.classList.add('new-class', 'onew-class')
card.classList.remove('card')
console.log(card.classList)

const navBar = document.querySelector('.navbar')
console.log(navBar)
console.log(navBar.childNodes) // agrega text
console.log(navBar.children)
console.log(navBar.firstElementChild)
console.log(navBar.lastElementChild)
console.log(navBar.children[0].nodeName) // tag
console.log(navBar.children[0].children[0].nodeName) // tag
console.log(navBar.children[0].nodeType) // thttps://www.w3schools.com/jsref/prop_node_nodetype.asp
*/
const card = document.querySelector('.card')
card.children[1].children[1].textContent = 'Nuevo texto usando el DOM'
console.log(card.children[1].children[1].textContent)

// hijo al padre
console.log(card.parentNode)
console.log(card.parentElement.parentElement.parentElement)

// hermanos
console.log(card.nextElementSibling)
console.log(card.nextElementSibling.nextElementSibling)

// hermano previo
const otherCard = document.querySelector('.card:nth-child(2)')

console.log(otherCard)
console.log(otherCard.previousElementSibling)

otherCard.remove()
const test = document.querySelector('.card:nth-child(2)')
console.log(test)

console.log(test.children)

test.removeChild(test.children[1])

console.log(test.children);

