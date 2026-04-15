export default class LayoutComponent {
    root;
    layout;
    header;
    main;
    // private readonly footer: HTMLDivElement
    constructor(header, root) {
        this.root = root;
        this.header = header;
        this.header.classList.add('p-5');
        this.layout = document.createElement('div');
        this.main = document.createElement('main');
        this.main.classList.add('bg-dark', 'text-white');
    }
    getMain = () => this.main;
    get() {
        this.layout.appendChild(this.header);
        this.layout.appendChild(this.main);
        this.root.appendChild(this.layout);
        return this.layout;
    }
}
//# sourceMappingURL=LayoutComponent.js.map