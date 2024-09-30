import MoviesUtil from '../util/MoviesUtil.js';
export default class MovieTemplate {
    static async render(movies) {
        if (movies.length === 0) {
            return `
        <div class="movie">
          <h2 class="movie-not-fount">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ban" viewBox="0 0 16 16">
              <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
            </svg>
            No movies found
          </h2>
        </div>
      `;
        }
        const moviesPromise = Promise.all(movies.map(async (movie) => `
      <div class="movie">
        <div class="movie-poster">
          <img src="${movie.thumbnail}" alt="">
          <div>
              <p>${MovieTemplate.renderStars(movie.score)}</p>
              <ul>${movie.genres.map(g => `<li>${g}</li>`).join('')}</ul>
          </div>
        </div>
        <div class="movie-info">          
          <div>
              <h2>${movie.title}</h2>
              <p>${movie.year}</p>              
              <div class="text-info">
                <p>${movie.extract}</p>
              </div>
              <div class="movie-btn-rental">
              <button>${MoviesUtil.formatToMoney(movie.price)} RENT</button>
          </div>
          </div>          
      </div>
    </div>
    `));
        return (await moviesPromise).join('');
    }
    static renderStars(score) {
        const fullStars = Math.floor(score);
        const halfStar = (score * 10) % 2 === 0 ? 0 : 1;
        const emptyStars = 5 - fullStars - halfStar;
        const star = {
            full: `<span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-star-fill" viewBox="0 0 16 16">
            <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </span>`,
            half: `<span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-star-half" viewBox="0 0 16 16">
            <path
            d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
        </svg>
      </span>`,
            empty: `<span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star"
            viewBox="0 0 16 16">
            <path
            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
        </svg>
      </span>`
        };
        return `
      ${Array(fullStars).fill('').map(() => star.full).join('')}
      ${Array(halfStar).fill('').map(() => star.half).join('')}
      ${Array(emptyStars).fill('').map(() => star.empty).join('')}
    `;
    }
}
