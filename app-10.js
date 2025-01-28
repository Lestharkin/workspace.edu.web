const board = [];
const SIZE = 4

function fill(matrix, rows, columns) {
  for(let i = 0; i < rows; i++){
    const array =[]
     for(let j = 0; j < columns; j++){
       array.push('x');
     }
     matrix.push(array);
   };
}

function print(matrix) {
  for(let i = 0; i < matrix.length; i++){
    let line = ''
     for(let j = 0; j < matrix[i].length; j++){
       line = line + matrix[i][j] + ' ';
     }
      console.log(line);
   };
}

const nMines = Math.floor(Math.random() * (SIZE*SIZE/2)) + 1;
const fillMines = (matrix, n) => {
  for(let i = 0; i < n; i++){
    const x = Math.floor(Math.random() * SIZE);
    const y = Math.floor(Math.random() * SIZE);
    matrix[x][y] = 'M';
  }
}
fill(board, SIZE, SIZE);
fillNines(board, nNimes);

print(board);


