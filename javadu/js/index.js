const form = document.querySelector("#formulario1");
const button = document.querySelector("#button1");
//button.addEventListener('click', () => {form.submit();});

form.addEventListener('submit', valForm1)

function valForm1 (e) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // evita el "action"
  e.preventDefault();
  console.log("email: " + email);
  console.log("contraseña: " + password);
  alert("Formulario enviado");
}