export default class IndexView {
    constructor() {
        this.h1 = document.getElementById('title');
    }
    init(data) {
        data.forEach((item) => {
            this.h1.innerHTML += item;
        });
        const div = document.createElement('div');
        div.appendChild(this.h1);
        div.classList.add('container');
        document.body.appendChild(div);
    }
}
