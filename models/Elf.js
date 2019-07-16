import Box from "./Box";
import ConveyorBelt from "./ConveyorBelt";
import Toy from "./protocols/Toy";

export default class Elf {

    nickname = ''

    constructor(name) {
        this.setNickname(name);
    }

    // Get the nickame of elf
    getNickname() {
        console.log(nickname);
    }

    // Set nickname to elf
    setNickname(name) {
        this.nickname = name;
    }

    // Pack a packaging and a toy
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

    // Unpack the packaging
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

    // Put a object in one of furniture Table or CoveyorBelt
    put(furnitures, object) {
        furnitures.put(object);
    }

    // Take a object in one of furniture Table or CoveyorBelt
    take(furnitures) {
        furnitures.take();
    }

    // Look th eobject in Table or CoveyorBelt
    look(furnitures) {
        let list = [];
        furnitures.content.forEach(element => {
            (element instanceof Toy) ? list.push('Toy') : list.push(Object.getPrototypeOf(element.constructor).name)
        });
        // console.log(list);
        return list;
    }

    // Press in put a random object on CoveyorBelt
    in(belt) {
        belt.in();
    }

    // Send to santa or drop object from CoveyorBelt
    out(belt) {
        belt.out()
    }

    // Pack a gift with object in Table and CoveyorBelt
    automatisationPackage(table, conveyor) {
        const itemConveyor = this.look(conveyor);
        const packaging = conveyor.content[0];
        let type, gift;
        
        (itemConveyor == 'Packaging') ? type= 'Toy' : type= 'Packaging';

        const checkTable = this.#checkObjectTable(table, type);
    
        if( packaging instanceof Box) {
            packaging.open();
        }
        if (checkTable) {
            type == 'Toy' ? gift = this.pack(packaging, checkTable[0]) : gift = this.pack(checkTable[0], packaging)
            conveyor.out(gift);
            return
        }
        console.log(`No ${type} found in Table`);
        return;
    }

    // Check the object in table
    #checkObjectTable(table, type) {
        const items = this.look(table);
        let object, index;
        if (items.length == 0) {
            console.log("Sorry nothing is on Table");
            return object;
        }
        items.forEach(element => {
            if (element == type) {
                index = items.indexOf(element);
            }
        });
        object = table.take(index);
        return object;
    }
}