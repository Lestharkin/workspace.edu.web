import Pioneer from '../types/Pioneer.js'
import Subject from '../types/Subject.js'
import PioneerView from '../view/PioneerView.js'

export default class PioneerModel extends Subject<PioneerView> {
  private pioneers: Pioneer[]

  constructor(pioneers: Pioneer[]) {
    super()
    this.pioneers = pioneers
  }

  public getPioneers(): Pioneer[] {
    return this.pioneers
  }

  public deletePioneer(id: number): void {
    const index = this.pioneers.findIndex((pioneer) => pioneer.id === id)
    this.pioneers.splice(index, 1)
    this.notifyAllObservers()
  }
}
