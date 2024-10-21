import NullDirector from '../director/NullDirector'
import NullImage from '../image/NullImage'
import AbstractMovie from './AbstractMovie'

export default class NullMovie extends AbstractMovie {

  constructor() {
    super({
      title: 'not found title in database',
      episodeId: 0,
      openingCrawl: 'not found openingCrawl in database',
      director: new NullDirector(),
      producers: [],
      releaseDate: new Date(),
      characters: [],
      image: new NullImage()
    })
  }

  public override isNull = (): boolean => {
    return true
  }

  public override setTitle = (_title: string): void => {
    return
  }

}
