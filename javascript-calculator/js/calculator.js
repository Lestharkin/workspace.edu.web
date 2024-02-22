const calculator = {
  memory: {
    array: [],
    push: function (value) {
      this.array.push(value);
    },
    pop: function () {
      return this.array.pop();
    },
    clear: function () {
      this.array = [];
    },
    peek: function () {
      return this.array[this.array.length - 1];
    },
    isEmpty: function () {
      return this.array.length === 0;
    }
  },
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  sqrt: function (a) {
    return Math.sqrt(a);
  },
  square: function (a) {
    return Math.pow(a, 2);
  },
  inverse: function (a) {
    return 1 / a;
  },
  percent: function (a) {
    return a / 100;
  }
}

const display = {
  limit: 10,
  nchar: 0,
  content: document.getElementById('display'),
  clear: function () {
    this.content.innerHTML = '';
    this.nchar = 0;
  },
  go: function () {
    return this.nchar < this.limit;
  },
  validatePoint: function (key) {
    return this.content.innerHTML.search(/[.]/) !== -1 && key === '.';
  },
  addKey: function (key) {
    if (this.go()) {   
      if (this.validatePoint(key)) return;
      if (this.content.innerHTML === '0'&& key !== '.'){
        this.content.innerHTML = '';      
      }
      this.content.innerHTML += key;
      this.nchar++;
    }
  },
}

function addKeyDisplay(key) {
  display.addKey(key);
}

