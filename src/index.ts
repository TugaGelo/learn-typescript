let sales = 123456789;
let course = 'Typescript';
let is_published = true;
let level;


// Any
function render(document: any){
    console.log(document)
}

// Arrays
let number: number[] = [1, 2, 3];

//Tuple
let user: [number, string] = [1, 'Mosh'];
user.push(1);

//Enum
const small = 1;
const medium = 2;
const large = 3;

const enum Size { Small = 1, Medium, Large};

let mySize: Size = Size.Medium;
console.log(mySize);

//Function
function calculateTax(income: number, taxYear = 2022): number{
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000);

//Object 
//Type Alias
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1, 
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date)
    }
};

//Union
function kgToLbs(weight: number | string){
    //Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

//Intersection
type Draggable = { 
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

//Literal
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = "cm" | "inch";

//Nullable
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}

greet(null);

//Optional Chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date()};
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());

let log: any = null;
log?.('a');