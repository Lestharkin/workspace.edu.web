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
    addListeners = async (callback) => {
        const form = this.selector.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const controls = {
                name: form.querySelector('input[name="name"]'),
                email: form.querySelector('input[name="email"]'),
                message: form.querySelector('textarea[name="message"]')
            };
            const message = {
                name: controls.name.value,
                email: controls.email.value,
                message: controls.message.value
            };
            callback(message);
            Array.from(Object.values(controls)).forEach((control) => {
                control.value = '';
            });
            alert('Mensaje enviado');
        });
    };
}
