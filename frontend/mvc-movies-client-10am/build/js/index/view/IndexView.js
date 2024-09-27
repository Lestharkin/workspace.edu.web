export default class IndexView {
    elements;
    constructor() {
        this.elements = {
            searchForm: document.querySelector('#search') ??
                document.createElement('form'),
        };
    }
    init = (searchMovies) => {
        this.searchMoviesForm(searchMovies);
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
