import Category from '../enum/Category'
import AbstractCharacter from './AbstractCharacter'

export default class NullCharacter extends AbstractCharacter {
  readonly isNull = (): boolean => true

  constructor() {
    super('not found', 'not found', 'not found', Category.UNKNOWN)
  }
}
