import Pony from '../models/Pony';
import DragonBall from '../models/DragonBall';
import Box from '../models/Box';
import Elf from '../models/Elf';
import GiftWrap from '../models/GiftWrap';
import DBHeroes from '../models/DBHeroes';
import Table from '../models/Table';
import ConveyorBelt from '../models/ConveyorBelt';

console.log("--- Step 1 ---");
const pony = new Pony();
// pony.isMoved();
const goku = new DragonBall(DBHeroes.SANGOKU);
// goku.isMoved();

console.log("--- Step 2 ---");
const andrea = new Elf("Andrea");
const box = new Box();
const paper = new GiftWrap();
// andrea.pack(box,pony);
// box.open();
// andrea.pack(box,goku);
// andrea.pack(paper,pony);
// andrea.pack(paper,goku);
// andrea.unpack(paper);
// andrea.unpack(box);

console.log("--- Step 3 ---");
const table = new Table();
const conveyor = new ConveyorBelt();
andrea.put(table,pony);
// andrea.put(conveyor,box);
// andrea.put(conveyor,goku);
andrea.look(table);
// andrea.look(conveyor);
andrea.in(conveyor);
andrea.look(conveyor);


