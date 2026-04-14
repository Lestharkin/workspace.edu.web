export default class IndexController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init = async () => {
        this.view.init();
        this.model.init();
        console.log(await this.model.fetchMovies());
    };
}
//# sourceMappingURL=IndexController.js.map