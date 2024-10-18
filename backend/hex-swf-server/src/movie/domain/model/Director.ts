import Person, { PersonAttributes } from './Person'

export default class Director extends Person {
  private readonly yearsOfExperience: number

  constructor(director: DirectorAttributes) {
    super({
      name: director.name,
      lastname: director.lastname,
    })
    this.yearsOfExperience = director.yearsOfExperience
  }

  public override isNull = (): boolean => {
    return false
  }

  public getYearsOfExperience = (): number => {
    return this.yearsOfExperience
  }
}

export interface DirectorAttributes extends PersonAttributes {
  yearsOfExperience: number
}
