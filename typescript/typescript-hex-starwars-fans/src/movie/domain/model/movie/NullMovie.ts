import AbstractMovie from "./AbstractMovie"
import NullDirector from "../director/NullDirector"

export default class NullMovie extends AbstractMovie {
  constructor() {
    super(
      "not found title in database",
      0,
      "not found opening in database",
      new Date(),
      [],
      new NullDirector()
    )
  }

  public isNull(): boolean {
    return true
  }

  public setTitle(): void { return }
  public setEpisode_id(): void { return }
  public setOpening(): void { return }
  public setReleaseDate(): void { return }
  public setProducers(): void { return }
  public setDirector(): void { return }
  public addProducer(): void { return }
  public removeProducer(): void { return }
}