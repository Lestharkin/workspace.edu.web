import View from '../../util/view/View.js';
export default class IntroView extends View {
    constructor(parent) {
        super(parent, './partials/intro/intro.html');
    }
    render = async () => {
        await this.load();
    };
}
