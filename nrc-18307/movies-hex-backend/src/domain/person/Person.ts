export default class Person {
    protected names: string;
    protected surnames: string;
  
    constructor(personInterface: PersonInterface) {
      this.names = this.validate(personInterface.names);
      this.surnames = this.validate(personInterface.surnames);
    }
  
    public isNull(): boolean {
      return false;
    }
  
    public toString(): string {
      return `${this.names} ${this.surnames}`;
    }
  
    private validate(value: string): string {
      return value.trim() !== "" ? value : "Valor no válido";
    }
  }
  
  interface PersonInterface {
    names: string;
    surnames: string;
  }
  
  export { PersonInterface };
  