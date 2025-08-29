import Person, {
  PersonInterface,
} from '../../../../shared/base/domain/abstracts/Person'
import Category from './Category'

export default class Character extends Person {
  private category: Category
  override isNull: boolean

  constructor(character: CharacterInterface) {
    super(character)
    this.category = character.category
    this.isNull = false
  }

  getCategory = (): Category => this.category

  setCategory = (category: Category): void => {
    this.category = category
  }
}

export interface CharacterInterface extends PersonInterface {
  category: Category
}
