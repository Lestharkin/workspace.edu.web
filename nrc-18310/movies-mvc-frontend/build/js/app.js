import Index from './index/Index.js';
const p = document.createElement('p');
p.innerHTML = 'Hello, world!';
const index = new Index();
index.init([p]);
