const user = {
  username: "yo",
  passwd: "yo2"
}

function load () {
  const btnReset = document.createElement("button")

  btnReset.setAttribute("type", "reset")
  btnReset.setAttribute("class", "btn btn-secondary")
  btnReset.textContent = "Reset"

  const btns = document.getElementById("btns")

  btns.appendChild(btnReset)

  const submit = document.getElementById("submit")
  submit.addEventListener("click", (event) => {
    event.preventDefault()

    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const x = document.querySelector("#emailHelp")

    if (email.value === user.username && password.value === user.passwd) {
      alert("Login successful")
    } else {
      x.classList.add("colorRojo")
    }
  })
}

window.onload = load


