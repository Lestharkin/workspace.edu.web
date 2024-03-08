export default class IndexController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        console.log('IndexController');
    }
    start() {
        console.log('IndexController.start');
        this.view.deploy(this.model.getMovies());
    }
}
