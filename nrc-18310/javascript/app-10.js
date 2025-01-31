const board = [];

const dim = {
  rows: 4,
  columns: 4,
  length: () => dim.rows * dim.columns
}

for (let i = 0; i < dim.rows; i++) {
  let row = [];
  for (let j = 0; j < dim.columns; j++) {
    row.push('x');
  }  
  board.push(row);
}

console.table(board);