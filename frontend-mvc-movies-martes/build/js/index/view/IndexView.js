export default class IndexView {
    index;
    main;
    constructor() {
        this.index =
            document.querySelector('body') ?? document.createElement('body');
        this.main = document.querySelector('main') ?? document.createElement('main');
    }
    getMainHTML = () => this.main;
    render = () => {
        this.index.innerHTML += `<h1>Index View</h1>`;
    };
}
