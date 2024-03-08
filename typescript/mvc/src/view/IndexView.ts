export default class IndexView {
  private readonly h1: HTMLElement

  constructor () {
    this.h1 = document.getElementById('title') as HTMLElement
  }

  public init (data: string[]): void {
    data.forEach((item) => {
      this.h1.innerHTML += item
    })
    const div = document.createElement('div') as HTMLElement
    div.appendChild(this.h1)
    div.classList.add('container')
    document.body.appendChild(div)
  }
}
