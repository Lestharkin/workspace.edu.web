export default class FooterController {
    footerView;
    constructor(footerView) {
        this.footerView = footerView;
    }
    init = async () => {
        await this.footerView.render();
    };
}
