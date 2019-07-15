import Pony from '../models/Pony';
import DragonBall from '../models/DragonBall';
import Box from '../models/Box';
import Elf from '../models/Elf';
import GiftWrap from '../models/GiftWrap';
import DBHeroes from '../models/DBHeroes';
import Table from '../models/Table';
import ConveyorBelt from '../models/ConveyorBelt';

console.log("--- Step 1 ---");
// Create new Pony
const pony = new Pony();
// pony.isMoved();

// Create new DragonBall Sangoku
const goku = new DragonBall(DBHeroes.SANGOKU);
// goku.isMoved();

console.log("--- Step 2 ---");
// Create new Elf named Andrea
const andrea = new Elf("Andrea");

// Create 2 packaging Box() and GiftWrap()
const box = new Box();
const paper = new GiftWrap();
// Pack Pony in Box
// andrea.pack(box,pony);
// box.open();

// Pack DragonBall Sangoku in Box
// andrea.pack(box,goku);

// Pack Pony and DragonBall Sangoku in GiftWrap
// andrea.pack(paper,pony);
// andrea.pack(paper,goku);

// Unpack GiftWrap and Box
// andrea.unpack(paper);
// andrea.unpack(box);

console.log("--- Step 3 ---");
// Create 2 new furnitures Table and ConveyorBelt
const table = new Table();
const conveyor = new ConveyorBelt();

// Put in Table Pony, Box, GiftWrap, DragonBall Sangoku
andrea.put(table,pony);
andrea.put(table,box);
andrea.put(table,paper);
andrea.put(table,goku);

// Put in ConveyorBelt Box and DragonBall Sangoku
andrea.put(conveyor,box);
andrea.put(conveyor,goku);

// Look what is in Table and ConveyorBelt
andrea.look(table);
// andrea.look(conveyor);

// Get random objetc on ConveyorBelt
andrea.in(conveyor);
andrea.look(conveyor);

// Send to santa what'is on ConveyorBelt
andrea.out(conveyor);
andrea.out(conveyor);

// Put in ConveyorBelt GiftWrap, Pony
andrea.put(conveyor, paper);
andrea.put(conveyor, pony);

// Take the last item on ConveyorBelt and Table
andrea.take(conveyor);
andrea.take(table);
