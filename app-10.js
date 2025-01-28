const board = []
const SIZE = {
  rows: 4,
  columns: 4,
  length: () => SIZE.rows * SIZE.columns
} 
const nMines = Math.floor(Math.random() * (SIZE.length() / 2)) + 1

function main () {
  console.log('## Minesweeper ##')

  fill(board, SIZE.rows, SIZE.columns)
  fillMines(board, nMines)

  print(board)
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



