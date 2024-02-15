const form1 = document.querySelector('#form-1');

form1.addEventListener('submit', valForm1);

function valForm1 (e) {
    // evita el "action"
    e.preventDefault();
    const con = "hola";
    const passwd = e.target[1].value;
    if(passwd !== con) {
      const div = document.createElement('div');
      div.classList.add('msn');
      const h1 = document.createElement('h1');
      h1.textContent = "Error";
      div.appendChild(h1);
      document.body.appendChild(div);
    }
    
}