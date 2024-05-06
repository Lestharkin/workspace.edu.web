import MovieController from "./controller/MovieController";
import MovieView from "./view/MovieView";
export default class Movie {
    movieController;
    constructor(parent) {
        this.movieController = new MovieController(new MovieView(parent));
    }
    deploy = () => {
        this.movieController.init();
    };
}
