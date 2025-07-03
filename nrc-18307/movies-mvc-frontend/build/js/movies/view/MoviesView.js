import Observer from '../../shared/types/Observer.js';
import MoviesTemplate from '../template/MoviesTemplate.js';
export default class MoviesView extends Observer {
    moviesHTML;
    constructor(moviesModel) {
        super(moviesModel);
        this.moviesHTML = document.createElement('movies');
        this.moviesHTML.classList.add('movies');
    }
    init = () => {
        console.log('MoviesView initialized');
    };
    update = () => {
        this.render();
    };
    render = async () => {
        const moviesData = this.subject.getMoviesData();
        const template = new MoviesTemplate(moviesData);
        this.moviesHTML.innerHTML = await template.get();
    };
    getMoviesHTML = () => {
        return this.moviesHTML;
    };
}
