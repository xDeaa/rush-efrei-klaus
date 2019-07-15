import Furniture from "./Furniture";
import Box from "./Box";
import GiftWrap from "./GiftWrap";
import Pony from "./Pony";
import DragonBall from "./DragonBall";

export default class ConveyorBelt extends Furniture {
    isBusy = false;

    put(object) {
        if (!this.isBusy) {
            this.isBusy = true;
            this.content.push(object);
            console.log(`${Object.getPrototypeOf(object.constructor).name} is on CoveyorBelt`)
        } else {
            console.log("Sorry i'm busy come later");
        }
    }

    take() {
        this.isBusy = false;
    }

    in() {
        if (!this.isBusy) {
            const object = this.#randomObject();
            this.content.push(object)
        } else {
            console.log("Sorry i'm busy come later");
        }
    }

    #randomObject() {
        const random = Math.floor(Math.random() * Math.floor(4))
        if (random == 0) return new Box();
        if (random == 1) return new GiftWrap();
        if (random == 2) return new Pony();
        if (random == 3) return new DragonBall();
    }
}