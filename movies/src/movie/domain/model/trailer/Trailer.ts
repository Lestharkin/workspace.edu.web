import NullObject from '../../../../shared/base/domain/interfaces/NullObject'

export default class Trailer implements NullObject {
  private readonly id: string
  private source: string
  isNull: boolean

  constructor(trailer: TrailerInterface) {
    this.id = trailer.id
    this.source = trailer.source
    this.isNull = false
  }

  getId = (): string => this.id

  getSource = (): string => this.source

  setSource = (source: string) => {
    this.source = source
  }
}

export interface TrailerInterface {
  id: string
  source: string
}
