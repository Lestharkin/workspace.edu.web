export default class FooterComponent {
  readonly get = () => {
    const div = document.createElement('div')
    div.innerHTML = `Footer`
    return div
  }
}
