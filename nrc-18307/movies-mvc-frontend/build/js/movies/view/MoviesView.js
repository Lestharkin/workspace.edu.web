export default class MoviesView {
    moviesHTML;
    constructor() {
        this.moviesHTML = document.createElement('movies');
    }
    init = () => {
        console.log('MoviesView initialized');
    };
    render() {
        this.moviesHTML.innerHTML = `
      <h1>Movies</h1>
      <p>Welcome to the Movies page!</p>
      `;
    }
    getMoviesHTML = () => {
        return this.moviesHTML;
    };
}
