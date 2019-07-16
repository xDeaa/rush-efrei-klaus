export default class Packaging {
    isOpen = false;
    toy = null;

    open() { this.isOpen = true; };

    insert(toy) {
        this.toy = toy;
        this.isOpen = false;
    };
}