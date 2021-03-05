import { jsTPS_Transaction } from "../../common/jsTPS.js"

// THIS TRANSACTION IS FOR ADDING A NEW ITEM TO A TODO LIST
export default class MoveAnItemDown_Transaction extends jsTPS_Transaction {
    constructor(initModel,id) {
        super();
        this.model = initModel;
        this.id = id;
    }

    doTransaction() {
        // MAKE A NEW ITEM
       this.model.moveItemDown(this.id);
    }

    undoTransaction() {
        this.model.moveItemUp(this.id);
    }
}