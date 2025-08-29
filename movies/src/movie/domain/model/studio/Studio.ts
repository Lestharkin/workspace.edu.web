import NullObject from '../../../../shared/base/domain/interfaces/NullObject'

export default class Studio implements NullObject {
  private readonly id: string
  private name: string
  isNull: boolean

  constructor(studio: StudioInterface) {
    this.id = studio.id
    this.name = studio.name
    this.isNull = false
  }

  getId = (): string => this.id

  getName = (): string => this.name

  setName = (name: string): void => {
    this.name = name
  }
}
export interface StudioInterface {
  id: string
  name: string
}
