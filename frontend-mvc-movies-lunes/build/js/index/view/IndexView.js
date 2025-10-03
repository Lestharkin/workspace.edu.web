export default class IndexView {
    body;
    main;
    constructor() {
        this.body = document.body;
        this.main = this.body.querySelector('main');
    }
    getMainHTML = () => this.main;
    initComponent = () => { };
}
