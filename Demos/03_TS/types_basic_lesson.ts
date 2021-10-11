/*** union type ***/ 
type Style = 'bold' | 'italic' | 23;

let font: Style;

font =	'bold';
// font =	34; // type error

/*** interface type ***/ 
interface Person {
    first: string;
    last: string;
    [key: string] : any; // map of string to any
}

const jeff : Person = {
    first: "Jeff",
    last: "Delaney"
}

const bolt : Person = {
    first: "Usain",
    last: "Bolt"
    // last_: "Bolt" // type error
}

/*** functions ***/ 

function pow(x: number, y: number) {
    return Math.pow(x, y)
}

// pow('23', '34') // type error
let z = pow(23, 34)

/*** arrays ***/ 

const arr: number[] = []

// arr[0] = 'hello' // type error
arr[0] = 34


/*** tuples ***/

type NameAge = [string, number]

let baby : NameAge = ['Carlos', 2]

/*** tuples with optional types ***/

type PersonData = [/*name*/string?, /*age*/number?, /*sex*/boolean?]

let marcelo = ["Marcelo", true]

/*** generics ***/

class Observable<T> {
    constructor(public value: T) {}
}

let obs0 : Observable<Person>;
let obs1 = new Observable(bolt)