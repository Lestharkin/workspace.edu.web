import type IndexModel from '../model/IndexModel.js';
import type IndexView from '../view/IndexView.js';
export default class IndexController {
    private readonly model;
    private readonly view;
    constructor(model: IndexModel, view: IndexView);
    readonly init: () => Promise<void>;
}
//# sourceMappingURL=IndexController.d.ts.map