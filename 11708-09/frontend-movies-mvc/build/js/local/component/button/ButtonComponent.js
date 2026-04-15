export default class ButtonComponent {
    button;
    constructor(text, fn, type) {
        this.button = document.createElement('button');
        this.button.classList.add('btn', type);
        this.button.textContent = text;
        this.button.setAttribute('type', 'button');
        this.button.addEventListener('click', fn);
    }
    get() {
        return this.button;
    }
}
export var ButtonType;
(function (ButtonType) {
    ButtonType["primary"] = "btn-primary";
    ButtonType["secondary"] = "btn-secondary";
    ButtonType["success"] = "btn-success";
    ButtonType["danger"] = "btn-danger";
    ButtonType["warning"] = "btn-warning";
    ButtonType["info"] = "btn-info";
    ButtonType["light"] = "btn-light";
    ButtonType["dark"] = "btn-dark";
})(ButtonType || (ButtonType = {}));
//# sourceMappingURL=ButtonComponent.js.map