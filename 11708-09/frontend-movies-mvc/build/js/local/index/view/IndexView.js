import ButtonComponent, { ButtonType, } from '../../component/button/ButtonComponent.js';
import SuperButtonComponent from '../../component/button/superButtonComponent.js';
import Observer from '../../shared/observer/Observer.js';
export default class IndexView extends Observer {
    root;
    constructor(subject) {
        super(subject);
        this.root = document.querySelector('root') ?? document.createElement('div');
        this.root.appendChild(new ButtonComponent('Aceptar', () => {
            alert('Button clicked');
        }, ButtonType.primary).get());
        this.root.appendChild(new ButtonComponent('Aceptar', () => {
            alert('OTRA ACCION');
        }, ButtonType.danger).get());
        this.root.appendChild(new SuperButtonComponent('Super Aceptar', () => {
            alert('Super ACCION');
        }, () => {
            alert('Super Dblclick');
        }, ButtonType.warning).get());
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