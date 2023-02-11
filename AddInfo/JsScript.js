const c = console.log;

const func = (a, b) => a * b;
c(func(10, 10));

// const array = [3, 4, undefined, 8, 9, "", false];

// c(array.filter(Boolean));

const array = [1, 2, 3];

array.length = 0;

c(array);

let myFirstName = "Nikita";
let myLastName = "Reshetnikov";
let myFullName = myFirstName.concat(" ", myLastName);
c(myFullName);
