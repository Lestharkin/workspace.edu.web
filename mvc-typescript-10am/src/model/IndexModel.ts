import Pioneer from '../types/Pioneer.js'

export default class IndexModel {
  private pioneers: Pioneer[]

  constructor() {
    this.pioneers = []
  }

  public init = async (): Promise<void> => {
    this.pioneers = await this.getPioneersFromFile()
  }

  public getPioneersFromFile = async (): Promise<Pioneer[]> => {
    const response = await fetch('./database/data.json')
    if (response.status !== 200) {
      return []
    }
    return await response.json()
  }

  public getPioneers = (): Pioneer[] => {
    return this.pioneers
  }
}
