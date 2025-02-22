import Person, { PersonInterface } from "../person/Person";

export default abstract class AbstractCharacter extends Person {
  protected birthYear: Date;

  constructor(characterInterface: CharacterInterface) {
    super(characterInterface);
    this.birthYear = this.validateBirthYear(characterInterface.birthYear);
  }

 // public abstract isNull() : boolean;

  private validateBirthYear(date: Date): Date {
    if (date > new Date()) {
      throw new Error("El año de nacimiento no puede estar en el futuro.");
    }
    return date;
  }
}

interface CharacterInterface extends PersonInterface {
  birthYear: Date;
}

export { CharacterInterface };
