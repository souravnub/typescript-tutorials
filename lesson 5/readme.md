# Learnings - index signatures & typeof Assertion

**1. Cannot dynamically access values from keys of objects:** in TS we cannot directly access the values of an object from keys dynamically.

```javascript
type Student = {
    name: string,
    gpa: number,
    email: string,
    isActive: boolean,
};

const student: Student = {
    name: "sourav",
    gpa: 2.5,
    email: "sourav@gmail.com",
    isActive: false,
};

console.log(student.name); //works
console.log(student["name"]); // works
const prop: string = "name";
console.log(student[prop]); // error: no index signature
```

similarly in a for loop we cannot access the key value pairs of an object

```javascript
type Student = {
    name: string,
    gpa: number,
    email: string,
    isActive: boolean,
};

const student: Student = {
    name: "sourav",
    gpa: 2.5,
    email: "sourav@gmail.com",
    isActive: false,
};

for (const key in student) {
    console.log(key, student[key]); // error: no index signature
}
```

**2. Accessing key value pairs dynamically (using index signatures):** There are two ways to access the keys and values dynmically:<br>

-   index signatures
-   keyof Assertions

Index signatures are a way of pre-defining the structure,i.e, types of the keys and values of an object. <br>
Benefit: can easily access the values dynamically from keys <br>
Drawback: don't get intellisense for key-values\*\* & no error while accessing a non-existing property of the object.<br>

\*\*: the key-values that are not pre-defined in the type definition

```javascript
// below type definition means: index signature is such that the key of the object will be a string, and the values will also be strings
type Student = {
    [key: string]: string,
    // will get intellisense for name key, as it is pre-defined in the type definition
    name: string,
};

const student: Student = {
    name: "sourav",
    // will not get the intellisense for gpa key, as it is not pre-defined in the type definition
    gpa: 5.4,
};

console.log(student.classes); // no error, even classes key don't exist in the student obj
for (const key in student) {
    console.log(key, student[key]); // TS have no problem now
}
```

**3. Read only properties of an object:**TS also allows to make object keys readonly.

```javascript
type plant = {
    readonly name: string,
    height: number
}
const tree:plant = {
    name: 'tree1',
    height: 322
}
tree.name = 'tree2' // TS error: Cannot assign to 'name' because it is a read-only
tree.height = 2333 // no error
```

**3. Using the <Record> Utility type:**<br>
Benefit: concise syntax as compared to index signatures
Drawback: we cannot specifically define type for values if values have different types.

```js
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
    // have to use keyof assertion
    console.log(key, incomes[key as keyof Incomes]);
});
```
