import Observer from '../types/Observer.js';
export default class PioneerView extends Observer {
    update() {
        console.log('PioneerView update');
    }
    init() {
        console.log('PioneerView init');
    }
}
