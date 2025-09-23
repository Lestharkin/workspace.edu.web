export default class IndexView {
    index;
    constructor() {
        this.index =
            document.querySelector('body') ?? document.createElement('body');
    }
    render = () => {
        this.index.innerHTML += `<h1>Index View</h1>`;
    };
}
