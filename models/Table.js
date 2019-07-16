import Furniture from "./protocols/Furniture";

export default class Table extends Furniture {

    // Take the last element on Table
    take() {
        if (this.content.length == 0) {
            console.log("Sorry nothing is here try later");
            return;
        }
        const lastItem = this.content.pop();
        console.log(`${this.getNameObject(lastItem)} is been taken`);
        return lastItem;
    }

    // Take a element choosen
    take(position) {
        const element = this.content.splice(position, 1);
        return element;
    }

    // Put a  object in Table
    put(object) {
        if (this.content.length >= 10) {
            console.log("Hoho it's too heavy, I can only have 10 objects maximum ");
        }
        this.content.push(object);
        console.log(`${this.getNameObject()} is on Table`)
    }
}
