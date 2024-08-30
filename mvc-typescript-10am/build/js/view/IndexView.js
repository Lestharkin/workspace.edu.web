export default class IndexView {
    pioneerView;
    constructor() {
        this.pioneerView = undefined;
    }
    setPioneerView(pioneerView) {
        this.pioneerView = pioneerView;
    }
    render() {
        if (this.pioneerView) {
            this.pioneerView.render();
        }
    }
}
