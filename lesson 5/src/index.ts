type Student = {
    // describing the index signature
    // have to add undefined in the union type because classes is optional and if not provided then will be undefined
    [key: string]: string | number | boolean | string[] | undefined;
    name: string;
    gpa: number;
    email: string;
    isActive: boolean;
    classes?: string[];
};

const student: Student = {
    name: "sourav",
    gpa: 5.4,
    email: "sourav@gmail.com",
    isActive: true,
    classes: ["cprg250", "cpnt300", "maths250"],
};

const prop: string = "name";
//benefit of index signature: able to access the value dynamically

console.log(student[prop]);

for (const key in student) {
    console.log(student[key]);
}

// drawback of index signature: no issue in accdessing the non-existing proerties of the object
// studnet.college will be undefined
console.log(student.college);

type Musician = {
    name: string;
    bands: string[];
    rating: number;
};

const musician: Musician = {
    name: "sourav",
    bands: ["pp1", "rocksolid", "122"],
    rating: 1.4,
};

for (const key in musician) {
    // using Keyof Assertion
    console.log(`${key}: ${musician[key as keyof Musician]}`);

    // above line is similar to the below line
    // console.log(`${key}: ${musician[key as "name" | "bands" | "rating"]}`);
}

Object.keys(musician).map((key) => {
    // have to use Keyof Assertion here too
    console.log(`key: ${key}, value: ${musician[key as keyof Musician]}`);
});

const getMusicianKey = (musician: Musician, key: keyof Musician): string => {
    return `${key} : ${musician[key]}`;
};

console.log(getMusicianKey(musician, "name"));

// using utility type: Record<>
// drawback we cannot specifically define type for values if values have different types

type Streams = "salary" | "sideHustle" | "business" | "salaryBonus";

// Incomes type is a record that will contain all the streams, and stream can have number or null type.
// hence, we cannot specifically say that stream will be a number or null
// in case of index signatures we were able to define specific types for some keys if we want to
type Incomes = Record<Streams, number | null>;
const incomes: Incomes = {
    salary: 200,
    sideHustle: 1000,
    business: 200,
    salaryBonus: null,
};
Object.keys(incomes).map((key) => {
    console.log(key, incomes[key as keyof Incomes]);
});
