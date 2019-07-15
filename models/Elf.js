import Box from "./Box";
import ConveyorBelt from "./ConveyorBelt";

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
        if (packaging.isOpen == true || packaging.toy == null) {
            console.log("Sorry this package is already empty");
        } else {
            console.log(`Ooooooh! Just unpacking the toy ~~ ${packaging.toy.type} ~~`);
            return packaging.toy.type
        }
    }

    put(furnitures, object) {
        furnitures.put(object);
    }

    take() {

    }

    look(furnitures) {
        let list = [];
        furnitures.content.forEach(element => {
            list.push(Object.getPrototypeOf(element.constructor).name)
        });
        console.log(list);
    }

    in(belt) {
        belt.in();
    }
}