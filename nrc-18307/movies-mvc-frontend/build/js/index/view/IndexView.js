export default class IndexView {
    main;
    constructor() {
        const main = document.querySelector('main');
        if (!main) {
            this.main = document.createElement('main');
        }
        this.main = main;
    }
    init = (elements) => {
        console.log('IndexView initialized');
        elements.forEach((element) => {
            this.main.appendChild(element);
        });
    };
    render = () => { };
}
