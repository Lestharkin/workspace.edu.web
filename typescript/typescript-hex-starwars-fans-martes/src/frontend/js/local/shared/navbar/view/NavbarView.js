import View from '../../../util/view/View.js';
export default class NavbarView extends View {
    constructor(parent) {
        super(parent, './partials/shared/navbar/navbar.html');
    }
    render = async () => {
        await this.load();
    };
    addEventListenerToHome = (fn) => {
        const home = document.querySelector('#homeLink') ?? document.createElement('a');
        home.addEventListener('click', fn);
    };
    addEventListenerToMovies = (fn) => {
        const movies = document.querySelector('#moviesLink') ?? document.createElement('a');
        movies.addEventListener('click', fn);
    };
    addEventListenerToCharacters = (fn) => {
        const characters = document.querySelector('#charactersLink') ?? document.createElement('a');
        characters.addEventListener('click', fn);
    };
}
