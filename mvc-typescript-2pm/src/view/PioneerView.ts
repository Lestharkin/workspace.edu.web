import PioneerModel from '../model/PioneerModel.js'
import Observer from '../types/Observer.js'
import Pioneer from '../types/Pioneer.js'

export default class PioneerView extends Observer<PioneerModel> {
  private selector: HTMLDivElement

  constructor(subject: PioneerModel) {
    super(subject)
    this.selector = document.querySelector('pioneers') as HTMLDivElement ?? document.createElement('pioneers')
  }
  
  public update(): void {
    this.render()
  }

  public render(): void {
    this.addPioneerTable()
    this.addListeners()
  }

  private addPioneerTable(): void {
    this.selector.removeChild(this.selector.firstChild as Node)
    this.selector.appendChild(this.renderPioneerFromJavascript(
      (this.subject as PioneerModel).getPioneers()
    ))
  }

  private addListeners(): void {
    const buttons = this.selector.getElementsByTagName('button')
    for(const element of buttons) {
      element.addEventListener('click', (e) => {
        const button = e.target as HTMLButtonElement
        (this.subject as PioneerModel).deletePioneer(parseInt(button.id))
      })
    }
  }

  // private renderPioneerFromTemplate(
  //   computingPioneers: Pioneer[]
  // ): string {
  //   const rows = computingPioneers
  //     .map(
  //       (pioneer) => `
  //     <tr>
  //       <td>${pioneer.id}</td>
  //       <td>${pioneer.name}</td>
  //       <td>${pioneer.surname}</td>
  //       <td>${pioneer.description}</td>
  //       <td class="text-center">
  //         <button class="btn btn-danger" id="${pioneer.name}">
  //           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  //             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  //             <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
  //           </svg>
  //         </button>
  //       </td>
  //     </tr>
  //     `
  //     )
  //     .join('')
  //   return `
  //   <table class="table table-striped-columns border">
  //       <thead>
  //         <tr class="text-center">
  //           <th scope="col">Id</th>
  //           <th scope="col">Nombres</th>
  //           <th scope="col">Apellidos</th>
  //           <th scope="col">Descripción</th>
  //           <th scope="col"></th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         ${rows}          
  //       </tbody>
  //     </table>
  //   `
  // }

  private renderPioneerFromJavascript(
    computingPioneers: Pioneer[]
  ): HTMLTableElement {
    const rows = computingPioneers
      .map((pioneer) => {
        const row = document.createElement('tr')
        const id = document.createElement('td')
        id.className = 'text-center'
        id.textContent = pioneer.id.toString()
        const name = document.createElement('td')
        name.textContent = pioneer.name
        const surname = document.createElement('td')
        surname.textContent = pioneer.surname
        const description = document.createElement('td')
        description.textContent = pioneer.description
        const button = document.createElement('button')
        button.className = 'btn btn-danger'
        button.id = pioneer.id.toString()
        button.textContent = 'Eliminar'
        const cell = document.createElement('td')
        cell.className = 'text-center'
        cell.appendChild(button)
        row.appendChild(id)
        row.appendChild(name)
        row.appendChild(surname)
        row.appendChild(description)
        row.appendChild(cell)
        return row
      })
    const table = document.createElement('table')
    table.className = 'table table-striped-columns'
    const thead = document.createElement('thead')
    const tr = document.createElement('tr')
    tr.className = 'text-center'
    const th1 = document.createElement('th')
    th1.scope = 'col'
    th1.textContent = 'Id'
    const th2 = document.createElement('th')
    th2.scope = 'col'
    th2.textContent = 'Nombres'
    const th3 = document.createElement('th')
    th3.scope = 'col'
    th3.textContent = 'Apellidos'
    const th4 = document.createElement('th')
    th4.scope = 'col'
    th4.textContent = 'Descripción'
    const th5 = document.createElement('th')
    th5.scope = 'col'
    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    tr.appendChild(th5)
    thead.appendChild(tr)
    const tbody = document.createElement('tbody')
    rows.forEach((row) => {
      tbody.appendChild(row)
    })
    table.appendChild(thead)
    table.appendChild(tbody)
    return table
  }
}
