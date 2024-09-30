export default class MenuModel {
    menu;
    constructor() {
        this.menu = [];
    }
    init() {
        this.menu = this.fetchMenu();
    }
    fetchMenu() {
        return [
            {
                title: 'Home',
                url: '/',
                active: false,
            },
            {
                title: 'Rentals',
                url: '/rentals',
                active: false,
            },
            {
                title: 'Contact',
                url: '/contact',
                active: true,
            },
            {
                title: 'About',
                url: '/about',
                active: false,
            },
        ];
    }
    getMenu() {
        return this.menu;
    }
}
