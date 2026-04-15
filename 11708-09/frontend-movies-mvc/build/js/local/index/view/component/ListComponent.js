export default class ListComponent {
    parent;
    listHTML;
    list;
    constructor(parent, list) {
        this.parent = parent;
        this.list = list;
        this.listHTML = document.createElement('div');
        this.parent.appendChild(this.listHTML);
    }
    setMovies = (movies) => {
        this.list = movies;
    };
    get() {
        const list = `
    <ul class="list-group">
      ${this.list
            .map((movie) => `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${movie.title}
          ${movie.release_date}
          <span class="badge bg-primary rounded-pill">${movie.episode_id}</span>
        </li>
      `)
            .join('')}
    </ul>`;
        this.listHTML.innerHTML = list;
    }
    clear = () => {
        this.listHTML.innerHTML = '';
    };
}
//# sourceMappingURL=ListComponent.js.map