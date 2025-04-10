import Index from './index/Index.js'
import Movies from './movies/Movies.js'

const movies = new Movies()
movies.init()
const index = new Index()
index.init([movies.getMoviesHTML()])
