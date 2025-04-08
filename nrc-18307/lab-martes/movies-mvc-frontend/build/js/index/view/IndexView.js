export default class IndexView {
    h1;
    constructor() {
        console.log('IndexView initialized');
        this.h1 =
            document.querySelector('header h1') ?? document.createElement('h1');
    }
    render() {
        console.log('Rendering Index View');
        this.h1.textContent = 'Hello World';
    }
}
