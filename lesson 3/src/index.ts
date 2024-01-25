// type aliases

type stringOrNumber = string | number;

type student = {
    email: string;
    id: stringOrNumber;
    isActive: boolean;
};

const s1: student = {
    id: 1,
    email: "sourav@gmail.com",
    isActive: false,
};

// literal types
type userType = "admin" | "customer" | "user";

type user = {
    id: stringOrNumber;
    name: string;
    type: userType;
    lastActive: Date;
};

const currentUser: user = {
    id: 12333,
    name: "sourav",
    type: "user",
    lastActive: new Date("December 24, 2024 04:05:99"),
};
console.log(currentUser);

// functions

function add(a: number, b: number): number {
    return a + b;
}

// optional params
// required params comes first, optional params comes at the end
function sumThreeNums(a: number, b: number, c?: number): number {
    if (typeof c === "number") return a + b + c;
    return a + b;
}

// default params
function sumTwoNums(a: number, b: number = 0): number {
    return a + b;
}

// rest params
function sum(...nums: number[]): number {
    return nums.reduce((prev, current) => prev + current);
}

// never type
const cannotHappen = (): never => {
    throw new Error("not possible");
};

// use of never type
const isStringOrNumber = (val: string | number): "number" | "string" => {
    if (typeof val === "number") return "number";
    if (typeof val === "string") return "string";
    return cannotHappen();
};
