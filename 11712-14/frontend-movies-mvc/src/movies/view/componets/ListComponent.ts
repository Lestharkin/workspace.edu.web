export default class ListComponent {
  private readonly listItem = []

  readonly getListHTML = () => {
    const list = document.createElement('div')
    list.innerHTML = `
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Cras justo odio
        <span class="badge bg-primary rounded-pill">14</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <span class="badge bg-primary rounded-pill">2</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Morbi leo risus
        <span class="badge bg-primary rounded-pill">1</span>
      </li>
    </ul>
    `
    return list
  }
}
