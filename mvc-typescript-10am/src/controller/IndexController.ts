import IndexModel from '../model/IndexModel.js'
import PioneerModel from '../model/PioneerModel.js'
import IndexView from '../view/IndexView.js'
import PioneerView from '../view/PioneerView.js'

export default class IndexController {
  private view: IndexView
  private model: IndexModel

  private pioneerView: PioneerView
  private pioneerModel: PioneerModel

  constructor(view: IndexView, model: IndexModel) {
    this.view = view
    this.model = model

    this.pioneerModel = new PioneerModel([])
    this.pioneerView = new PioneerView(this.pioneerModel)

    this.view.setPioneerView(this.pioneerView)
  }

  public async init(): Promise<void>  {
    const data = await this.model.getPioneersFromFile()
    this.pioneerModel.setPioneers(data)
    this.view.render()    
  }
}
