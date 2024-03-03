export default class IndexController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    start() {
        const data = this.model.getData();
        if (data !== null) {
            const dataList = [data];
            this.view.init(dataList);
        }
        else {
            this.view.init(['Not found']);
        }
    }
}
