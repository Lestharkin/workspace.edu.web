const btnReset = document.createElement("button")

btnReset.setAttribute("type", "reset")
btnReset.setAttribute("class", "btn btn-secondary")
btnReset.textContent = "Reset"

const btns = document.getElementById("btns")

btns.appendChild(btnReset)