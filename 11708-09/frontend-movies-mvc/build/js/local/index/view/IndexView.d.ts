import Observer from '../../shared/observer/Observer.js';
import type Subject from '../../shared/observer/Subject.js';
export default class IndexView extends Observer {
    private readonly root;
    constructor(subject: Subject);
    readonly init: () => void;
    readonly update: () => void;
}
//# sourceMappingURL=IndexView.d.ts.map