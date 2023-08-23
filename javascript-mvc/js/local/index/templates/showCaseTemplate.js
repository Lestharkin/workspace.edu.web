const getShowCaseTemplate = (data, div) => {
  data.then(movies => {
      const html = `  
      <div class="row p-2">
        <div class="col-sm">
          <div class="card m-auto" style="width: 18rem;">
          <h5 class="card-title">${movies[0].title}</h5>
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">${movies[0].director}</p>
            </div>
          </div>
        </div>
        <div class="col-sm p-2">
          <div class="card m-auto" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-sm p-2">
          <div class="card m-auto" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>  
    `;
      div.innerHTML = html;
    }
  );
}

export { getShowCaseTemplate };