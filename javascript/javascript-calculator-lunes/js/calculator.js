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
    isEmpty: function () {
      return this.array.length === 0;
    },
    peek: function () {
      return this.array[this.array.length - 1];
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
  percent: function (a, b) {
    return (a / 100) * b;
  },
  inverse: function (a) {
    return 1 / a;
  }
}

const display = {
  content: document.getElementById('display'),
  limit: 10,
  nchar: 0,
  go: function () {
    return this.nchar < this.limit;
  },
  add: function (key) {
    if (this.go()) {
      if (key === 'sign') {
        this.content.innerHTML = eval(this.content.innerHTML) * -1;
        return;
      }
      if (this.content.innerHTML.search(/[.]/) !== -1 && key === '.') {
        return;
      }
      if (this.content.innerHTML === '0' && key !== '.') {
        this.content.innerHTML = '';
      }
      this.content.innerHTML += key;
      this.nchar++;
    }
  }
}

function addKeyDisplay(key) {
  display.add(key);
}