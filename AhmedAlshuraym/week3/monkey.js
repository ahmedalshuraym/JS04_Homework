/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

//Ahmed 

let monkey = function(name,species,foodsEaten){
  this.name = name;
  this.species = species;
  this.foodsEaten = [];
  this.eatSomething = function(food) {
  this.foodsEaten.push(food);
 }
this.introduce = function() {
  console.log("My name is "+ this.name +". I am "+ this.species + " . I am eating "+ this.foodsEaten);
}
}

var monkey1 = new monkey("MAX","Spider Monkey");
monkey1.eatSomething("Banana");
monkey1.introduce();
var monkey2 = new monkey("Pilo","Squirrel Monkey");
monkey2.eatSomething("Apple");
monkey2.introduce();
var monkey3 = new monkey("Bing","Vervet Monkey");
monkey3.eatSomething(["Banana " + "and" + " Apple"]);
monkey3.introduce();



