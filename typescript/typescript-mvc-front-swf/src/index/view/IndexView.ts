import Intro from '../../intro/Intro.js'
import Footer from '../../shared/footer/Footer.js'
import Header from '../../shared/header/Header.js'
import Navbar from '../../shared/navbar/Navbar.js'
import Component from '../../util/component/Component.js'
import View from '../../util/view/View.js'

export default class IndexView extends View {
  private components: Component[]

  constructor(parent: HTMLElement) {
    super(parent, './partials/index/index.html')
    this.components = []     
  }

  public render = async (): Promise<void> => {
    await this.load()
    this.components.push(new Navbar(document.querySelector('#nav') as HTMLDivElement))
    this.components.push(new Header(document.querySelector('#header') as HTMLDivElement))
    this.components.push(new Intro(document.querySelector('#main') as HTMLDivElement))
    this.components.push(new Footer(document.querySelector('#footer') as HTMLDivElement))
    this.components.forEach((component: Component) => component.deploy())
  }
}
