import IndexController from './index/controller/IndexController.js'
import IndexModel from './index/model/IndexModel.js'
import IndexView from './index/view/IndexView.js'

const main = async (): Promise<void> => {
  const model = new IndexModel()
  const view = new IndexView()
  const index = new IndexController(model, view)

  await index.init()
}

void main()
