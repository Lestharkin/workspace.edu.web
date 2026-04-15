export default class LayoutComponent extends HTMLDivElement {
  constructor(
    private readonly header: HTMLDivElement,
    private readonly main: HTMLDivElement,
    private readonly footer: HTMLDivElement,
  ) {
    super()
  }
}
