function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}
Dog.prototype.bark = function () {
  console.log(`${this.name} says Woof!`);
};
const dog1 = new Dog("Buddy", "Labrador");
dog1.bark(); 
