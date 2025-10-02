import Observer from '../../shared/Observer/Observer.js';
export default class MovieView extends Observer {
    body;
    main;
    constructor(MovieModel) {
        super(MovieModel);
        this.body = document.body;
        this.main = this.body.querySelector('main');
    }
    update = () => {
        console.log('MovieView update');
    };
    initComponent = () => {
        this.main.innerHTML += `<h1>Hello, World!</h1>`;
    };
}
