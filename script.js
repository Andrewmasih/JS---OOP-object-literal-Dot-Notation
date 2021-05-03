/*  country.name, '.' using Dot Notation to access data */

let country = {

  name: "England",
  population: 4.224,
  sea: true,
  islands: 1000,
  rivers: {
    amount: 198,
    fish: "yes",
    boats: "yes",
    swimming: "no"
  } 


};

country.name = "ireland";  /*usng dot notation, this is updating the object value*/
console.log(country.name); /*using dot notation to get the objects value*/

console.log (country.rivers.amount); /*using dot natation twice to get inner object */