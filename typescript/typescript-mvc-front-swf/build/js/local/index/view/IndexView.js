import Intro from '../../intro/Intro.js';
import Footer from '../../shared/footer/Footer.js';
import Header from '../../shared/header/Header.js';
import Navbar from '../../shared/navbar/Navbar.js';
import View from '../../util/view/View.js';
export default class IndexView extends View {
    components;
    constructor(parent) {
        super(parent, './partials/index/index.html');
        this.components = [];
    }
    render = async () => {
        await this.load();
        this.components.push(new Navbar(document.querySelector('#nav')));
        this.components.push(new Header(document.querySelector('#header')));
        this.components.push(new Intro(document.querySelector('#main')));
        this.components.push(new Footer(document.querySelector('#footer')));
        this.components.forEach((component) => component.deploy());
    };
}
