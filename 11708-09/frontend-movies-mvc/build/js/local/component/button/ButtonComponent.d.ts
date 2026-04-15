export default class ButtonComponent {
    protected readonly button: HTMLButtonElement;
    constructor(text: string, fn: () => void, type: ButtonType);
    get(): HTMLButtonElement;
}
export declare enum ButtonType {
    primary = "btn-primary",
    secondary = "btn-secondary",
    success = "btn-success",
    danger = "btn-danger",
    warning = "btn-warning",
    info = "btn-info",
    light = "btn-light",
    dark = "btn-dark"
}
//# sourceMappingURL=ButtonComponent.d.ts.map