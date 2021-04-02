/*
A delivery person is delivering pizzas to an infinite two-dimensional grid of houses. She begins by delivering a pizza to the house at her starting location; a dispatcher then calls via radio and tells her where to move next. Moves are always exactly one house to the north (^), south (v), east (>), or west (<). After each move, she delivers a pizza to the house at her new location. The dispatcher has been a little spacey lately, so she sometimes ends up delivering more than one pizza to the same house.

Here are some examples:

> delivers pizzas to two houses: one to the house at the starting location, and one to the house directly east of the starting location.
^>v< delivers pizzas to four houses in a square; the house at the starting/ending location ends up with two pizzas.
^v^v^v^v^v delivers a bunch of pizzas to some very lucky people at only two houses.

Given the string of dispatcher inputs in this file, how many houses receive at least one pizza? 
2565
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
    if(typeof input !== 'string') return;
    if(input.length < 1) return 1;

    // initialize delivery coordinate
    const coord = [0,0];

    // store history of houses visited
    const history = new Set();
    history.add(coord.join(','));

    // follow directions from dispatch
    for(const direction of input){
        updateCoord(direction, coord, history);
    }

    return history.size;
}

const testInput = '^>v<'

console.log(numHouses(testInput))