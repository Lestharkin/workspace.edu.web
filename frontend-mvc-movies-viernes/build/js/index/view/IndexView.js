export default class IndexView {
    body;
    constructor() {
        this.body = document.body;
    }
    initComponent = () => {
        this.body.innerHTML += `<h1>Hello, World!</h1>`;
    };
}
