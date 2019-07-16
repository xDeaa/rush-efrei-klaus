import Box from "./Box";
import ConveyorBelt from "./ConveyorBelt";
import Toy from "./protocols/Toy";

export default class Elf {

    nickname = ''

    constructor(name) {
        this.setNickname(name);
    }

    getNickname() {
        console.log(nickname);
    }

    setNickname(name) {
        this.nickname = name;
    }

    pack(packaging, toy) {
        if (packaging instanceof Box) {
            if (!packaging.isOpen) {
                console.log("Sorry this package is not open");
                return
            }
        }
        if (packaging.toy != null) {
            console.log("Sorry this package already filled");
            return
        }
        packaging.insert(toy);
        console.log(`Yeaaaah! Just packing the toy ~~ ${toy.type} ~~`);
        return toy;
    }

    unpack(packaging) {
        const toy = packaging.toy;

        if (packaging instanceof Box) {
            if (packaging.isOpen == true || packaging.toy == null) {
                console.log("Sorry this package is already empty");
                return
            }
        }

        if (packaging.toy == null) {
            console.log("Sorry this package is already empty");
            return
        }
        console.log(`Ooooooh! Just unpacking the toy ~~ ${packaging.toy.type} ~~`);
        packaging.toy = null
        return toy
    }

    put(furnitures, object) {
        furnitures.put(object);
    }

    take(furnitures) {
        furnitures.take();
    }

    look(furnitures) {
        let list = [];
        furnitures.content.forEach(element => {
            (element instanceof Toy) ? list.push('Toy') : list.push(Object.getPrototypeOf(element.constructor).name)
        });
        // console.log(list);
        return list;
    }

    in(belt) {
        belt.in();
    }

    out(belt) {
        belt.out()
    }

    automatisationPackage(table, conveyor) {
        const itemConveyor = this.look(conveyor);
        if (itemConveyor == 'Packaging') {
            const checkTable = this.#checkObjectTable(table, 'Toy');
            const packaging = conveyor.content[0];
            if( packaging instanceof Box) {
                packaging.open();
            }
            if (checkTable) {
                const gift = this.pack(conveyor.content[0], checkTable[0]);
                conveyor.out(gift);
            }
        }
    }

    #checkObjectTable(table, type) {
        const items = this.look(table);
        let object;
        if (items.length == 0) {
            console.log("Sorry nothing is on Table");
            return object;
        }
        items.forEach(element => {
            if (element == type) {
                const index = items.indexOf(element);
                object = table.take(index);
            }
        });
        return object;
    }
}