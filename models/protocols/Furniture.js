import ConveyorBelt from "../ConveyorBelt";

export default class Furniture {
    content = [];
    put(object) { return }

    take() { return }

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