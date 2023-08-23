import { getShowCaseTemplate } from '../templates/showCaseTemplate.js';

export default class IndexView {

  constructor() {
    this.name = 'IndexView';
    this.main = document.querySelector('#main');
  }

  display = movies => {
    this.genShowCaseHTML(movies);
  }

  genShowCaseHTML = movies => {
    const showCaseHTML = document.createElement('div');
    showCaseHTML.classList.add('container', 'text-center');
    getShowCaseTemplate(movies, showCaseHTML);   
    this.main.innerHTML = ''; 
    this.main.appendChild(showCaseHTML);
  }
  
}