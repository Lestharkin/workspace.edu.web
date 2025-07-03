export default class IndexView {
    main;
    constructor() {
        this.main = document.querySelector('main');
        if (!this.main) {
            this.main = document.createElement('main');
        }
    }
    init = (elements) => {
        console.log('IndexView initialized');
        elements.forEach((element) => {
            this.main.appendChild(element);
        });
    };
    render = () => { };
}
