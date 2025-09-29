export default class IndexView {
    body;
    constructor() {
        console.log('IndexView');
        this.body = document.body;
    }
    initComponent = () => {
        console.log('initComponent IndexView');
    };
    render = () => {
        this.body.innerHTML += `<h1>Hello, World!</h1>`;
    };
}
