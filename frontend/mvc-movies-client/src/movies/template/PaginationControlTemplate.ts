export default class PaginationControlTemplate {
  public static readonly render = (
    preFn: () => void,
    currentPage: number,
    totalPage: number,
    nextFn: () => void
  ): HTMLDivElement => {
    const prevDiv = document.createElement('div')
    prevDiv.className = 'prev'

    const prev = this.renderArrowLeft()
    prev?.addEventListener('click', () => {
      preFn()
    })

    prevDiv.appendChild(prev)

    const pageDiv = document.createElement('div')
    pageDiv.className = 'page'

    const page = document.createElement('span')
    page.textContent = `${currentPage} / ${totalPage}`

    pageDiv.appendChild(page)

    const nextDiv = document.createElement('div')
    nextDiv.className = 'next'

    const next = this.renderArrowRight()

    next?.addEventListener('click', () => {
      nextFn()
    })

    nextDiv.appendChild(next)

    const pag = document.createElement('div')
    pag.className = 'pagination'
    pag.appendChild(prevDiv)
    pag.appendChild(pageDiv)
    pag.appendChild(nextDiv)    
    return pag
  }  

  private static renderArrowLeft = (): HTMLButtonElement => {
    const prev = document.createElement('button')
    prev.id = 'prev'
    prev.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
      <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
    </svg>
    `
    return prev
  }

  private static renderArrowRight = (): HTMLButtonElement => {
    const next = document.createElement('button')
    next.id = 'next'
    next.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
      <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
    </svg>
    `
    return next
  }
}