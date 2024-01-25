"use strict";
// type aliases
const s1 = {
    id: 1,
    email: "sourav@gmail.com",
    isActive: false,
};
const currentUser = {
    id: 12333,
    name: "sourav",
    type: "user",
    lastActive: new Date("December 24, 2024 04:05:99"),
};
console.log(currentUser);
// functions
function add(a, b) {
    return a + b;
}
// optional params
// required params comes first, optional params comes at the end
function sumThreeNums(a, b, c) {
    if (typeof c === "number")
        return a + b + c;
    return a + b;
}
// default params
function sumTwoNums(a, b = 0) {
    return a + b;
}
// rest params
function sum(...nums) {
    return nums.reduce((prev, current) => prev + current);
}
// never type
const cannotHappen = () => {
    throw new Error("not possible");
};
// use of never type
const isStringOrNumber = (val) => {
    if (typeof val === "number")
        return "number";
    if (typeof val === "string")
        return "string";
    return cannotHappen();
};
