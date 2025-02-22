import Person, { PersonInterface } from "../person/Person";

export default abstract class AbstractDirector extends Person {
  protected yearsOfExperience: number;

  constructor(directorInterface: DirectorInterface) {
    super(directorInterface); 
    this.yearsOfExperience = this.validateExperience(directorInterface.yearsOfExperience);
  }



  private validateExperience(years: number): number {
    if (years < 0) {
      throw new Error("Los años de experiencia no pueden ser negativos.");
    }
    return years;
  }
}

interface DirectorInterface extends PersonInterface {
  yearsOfExperience: number;
}

export { DirectorInterface };
