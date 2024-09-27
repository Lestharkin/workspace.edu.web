import ErrorTemplate from '../template/ErrorTemplate';
export default class ErrorView {
    selector;
    selectorName = 'error';
    constructor() {
        this.selector = document.createElement('div');
    }
    init = () => {
        this.selector = document.querySelector(this.selectorName);
    };
    render = () => {
        this.selector.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'error';
        div.innerHTML = ErrorTemplate.create();
        this.selector.appendChild(div);
    };
}
