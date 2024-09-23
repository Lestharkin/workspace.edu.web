import MenuTemplate from '../template/MenuTemplate.js';
export default class MenuView {
    menu;
    selector;
    selectorName = 'menu';
    constructor() {
        this.menu = [];
        this.selector = document.createElement('div');
    }
    init = async (menu) => {
        this.menu = menu;
        this.selector = document.querySelector(this.selectorName);
        this.render();
    };
    render = () => {
        this.selector.appendChild(MenuTemplate.render(this.menu));
    };
}
