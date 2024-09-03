class Human
{
    age = 25;
    printAge= () => console.log(this.age);
}
class Person extends Human
{
    sName = "Raj"
    age = 50;
    printName = () => console.log(this.sName)
}
const person1 = new Person()
person1.printAge()
personvehicle-Car , Animal-Dog, Person-Student1.printName()
//