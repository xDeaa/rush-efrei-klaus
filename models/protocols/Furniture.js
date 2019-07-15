import ConveyorBelt from "../ConveyorBelt";

export default class Furniture {
    content = [];
    put(object) {
        if (this instanceof ConveyorBelt) {
            if (this.isBusy) {
                console.log("Sorry i'm busy come later");
                return;
            }
            this.isBusy = true;
            this.content.push(object);
            console.log(`${this.getNameObject()} is on CoveyorBelt`)
        } else {
            if (this.content.length >= 10) {
                console.log("Hoho it's too heavy, I can only have 10 objects maximum ");
                return;
            }
            this.content.push(object);
            console.log(`${this.getNameObject()} is on Table`)
        }
    }

    take() {
        if (this.content.length == 0) {
            console.log("Sorry nothing is here try later");
            return
        }

        if (this instanceof ConveyorBelt) {
            this.isBusy = false;
            console.log(`${this.getNameObject()} is been taken`);
        } else {
            const lastItem = this.content.pop();
            console.log(`${this.getNameObject(lastItem)} is been taken`);
        }
    }

    getNameObject(param = '') {
        if (param) {
            return Object.getPrototypeOf(param.constructor).name
        }
        let object;
        this.content.forEach(element => {
            object = Object.getPrototypeOf(element.constructor).name
        });
        return object;
    }
}