import PioneerModel from '../model/PioneerModel.js'
import Observer from '../types/Observer.js'

export default class PioneerView extends Observer<PioneerModel> {
  public update(): void {
    console.log('PioneerView update')
  }

  public init(): void {
    console.log('PioneerView init')
  }
}
