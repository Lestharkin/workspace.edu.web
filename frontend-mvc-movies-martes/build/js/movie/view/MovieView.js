export default class MovieView {
    parent;
    movie;
    constructor(parent) {
        this.parent = parent;
        this.movie = document.createElement('movie');
        this.parent.appendChild(this.movie);
    }
    render = () => {
        this.movie.innerHTML += `<h1>Movie View</h1>`;
    };
}
