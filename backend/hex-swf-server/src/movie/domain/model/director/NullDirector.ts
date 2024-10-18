import Director from './Director'

export default class NullDirector extends Director {
  constructor() {
    super({
      name: 'not found name in database',
      lastname: 'not found lastname in database',
      yearsOfExperience: 0,
    })
  }

  public override isNull = (): boolean => {
    return true
  }

  public override setName = (_name: string): void => {
    return
  }

  public override setLastname = (_lastname: string): void => {
    return
  }

  public override setYearsOfExperience = (_yearsOfExperience: number): void => {
    return
  }
}
