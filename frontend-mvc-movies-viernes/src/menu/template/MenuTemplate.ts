import MenuItem from '../types/MenuItem.js'

export default class MenuTemplate {
  constructor(private menu: MenuItem[]) {}

  readonly setMenu = (menu: MenuItem[]) => {
    this.menu = menu
  }

  readonly getMenuNode = (): HTMLUListElement => {
    const ul = document.createElement('ul')
    this.menu.forEach((item) => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = item.link
      a.textContent = item.label
      a.addEventListener('click', item.action)
      if (item.active) {
        a.classList.add('active')
      }
      li.appendChild(a)
      ul.appendChild(li)
    })
    return ul
  }
}
