import ButtonComponent, { ButtonType } from './ButtonComponent.js';
export default class SuperButtonComponent extends ButtonComponent {
    constructor(text, fn, fn2, type) {
        super(text, fn, type);
        this.button.addEventListener('mouseover', fn2);
    }
}
//# sourceMappingURL=superButtonComponent.js.map