"use strict";
let id = 5;
let company = "Company";
let isPublished = true;
let x = "Hello";
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "Brad", true];
// Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
// Union 
let pid;
pid = "22";
// Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: "John"
};
// Type Assertion - treat entity as different type: static cast
let cid = 1;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
let addNum2 = (x, y) => x + y;
console.log(addNum(1, 2));
console.log(addNum2(1, 2));
const userInterface = {
    id: 1,
    name: "John"
};
const add = (x, y) => x + y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
