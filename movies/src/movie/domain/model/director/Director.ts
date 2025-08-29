import Person, {
  PersonInterface,
} from '../../../../shared/base/domain/abstracts/Person'

export default class Director extends Person {
  private reputation: number
  isNull: boolean

  constructor(director: DirectorInterface) {
    super(director)
    this.reputation = director.reputation
    this.isNull = false
  }

  getReputation = (): number => this.reputation

  setReputation = (reputation: number): void => {
    this.reputation = reputation
  }
}

export interface DirectorInterface extends PersonInterface {
  reputation: number
}
