import Furniture from "./protocols/Furniture";

export default class Table extends Furniture {

    take() {
        if (this.content.length == 0) {
            console.log("Sorry nothing is here try later");
            return;
        }
        const lastItem = this.content.pop();
        console.log(`${this.getNameObject(lastItem)} is been taken`);
    }

    // take(index) {

    // }

    put(object) {
        if (this.content.length >= 10) {
            console.log("Hoho it's too heavy, I can only have 10 objects maximum ");
        }
        this.content.push(object);
        console.log(`${this.getNameObject()} is on Table`)
    }
}
