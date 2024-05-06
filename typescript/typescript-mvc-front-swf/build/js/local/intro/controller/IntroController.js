export default class IntroController {
    introView;
    constructor(introView) {
        this.introView = introView;
    }
    init = async () => {
        await this.introView.render();
    };
}
