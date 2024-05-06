import View from "../../../util/view/View.js";
export default class FooterView extends View {
    constructor(parent) {
        super(parent, './partials/shared/footer/footer.html');
    }
    render = async () => {
        await this.load();
    };
}
