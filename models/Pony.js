import Toy from './Toy';

export default class Pony extends Toy {
    #nb = 1;
    constructor() {
        super();
        this.id = this.#nb;
        this.type = this.getType();
        console.log(`Pony #${this.id} is singing -->
        Dou-double poney, j’fais izi money
        D’où tu m’connais ? Parle moi en billets violets
        Dou-double poney, j’fais izi money`);
       this.#nb ++;
    }

    isMoved() {
        console.log("Huuuuuuhu!")
    }

    getType() {
        return `Pony #${this.id}`;
    }
}
