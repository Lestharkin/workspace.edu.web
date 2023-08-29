var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import nullMovie from '../types/NullMovie.js';
export default class IndexModel {
    constructor() {
        this.getData = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '',
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                }
            });
            const movies = response.json();
            return yield new Promise((resolve, reject) => {
                try {
                    resolve(movies);
                }
                catch (error) {
                    console.warn(error);
                    reject(nullMovie);
                }
            });
        });
        console.log('IndexModel constructor');
    }
}
