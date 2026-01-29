import fs from 'node:fs'

const getData = async () => {
  return JSON.parse(fs.readFileSync('./data.json', 'utf8'))
}

const sum = (a, b) => a + b

export default getData

export { sum }