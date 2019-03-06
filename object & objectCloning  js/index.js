// let name = "Hedaetul";
// let age = "20";

let person={
    name: "Hedaetul",
    age: 20
}
person.name="Bulbul";   //dot notation
person["age"]=22;       //braket notation

console.log(person);


//object cloning

//const another = Object.assign(person,{color:'blue'});       //or

const another = {...person}
console.log(another)