import Figurine from './protocols/Figurine';
import DBHeroes from './protocols/DBHeroes';

export default class DragonBall extends Figurine {
    #character = "";
    
    constructor(character) {
        super();
        if(character == null){
            this.#character = this.#random();
        } else {
            this.#character = character;
        }
        this.type = this.getType();
            console.log(`${this.#character} is singing -->
            CHA-LA HEAD CHA-LA
            Nani ga okite mo kibun wa heno-heno kappa
            CHA-LA HEAD CHA-LA
            Mune ga pachi-pachi suru hodo
            Sawagu Genki-Dama --Sparking !`);
    }

    isMoved() {
        console.log("Kamé Hamé Ha!");
    }

    getType() {
        return `DragonBall Figurine ${this.#character}`;
    }

    #random() {
        const random = Math.floor(Math.random() * Math.floor(4))
        if (random == 0) return DBHeroes.SANGOKU;
        if (random == 1) return DBHeroes.BEJITA;
        if (random == 2) return DBHeroes.BEERUS;
        return DBHeroes.KAMESENNIN;
    }
}
