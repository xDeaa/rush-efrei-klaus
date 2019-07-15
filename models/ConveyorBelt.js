import Furniture from "./Furniture";
import Box from "./Box";
import GiftWrap from "./GiftWrap";
import Pony from "./Pony";
import DragonBall from "./DragonBall";

export default class ConveyorBelt extends Furniture {
    isBusy = false;

    // put(object) {
    //     if (!this.isBusy) {
    //         this.isBusy = true;
    //         this.content.push(object);
    //         console.log(`${this.getNameObject()} is on CoveyorBelt`)
    //     } else {
    //         console.log("Sorry i'm busy come later");
    //     }
    // }

    // take() {
    //     if (this.content.length == 0) {
    //         console.log("Sorry nothing is on the conveyorBelt try later");
    //     } else {
    //         this.isBusy = false;
    //         console.log(`${this.getNameObject()} is been taken`);
    //     }
    // }

    in() {
        if (!this.isBusy) {
            const object = this.#randomObject();
            this.content.push(object)
            this.isBusy = true
        } else {
            console.log("Sorry i'm busy come later");
        }
    }

    out() {
        if (this.isBusy) {
            console.log(`I send to Santa your ${this.getNameObject()} `);
            this.content.pop();
            this.isBusy = false;
        } else {
            console.log("Sorry i can't send  nothing to Santa");
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