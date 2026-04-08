const email = document.getElementById("email")

email.addEventListener("mouseover", overEmail)

console.log(email.getAttribute("data"))

const user = {
  name: "yo",
  password: "123"
}


function overEmail () {
  const div = document.createElement("div")
  div.classList.add("alert", "alert-info")

  const p = document.createElement("p")

  p.textContent = "Texto"

  div.appendChild(p)

  const container = document.querySelector(".container-fluid")

  container.appendChild(div)
}



/*

function init () {
  const ele = document.getElementsByClassName("clase")

  const uId = document.getElementById("uId")

  uId.textContent = "JavaScript"

  uId.innerHTML += " <span class='text-danger'>Super</span>"

  console.log(ele)

  console.log(uId)

  const tag = document.getElementsByTagName("h2")

  console.log(tag)


init()
}

function fillInputs () {
  const ele = document.querySelectorAll("input")

  for (let item of ele) {
    console.log(item.value = "Hello")
    item.classList.add("bg-success")
  }
}

const btn = document.querySelector("#form1 #btn")

btn.addEventListener("click", fillInputs)
*/