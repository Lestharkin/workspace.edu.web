export default class IndexView {
    main;
    constructor() {
        this.main = document.querySelector('main') ?? document.createElement('main');
    }
    getMainHTML = () => this.main;
    render = () => { };
}
