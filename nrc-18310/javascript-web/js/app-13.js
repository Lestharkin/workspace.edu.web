const form1 = document.querySelector('#form-1');

form1.addEventListener('submit', valForm1);

function valForm1 (e) {
    // evita el "action"
    e.preventDefault();

    console.log(e);
    console.log(e.target.method);
    console.log(e.target.action);
}

// scroll-events
// event Bubbling e.stopPropagation();
// e.target