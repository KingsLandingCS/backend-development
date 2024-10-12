
var obj = {
    name: "John",
    age: 25
}

Object.freeze(obj);


obj.age = 26;

console.log(obj.age);