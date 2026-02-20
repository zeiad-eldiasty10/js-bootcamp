let yourbirthdate = prompt("enter your birth date (yyyy-mm-dd)");

let birthdate = new Date(yourbirthdate);

let today = new Date();

let age = today - birthdate;

let days = Math.floor(age / (1000 * 60 * 60 * 24));
let months = Math.floor(days / 30);
let years = Math.floor(months / 12);

console.log( "Your age is " + years + " years" + " " + months + " months" + " " + days + " days");
console.log(" Your age is " + years + " years" + " " + months + " months" );
console.log(" Your age is " + years + " years" );

