import Person from '../person/Person'

export default abstract class AbstractDirector extends Person {
  protected reputation: number

  constructor(id: string, names: string, surnames: string, reputation: number) {
    super(id, names, surnames)
    this.reputation = reputation
  }

  readonly getReputation = (): number => this.reputation

  readonly setReputation = (reputation: number): void => {
    this.reputation = reputation
  }
}
