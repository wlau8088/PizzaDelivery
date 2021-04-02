/*
The next day, to speed up the process, the delivery person rents a pizza-delivering goat. She and the goat begin at the same starting location, and they both deliver a pizza to this starting house. She and the goat then take turns moving based on the dispatcher's instructions.

Here are some examples:

^v now delivers pizzas to three houses; The delivery person goes north and the goat goes south.
^>v< now delivers pizzas to three houses; The delivery person and the goat both end up back where they started.
^v^v^v^v^v now delivers pizzas to 11 houses; The delivery person treks north and the goat treks south.

Given the same string of dispatcher inputs as in Part 1, how many houses receive at least one pizza?
2639
*/

// updates coordinate using given direction and updates history
const updateCoord = (direction, coord, history) => {
    // validate input
    if(typeof direction !== 'string') return;
    if(!Array.isArray(coord)) return;
    if(typeof history == 'undefined') return;

    // update coordinate
    switch(direction){
        case '^':
            coord[1]++;
            break;
        case 'v':
            coord[1]--;
            break;
        case '>':
            coord[0]++;
            break;
        case '<':
            coord[0]--;
            break;
    }

    // updates history
    history.add(coord.join(','));
}

// find the number of unique houses the pizza deliverer visited
const numHouses = (input) => {

    // validate input
    if(typeof input !== 'string') return 0;
    if(input.length < 1) return 1;

    // initialize delivery coordinates
    const persCoord = [0,0]
    const goatCoord = [0,0]

    // store history of houses visited
    const history = new Set();
    history.add(persCoord.join(','));

    // follow directions from dispatch
    // separate person directions from goat direction
    for(let i = 0; i<input.length; i++){
        if(i % 2 === 0){
            updateCoord(input[i], persCoord, history);
        } else{
            updateCoord(input[i], goatCoord, history);
        }
    }

    return history.size;
}

const testInput = '^v^'

console.log(numHouses(testInput))