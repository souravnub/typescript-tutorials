"use strict";
let classRoom = [
    { name: "sourav", section: 12 },
    { name: "dheeraj", section: 1 },
];
// classRoom can contain only classMate data type
classRoom.push({
    name: "jasjot",
    section: 3,
});
classRoom[0].section = 4;
let anotherClassRoom = [
    { name: "akash", section: 2 },
    { name: "jashan", section: 1 },
];
// classRomm and anotherClassRoom both have same data type, so they can be assigned to one another
classRoom = anotherClassRoom;
anotherClassRoom = classRoom;
let tuple = ["sourav", 12, true];
let mixedArr = ["sourav", 2, true];
// error,,
// type of tuple: [string, number, boolean]
// type of mixedArr: (stirng | number | boolean)[]
tuple = mixedArr;
// tuple and mixedArr seems same but are not
// no error
// mixedArr type :(stirng | number | boolean)[],,,
// mixedArr can contain any number string, number, boolean types
mixedArr = tuple;
const student1 = {
    id: 1,
    name: "sourav",
    email: "sourav@gmail.com",
};
function logEmailInUpperCase(student) {
    var _a;
    // student.email can be undefined as it is optional, therefore we have to use a ? so as to avoid error in JS,,
    // if we donot use ? below,, TS will throw error
    return `Hello ${(_a = student.email) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
}
