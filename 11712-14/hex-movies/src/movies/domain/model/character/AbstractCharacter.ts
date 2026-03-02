import Category from '../enum/Category'
import Person from '../person/Person'

export default abstract class AbstractCharacter extends Person {
  protected categorize: Category

  constructor(
    id: string,
    names: string,
    surnames: string,
    categorize: Category,
  ) {
    super(id, names, surnames)
    this.categorize = categorize
  }

  readonly getCategorize = (): Category => this.categorize

  readonly setCategorize = (categorize: Category): void => {
    this.categorize = categorize
  }
}
