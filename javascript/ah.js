import { prompt } from "./app-8.js"
import fs from "node:fs"

const main = async () => {
  let control = true
  let op = 0
  while (control) {
    Banner()
    control = await menu()
    switch (op) {
      case "1":
        await game()
        break
      case "2":
        console.log("Saliendo del juego...")
        control = false
        break
      default:
        console.log("Opción no válida, intente de nuevo.")
    }
  }
}

function Banner () {
  console.log("Ahorcado")
}

const menu = async () => {
  console.log("1. Jugar")
  console.log("2. Salir")
  return await prompt("Seleccione una opción: ")
}

const game = async () => {
  console.log("Iniciando juego...")
  const word = getWord(await getData())
  printWord(word)
  prompt()
}

const printWord = (word) => {
  if (word) {
    console.log("No word provided")
  }
  word.split("").forEach(letter => {
    console.log("_ ")
  })
}

const getWord = (data) => {
  const index = Math.floor(Math.random() * data.length)
  return data[index]
}

const getData = async () => {
  const path = "./words.json"
  return JSON.parse(fs.readFileSync(path, 'utf8'))
}

await main()