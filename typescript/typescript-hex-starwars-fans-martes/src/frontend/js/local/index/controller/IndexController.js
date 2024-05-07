export default class IndexController {
    indexView;
    constructor(indexView) {
        this.indexView = indexView;
    }
    init = () => {
        this.indexView.render();
    };
}
