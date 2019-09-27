const fruits = new Array('apples', 'oranges', 'mangos', 'watermelon');

console.log(fruits);

console.log(fruits[0]);
// Shows the first fruit in the array or replace 0 with another number in the array to show just one fruit.


// Adding to the array.
fruits[4] = 'grapes';
// Not the best way as you don't know how many items are in the array.
console.log(fruits);

fruits.push('strawberries');
// Best way. Adds strawberries last into the array.
console.log(fruits);

fruits.unshift('pears');
// Adds item to the beginning of the array.
console.log(fruits);

fruits.pop();
// Removes the last item in the array

console.log(fruits);


// Check to see if it is an array.
console.log(Array.isArray(fruits));
// Returns true if the array exist.

console.log(Array.isArray('hello'));
// Returns false as it is a string not an array.


console.log(fruits.indexOf('mangos'));
// Checks what number in the array the item is in.
