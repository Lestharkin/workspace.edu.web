export default class IndexView {
    main;
    constructor() {
        this.main = document.querySelector('main');
        if (!this.main) {
            this.main = document.createElement('main');
        }
    }
    init = (elements) => {
        elements.forEach((element) => {
            this.main.appendChild(element);
        });
    };
}
