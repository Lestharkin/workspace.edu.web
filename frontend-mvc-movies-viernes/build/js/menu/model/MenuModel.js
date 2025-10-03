export default class MenuModel {
    menu;
    constructor() {
        this.menu = [
            {
                label: 'Home',
                link: '#home',
                active: false,
                action: () => {
                    console.log('Home clicked');
                },
            },
            {
                label: 'Rentals',
                link: '#rentals',
                active: true,
                action: () => {
                    console.log('Rentals clicked');
                },
            },
            {
                label: 'About',
                link: '#about',
                active: false,
                action: () => {
                    console.log('About clicked');
                },
            },
        ];
    }
    getMenu = () => this.menu;
    initComponent = () => { };
}
