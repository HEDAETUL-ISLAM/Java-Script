//array filtering
const number = [1, -1, 2, 3];

const filtered = number.filter(e => e>= 0);

console.log(filtered);


//array maping

const item = filtered.map(e => ({value: e}))
console.log(item)

// array map chaining

const items = number
    .filter(e=> e >= 0)
    .map(e => ({value: e}))
    .filter(n => n.value > 1)
    .map(n=> n.value)
    .map(obj=> ({value1: obj}))
    .filter(n=> n.value1 > 2)
    .map(obj=> obj.value1)

console.log(items)

//array reduching

//a = 1 , c = -1 => a = 0
//a = 0 , c = 2 => a = 2
//a =2 , c = 3 => a = 5

//old method is

// let sum = 0;
// for(let n of number)
//     sum = sum +n

const sum= number.reduce( (accumulator, currentvalue) => accumulator+currentvalue)
console.log(sum);
