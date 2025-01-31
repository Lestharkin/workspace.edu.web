const board = [];

const dim = {
  rows: 4,
  columns: 4,
  length: () => dim.rows * dim.columns
}

function initBoard() {
  for (let i = 0; i < dim.rows; i++) {
    let row = [];
    for (let j = 0; j < dim.columns; j++) {
      row.push('x');
    }  
    board.push(row);
  }
}

function showBoard() {
  for (let i = 0; i < dim.rows; i++) {
    let line = '';
    for (let j = 0; j < dim.columns; j++) {
      line += board[i][j] + ' ';
    }  
    console.log(line);
  }
}

const nBom = () => Math.floor(Math.random() * (dim.length() / 2));

function putBombs() {
  let n = nBom();
  for (let i = 0; i < n; i++) {
    let row = Math.floor(Math.random() * dim.rows) + 1;
    let column = Math.floor(Math.random() * dim.columns) + 1;
    board[row][column] = 'B';
  }
}


// Main
initBoard();
putBombs();
showBoard();
console.log(nBom());