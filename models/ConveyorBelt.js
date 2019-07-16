import Furniture from "./protocols/Furniture";
import Box from "./Box";
import GiftWrap from "./GiftWrap";
import Pony from "./Pony";
import DragonBall from "./DragonBall";

export default class ConveyorBelt extends Furniture {
    isBusy = false;

    // Put an object on CoveyorBelt
    put(object) {
        if (this.isBusy) {
            console.log("Sorry i'm busy come later");
            return
        }
        this.isBusy = true;
        this.content.push(object);
        console.log(`${this.getNameObject()} is on CoveyorBelt`)
    }

    // Take the object on CoveyorBelt
    take() {
        if (this.content.length == 0) {
            console.log("Sorry nothing is on the conveyorBelt try later");
            return
        }
        this.isBusy = false;
        console.log(`${this.getNameObject()} is been taken`);
    }

    // Put a random object on CoveyorBelt
    in() {
        if (this.isBusy) {
            console.log("Sorry i'm busy come later");
            return
        }
        const object = this.#randomObject();
        this.content.push(object)
        this.isBusy = true
        console.log(`${this.getNameObject()} is on CoveyorBelt`);
    }

    // Send to santa if is a gift else drop the object
    out(object = '') {
        this.content.pop();
        if (object) {
            console.log(`I send to Santa your ${this.getNameObject(object)} `);
            return
        }
        if (!this.isBusy) {
            console.log("Sorry i can't send nothing to Santa");
            return
        }
        console.log(`I drop your ${this.getNameObject()} `);
        this.isBusy = false;
    }

    // Return random object Box,GiftWrap,Pony,DragonBall
    #randomObject() {
        const random = Math.floor(Math.random() * Math.floor(4))
        if (random == 0) return new Box();
        if (random == 1) return new GiftWrap();
        if (random == 2) return new Pony();
        if (random == 3) return new DragonBall();
    }
}