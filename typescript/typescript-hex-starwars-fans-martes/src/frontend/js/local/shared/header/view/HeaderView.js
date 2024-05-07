import View from "../../../util/view/View.js";
export default class HeaderView extends View {
    constructor(parent) {
        super(parent, './partials/shared/header/header.html');
    }
    render = async () => {
        await this.load();
    };
}
