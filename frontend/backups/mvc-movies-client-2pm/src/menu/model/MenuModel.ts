import { Menu } from '../types/Menu'

export default class MenuModel {
  private menu: Menu[]

  constructor() {
    this.menu = []
  }

  public init(): void {
    this.menu = this.fetchMenu()
  }

  private fetchMenu(): Menu[] {
    return [
      {
        title: 'Home',
        url: '/',
        active: false,
      },
      {
        title: 'Rentals',
        url: '/rentals',
        active: true,
      },
      {
        title: 'About',
        url: '/about',
        active: false,
      },
    ]
  }

  public getMenu(): Menu[] {
    return this.menu
  }
}
