import View from '../../util/view/View';
export default class MovieView extends View {
    constructor(parent) {
        super(parent, './partials/movie/movie.html');
    }
    render = async () => {
        await this.load();
    };
}
