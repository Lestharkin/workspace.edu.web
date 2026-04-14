import Observer from '../../shared/observer/Observer.js';
export default class IndexView extends Observer {
    root;
    constructor(subject) {
        super(subject);
        this.root = document.querySelector('root') ?? document.createElement('div');
    }
    init = () => {
        console.log('IndexView loaded');
    };
    update = () => {
        const movies = this.subject.getMovies();
        const div = document.createElement('div');
        const list = `
    <ul class="list-group">
      ${movies
            .map((movie) => `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${movie.title}
          ${movie.release_date}
          <span class="badge bg-primary rounded-pill">${movie.episode_id}</span>
        </li>
      `)
            .join('')}
    </ul>`;
        div.innerHTML = list;
        this.root.appendChild(div);
    };
}
//# sourceMappingURL=IndexView.js.map