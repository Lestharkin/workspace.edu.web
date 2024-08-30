import PioneerModel from '../model/PioneerModel.js'
import Observer from '../types/Observer.js'

export default class PioneerView extends Observer<PioneerModel> {
  private selector: HTMLDivElement

  constructor(subject: PioneerModel) {
    super(subject)
    this.selector = document.querySelector('pioneers') as HTMLDivElement ?? document.createElement('pioneers')
  }
  
  public update(): void {
    console.log('PioneerView update')
  }

  public init(): void {
    console.log('PioneerView init')
  }
}
