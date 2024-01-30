"use strict";
const student = {
    name: "sourav",
    gpa: 5.4,
    email: "sourav@gmail.com",
    isActive: true,
    classes: ["cprg250", "cpnt300", "maths250"],
};
const prop = "name";
//benefit of index signature: able to access the value dynamically
console.log(student[prop]);
for (const key in student) {
    console.log(student[key]);
}
// drawback of index signature: no issue in accdessing the non-existing proerties of the object
// studnet.college will be undefined
console.log(student.college);
const musician = {
    name: "sourav",
    bands: ["pp1", "rocksolid", "122"],
    rating: 1.4,
};
for (const key in musician) {
    // using Keyof Assertion
    console.log(`${key}: ${musician[key]}`);
    // above line is similar to the below line
    // console.log(`${key}: ${musician[key as "name" | "bands" | "rating"]}`);
}
Object.keys(musician).map((key) => {
    // have to use Keyof Assertion here too
    console.log(`key: ${key}, value: ${musician[key]}`);
});
const getMusicianKey = (musician, key) => {
    return `${key} : ${musician[key]}`;
};
console.log(getMusicianKey(musician, "name"));
const incomes = {
    salary: 200,
    sideHustle: 1000,
    business: 200,
    salaryBonus: null,
};
Object.keys(incomes).map((key) => {
    console.log(key, incomes[key]);
});
