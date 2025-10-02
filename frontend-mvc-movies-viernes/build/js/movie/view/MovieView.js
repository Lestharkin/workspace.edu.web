import Observer from '../../shared/Observer/Observer.js';
export default class MovieView extends Observer {
    parent;
    constructor(parent, MovieModel) {
        super(MovieModel);
        this.parent = parent;
    }
    update = () => {
        console.log('MovieView update');
    };
    initComponent = () => {
        this.parent.innerHTML += `<h1>Movies</h1>`;
    };
}
