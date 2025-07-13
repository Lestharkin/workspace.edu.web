import readline from "readline/promises";

const prompt = async (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await rl.question(message);

  rl.close();
  return answer;
};

let board = []
const db = []
const SIZE = {
  rows: 4,
  columns: 4,
  length: () => SIZE.rows * SIZE.columns
} 
const nMines = Math.floor(Math.random() * (SIZE.length() / 2)) + 1


async function main () {
  console.log('## Minesweeper ##')

  fill(board, SIZE.rows, SIZE.columns)
  fill(db, SIZE.rows, SIZE.columns)
  fillMines(db, nMines)
  let option = 0
  await menu(option)

}

const fill = (matrix, rows, columns) => {
  for (let i = 0; i < rows; i++) {
    matrix[i] = []
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = 'x'
    }
  };
}

const fillMines = (matrix, n) => {
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * SIZE.rows)
    const y = Math.floor(Math.random() * SIZE.columns)
    matrix[x][y] = 'M'
  }
}

async function menu (option) {
  while (option !== 2) {
    print(board)
    console.log('1. Play')
    console.log('2. Exit')
    option = await prompt('Choose an option: ')

    switch (option) {
      case '1':
        console.log('Selected Play')
        break
      case '2':
        return
      default:
        console.log('Invalid option')
    }
  }
}

function print (matrix) {
  for (const row of matrix) {
    let line = ''
    for (const cell of row) {
      line = line + cell + ' '
    }
    console.log(line)
  };
}

main();



