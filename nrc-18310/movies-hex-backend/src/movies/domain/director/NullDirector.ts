import AbstractDirector from './AbstractDirector'

export default class NullDirector extends AbstractDirector {
  constructor() {
    super({
      names: 'Not found',
      surnames: 'Not found',
      yearsOfExperience: 0,
    })
  }

  public override isNull = (): boolean => true

  public override toString = (): string => 'NullDirector'

  public override getYearsOfExperience = (): number => 0

  public override setYearsOfExperience = (_yearsOfExperience: number): void => {
    return
  }
}
