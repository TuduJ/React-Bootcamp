import fruits from './fruits';
import {choice, remove} from './helpers';

// Randomly draw a fruit from the array
let fruit = choice(fruits);
// Log the message "i'd like onr RANDOMFRUIT, please."
console.log(`I'd like one ${fruit}, please.`);
// Log the message "Here you go: RANDOMFRUIT"
console.log(`Here  you go: ${fruit}`);
// Log the message "Delicious! May i have another?"
console.log(`Delicious! May i have another?`)
// Remove the fruit from the array
let remaining = remove(fruits, fruit);
// Log the message "Sorry! we are all out. we have FRUITSLEFT left"
console.log(`Sorry! we are all out. we have ${remaining.length} other fruits left`);