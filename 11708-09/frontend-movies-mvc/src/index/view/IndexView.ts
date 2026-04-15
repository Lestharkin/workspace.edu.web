import Observer from '../../shared/observer/Observer.js'
import Subject from '../../shared/observer/Subject.js'
import IndexModel from '../model/IndexModel.js'
import HeaderComponent from './component/HeaderComponent.js'
import LayoutComponent from './component/LayoutComponent.js'
import ListComponent from './component/ListComponent.js'

export default class IndexView extends Observer {
  private readonly root: HTMLDivElement
  private readonly layout: LayoutComponent
  private readonly header: HeaderComponent
  private readonly list: ListComponent

  constructor(subject: Subject) {
    super(subject)
    this.root = document.querySelector('root') ?? document.createElement('div')
    this.header = new HeaderComponent()
    this.layout = new LayoutComponent(
      this.header.get(() => {
        alert('Search button clicked')
      }),
      this.root,
    )
    this.list = new ListComponent(this.layout.getMain(), [])
  }

  readonly init = () => {
    this.layout.get()
  }

  readonly update = () => {
    this.list.setMovies((this.subject as IndexModel).getMovies())
    this.list.clear()
    this.list.get()
  }
}
