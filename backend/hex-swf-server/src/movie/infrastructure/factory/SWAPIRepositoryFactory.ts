import SWAPIRepositoryPort from "../../domain/port/driven/SWAPIRepositoryPort"
import SWAPIRepository from "../Repository/swapi/SWAPIRepository"

export default class SWAPIRepositoryFactory {
  public static readonly create = (): SWAPIRepositoryPort => {
    return new SWAPIRepository()
  }
}