function init () {
  const e = document.getElementsByClassName("form-label")

  for (let item of e) {
    item.textContent = "CAMBIAR"
  }

  const inputs = document.getElementsByTagName("input")

  for (let item of inputs) {
    item.value = "CAMBIAR"
  }

  const button = document.getElementById("submit")

  button.innerHTML = "CAMBIAR"
}

const button = document.getElementById("submit")

button.addEventListener("click", function () {
  init()
})

button.addEventListener("dblclick", function () {
  query()
})

function query () {
  const controls = document.querySelectorAll(".control .form-label")

  for (let item of controls) {
    item.style.backgroundColor = "red"
  }
}

function queryOne () {
  const control = document.querySelector(".control .form-label")

  control.style.backgroundColor = "red"

}

const control = document.querySelector("#password")

control.addEventListener("input", function () {
  console.log(control.value)
})