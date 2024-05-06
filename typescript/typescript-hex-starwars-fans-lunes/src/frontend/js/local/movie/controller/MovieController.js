export default class MovieController {
    movieView;
    constructor(movieView) {
        this.movieView = movieView;
    }
    init = async () => {
        await this.movieView.render();
    };
}
