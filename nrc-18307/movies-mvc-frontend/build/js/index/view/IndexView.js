export default class IndexView {
    movies;
    constructor() {
        console.log('IndexView initialized');
        const movies = document.querySelector('movies');
        if (!movies) {
            this.movies = document.createElement('movies');
        }
        this.movies = movies;
    }
    getMovies = () => {
        return this.movies;
    };
    render() {
        console.log('Rendering Index View');
    }
}
