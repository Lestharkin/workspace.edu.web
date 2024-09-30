import ContactTemplate from '../template/ContactTemplate.js';
export default class ContactView {
    selector;
    selectorName = 'contact';
    constructor() {
        this.selector = document.createElement('div');
    }
    init = () => {
        this.selector = document.querySelector(this.selectorName);
    };
    render = () => {
        this.selector.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'contact-form';
        div.innerHTML = ContactTemplate.create();
        this.selector.appendChild(div);
    };
}
