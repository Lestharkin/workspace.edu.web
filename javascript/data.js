import fs from 'fs';

const data = async  () => {
  return JSON.parse(fs.readFileSync('./data.json', 'utf8'));
}

const sum = (a, b) => a + b;

export default data;

export { sum };