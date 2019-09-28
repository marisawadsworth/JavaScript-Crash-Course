# JavaScript Crash Course

## Table of contents
  - [What is JavaScript](#What-is-JavaScript)
  - [Console Log](#Console-Log)
  - [Varaiables](#Varaibles)
  - [Data Type](#Data-Type)
  - [Properites and Methods](#Properites-and-Methods)
  - [Arrays](#Arrays)
  - [Object Literals](#Object-Literals)
  - [Arrays of Objects](#Arrays-of-Objects)
  - [For/While Loops](#For/While-Loops)
  - [Reference](#Reference)



---

## What is JavaScript
JavaScript is a high level, interpreted programming language.
A high level language means you dont have to deal with things like memory management.

The program is executed directly without having to run through a compiler.

JavaScript conforms to the ECMAScript specification.

JavaScript runs on the client/browser as well as on the server (Node.js).

### ( Inspect all Elements on the browser. )
---

## Console Log

```
console.log('Hello World');
```
```
console.error('This is an error');
```
```
console.warn('This is a warning');
```
---

## Varaibles

```
var
```
var has been used since the beginning of JavaScript. 
If there are two variables with the same name it will cause conflict and cause problems. You dont want to use var anymore.

```
let / const
```
let and const were added with es6. <br><br>
The differences are "let" lets you reassign values.
"const" is short for constant which means it can't be changed.<br><br>
When to use them?<br>
Always use const usless you know you are going to reassign the value

---

## Data Type
Data types you can assign to the varaibles.

```
// String, Numbers, Boolean, null, undefined
```

```
const name = "Marisa"
const age = 21;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(`My name is ${name} and I am ${age}`);
```

---

## Properites and Methods
A method is a function that is associated with an object.

```
const s  = 'Hello World';

console.log(s.length);
//Shows the length of characters in the string.

console.log(s.toUpperCase())
console.log(s.toLowerCase())
// Makes the string all uppercase and lowercase.

console.log(s.substring(0, 5));
//Only shows the first 5 letters.

console.log(s.substring(0, 5).toUpperCase());
// Combine substring and uppercase.

console.log(s.split(''));
// Split a string into an array as letters.


const x = "Technology, Computers, Code";

console.log(x.split(', '));
//Splits a string into an array as three words.
```
---

## Arrays
Arrays are variable that hold multiple values.

```
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

```

---

## Object Literals
Object literals are key value pairs.

```
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
// Shows all information about the person.

console.log(person.firstName);
// Show first name of person.
console.log(person.firstName, person.lastName);
// Show first and last name of person.

console.log(person.hobbies[1]);
// Shows persons hobbie or take out the 1 to show all hobbies.

console.log(person.address.city);
// Shows persons city.


const { firstName, lastName, } = person;
// Turn objects into varaibles.

console.log(firstName);


const { address: { city }} = person;
// For embedded objects into varaibles.

console.log(city);


person.email = 'gmail.com';
// Add properites
console.log(person);

```

---

## Arrays of Objects
Creating a array but each value inside is an object and converting them into JSON file.

```
const todos = [
    {
        id: 1,
        text: 'Wash Dog',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos[1].text);
// Shows the 2 ID and only shows the text.


// Convert to JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// Using a for loop
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for(let todo of todos) {
    console.log(todo)
    console.log(todo.id)
}

```

---
## For/While Loops

```
// For
for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}


// While
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}
```

---

---
## Reference

JavaScript Crash Course For Beginners.<br>
https://www.youtube.com/watch?v=hdI2bqOjy3c

