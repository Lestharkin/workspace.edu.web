import Person, { PersonInterface } from '../person/Person'

export default abstract class AbstractDirector extends Person {
  protected yearsOfExperience: number

  constructor(directorInterface: DirectorInterface) {
    super(directorInterface)
    this.yearsOfExperience = directorInterface.yearsOfExperience
  }

  public getYearsOfExperience = (): number => this.yearsOfExperience

  public setYearsOfExperience = (yearsOfExperience: number): void => {
    this.yearsOfExperience = yearsOfExperience
  }
}

interface DirectorInterface extends PersonInterface {
  yearsOfExperience: number
}

export { DirectorInterface }
