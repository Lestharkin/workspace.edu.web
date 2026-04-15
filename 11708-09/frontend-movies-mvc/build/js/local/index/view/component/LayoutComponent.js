export default class LayoutComponent {
    root;
    layout;
    header;
    // private readonly main: HTMLDivElement
    // private readonly footer: HTMLDivElement
    constructor(header, root) {
        this.root = root;
        this.header = header;
        this.header.classList.add('p-5');
        this.layout = document.createElement('div');
    }
    get() {
        this.layout.appendChild(this.header);
        this.root.appendChild(this.layout);
        return this.layout;
    }
}
//# sourceMappingURL=LayoutComponent.js.map