import Pony from '../models/Pony';
import DragonBall from '../models/DragonBall';
import Box from '../models/Box';
import Elf from '../models/Elf';
import GiftWrap from '../models/GiftWrap';
import DBHeroes from '../models/protocols/DBHeroes';
import Table from '../models/Table';
import ConveyorBelt from '../models/ConveyorBelt';

console.log("--- Step 1 ---");
// Create new Pony , new DragonBall Sangoku
const pony = new Pony();
const goku = new DragonBall(DBHeroes.SANGOKU);
// pony.isMoved();
// goku.isMoved();

console.log("--- Step 2 ---");
// Create new Elf named Andrea
const andrea = new Elf("Andrea");

// Create packaging Box()
const box = new Box();
// Pack DragonBall Sangoku in Box
andrea.pack(box,goku);
box.open();
andrea.pack(box,goku);

// // Create packaging GiftWrap()
const paper = new GiftWrap();
// Pack Pony in GiftWrap
andrea.pack(paper,pony);
andrea.pack(paper,pony);

// Unpack GiftWrap 
const toy = andrea.unpack(paper)
console.log(toy === pony);
const r = andrea.unpack(paper)
console.log(r == null);


console.log("--- Step 3 ---");
// Create 2 new furnitures Table and ConveyorBelt
const table = new Table();
const conveyor = new ConveyorBelt();

// Put in Table Pony, Box, GiftWrap
andrea.put(table,paper);
andrea.put(table,pony);
andrea.put(table,box);

// // Put in ConveyorBelt Box and DragonBall Sangoku
// andrea.put(conveyor,box);
// andrea.put(conveyor,goku);

// Look what is in Table and ConveyorBelt
andrea.look(table);
andrea.look(conveyor);

// Get random object on ConveyorBelt
// andrea.in(conveyor);
// andrea.in(table);
andrea.automatisationPackage(table,conveyor)
// andrea.look(conveyor);

// Send to santa what'is on ConveyorBelt
// andrea.out(conveyor);
// andrea.out(conveyor);

// Put in ConveyorBelt GiftWrap, Pony
// andrea.put(conveyor, paper);
// andrea.put(conveyor, pony);

// Take the last item on ConveyorBelt and Table
// andrea.take(conveyor);
// andrea.take(table);