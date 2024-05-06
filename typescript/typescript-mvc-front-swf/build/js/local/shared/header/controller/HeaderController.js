export default class HeaderController {
    headerView;
    constructor(headerView) {
        this.headerView = headerView;
    }
    init = async () => {
        await this.headerView.render();
    };
}
