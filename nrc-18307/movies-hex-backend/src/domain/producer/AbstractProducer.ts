import Person, { PersonInterface } from "../person/Person";

export default abstract class AbstractProducer extends Person {
  protected budget: number;

  constructor(producerInterface: ProducerInterface) {
    super(producerInterface);
    this.budget = this.validateBudget(producerInterface.budget);
  }

 

  private validateBudget(value: number): number {
    if (value < 0) {
      throw new Error("El presupuesto no puede ser negativo.");
    }
    return value;
  }
}

interface ProducerInterface extends PersonInterface {
  budget: number;
}

export { ProducerInterface };
