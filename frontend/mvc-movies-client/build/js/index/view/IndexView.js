export default class IndexView {
    elements;
    constructor() {
        this.elements = {
            searchForm: document.querySelector('#search') ??
                document.createElement('form'),
            main: document.querySelector('main') ?? document.createElement('main'),
            path: document.querySelector('meta[name=path]') ?? document.createElement('meta'),
        };
    }
    getPageFromMeta = () => {
        const pathElement = this.elements['path'];
        return pathElement ? pathElement.getAttribute('page') ?? 'error' : 'error';
    };
    init = (searchMovies) => {
        this.searchMoviesForm(searchMovies);
    };
    renderMain = (componentName) => {
        if (this.elements['main'] !== undefined) {
            this.elements['main'].innerHTML = '';
            this.elements['main'].appendChild(document.createElement(componentName));
        }
    };
    searchMoviesForm = (searchMovies) => {
        const searchForm = this.elements['searchForm'];
        if (searchForm !== undefined) {
            const btn = searchForm.querySelector('button');
            if (btn !== null) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    searchMovies(searchForm.querySelector('input')?.value ?? '');
                });
            }
        }
    };
}
