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
        switch (packaging instanceof Box) {
            case true:
                if (packaging.isOpen) {
                    if (packaging.toy != null) {
                        console.log("Sorry this package already filled");
                    }
                    packaging.insert(toy);
                    console.log(`Yeaaaah! Just packing the toy ~~ ${toy.type} ~~`);
                } else {
                    console.log("Sorry this package is not open");
                }
                break;
            case false:
                if (packaging.toy == null) {
                    packaging.insert(toy);
                    console.log(`Yeaaaah! Just packing the toy ~~ ${toy.type} ~~`);
                } else {
                    console.log("Sorry this package already filled");
                }
                break;
        }
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
        console.log(list);
    }

    in(belt) {
        belt.in();
    }

    out(belt) {
        belt.out()
    }
}