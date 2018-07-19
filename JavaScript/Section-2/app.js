// var, let, const

var name = "Victor Alonso";
console.log(name);
name = 'Contreras';
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = "Hello";
console.log(greeting);

// letters, numbers, _, $
// Can not start with a number

// Multi word vars
var firstName = "Victor";
var first_name = "Sara";
var FirstName = "Tom";
var firstname = "Lore";

// LET & CONST
let name2 = "Victor";
console.log(name2);
name2 = "Alonso";
console.log(name2); 
const name3 = "Victor";
console.log(name3);
// Have to assing a value
//const constante;

//This we can change its values
const person = {
    name4: "Victor",
    age: 23
}
person.name4 = "Alonso";
person.age = 24;
console.log(person);
//Here we can also change its values
//But not the all structure
const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.push(6);
console.log(numbers);
