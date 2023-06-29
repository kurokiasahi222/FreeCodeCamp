let id: number = 5

let company: string = "Company"
let isPublished: boolean = true
let x: any = "Hello"

let age: number

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, "Hello"]

// Tuple
let person: [number, string, boolean] = [1, "Brad", true]

// Tuple Array
let employee: [number, string][]
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
]

// Union 
let pid: string | number
pid = "22"

// Enum 
enum Direction1 {
    Up, 
    Down,
    Left,
    Right,
}

// Object
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: "John"
}

// Type Assertion - treat entity as different type: static cast
let cid: any = 1
let customerId = <number>cid

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

let addNum2 = (x: number, y: number): number => x + y

console.log(addNum(1, 2))
console.log(addNum2(1, 2))

// Interface
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const userInterface: UserInterface = {
    id: 1,
    name: "John"
}

// Interface with function
interface IMathFunc {
    (x: number, y: number): number
}
const add: IMathFunc = (x: number, y: number): number => x + y

// Classes
class Person {
    private id: number
    private name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}
