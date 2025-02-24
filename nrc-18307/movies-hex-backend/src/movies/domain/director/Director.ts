import AbstractDirector, { DirectorInterface } from './AbstractDirector'

export default class Director extends AbstractDirector {
  constructor(directorInterface: DirectorInterface) {
    super(directorInterface)
  }

  public override isNull = (): boolean => false

  public override toString = (): string => `${this.names} ${this.surnames}`  
}
