import Category from './Category'
import Character from './Character'

export default class NullCharacter extends Character {
  constructor() {
    super({
      id: 'not-found',
      names: 'Not found in database',
      surnames: 'Not found in database',
      category: Category.UNKNOWN,
    })
    this.isNull = true
  }

  override setNames = (_names: string): void => {
    throw new Error('Cannot set names on a NullCharacter')
  }

  override setSurnames = (_surnames: string): void => {
    throw new Error('Cannot set surnames on a NullCharacter')
  }

  override setCategory = (_category: Category): void => {
    throw new Error('Cannot set category on a NullCharacter')
  }
}
