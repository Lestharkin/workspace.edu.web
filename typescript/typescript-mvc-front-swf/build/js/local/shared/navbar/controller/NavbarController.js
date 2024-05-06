export default class NavbarController {
    navbarView;
    constructor(navbarView) {
        this.navbarView = navbarView;
    }
    init = async () => {
        await this.navbarView.render();
    };
    addEventListeners = (fn) => {
        this.navbarView.addEventListenerToHome(fn[0] ?? (() => { }));
        this.navbarView.addEventListenerToMovies(fn[1] ?? (() => { }));
        this.navbarView.addEventListenerToCharacters(fn[2] ?? (() => { }));
    };
}
