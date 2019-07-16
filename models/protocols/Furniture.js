export default class Furniture {
    content = [];
    put(object) { return }
    take() { return }

    // Get the name constructor of the object
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