import Observer from '../../shared/types/Observer.js';
export default class MoviesView extends Observer {
    moviesHTML;
    constructor(moviesModel) {
        super(moviesModel);
        this.moviesHTML = document.createElement('movies');
    }
    init = () => {
        console.log('MoviesView initialized');
    };
    update = () => {
        this.render();
    };
    render = () => {
        const moviesData = this.subject.getMoviesData();
        moviesData.forEach((movie) => {
            const div = document.createElement('div');
            div.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.extract}</p>
        <img src="./img/movies/${movie.thumbnail}" alt="${movie.title}">
      `;
            this.moviesHTML.appendChild(div);
        });
    };
    getMoviesHTML = () => {
        return this.moviesHTML;
    };
}
