# Learnings - Arrays and objects in ts

**_1. Array operations:_**
We can perform all the operations on the arrays in TS as in JS. Just have to keep in mind the type of data that is being removed or pushed from the array.<br>
Arrays of lenght _*n*_ and with specific type of data can be created using the format below

```javascript
type student = {
    name: string,
    section: number,
};

// classRoom array donot have specified length
let classRoom: student[] = [];
```

**_2. Tuples:_**
Tuples are the arrays that have a specified length and contains specific data types at specific positions.
<br>
The tuple in the example below will have 3 elements,<br>
element at index 0: _*string*_<br>
element at index 1: _*number*_<br>
element at index 2: _*boolean*_

```javascript
let tuple: [string, number, boolean] = ["sourav", 23, true];
```

**_3. Tuples & Arrays are different:_**
It sometimes seems that a tuple and an array are both same, both might have same length and same elements at same positions. as in the example code below

```javascript
let tuple: [string, number, boolean] = ["sourav", 23, true];
let array = ["sourav", 23, true];
```

But when we try to assign: <br>
_tuple to array_: works<br>
_array to tuple_: error<br>

This happens because **array can have any number of elements**<br>
The number of elements in array _can be_ less or more than the number of elements in the tuple...<br>
Because there is a possibility that the array might have lower or higher length as compared to the tuple, typescript will throw an error when we try assigning array to tuple

**_4. Object in typescript:_**
We can define JS Objects with properties of specific types using the _type_ keyword in TS.

```javascript
type student = {
    name: string,
    id: number | string,
    email?: string,
};
```

Whenever, we create an object with type student, it should have a name,id and might have an email.<br>
_email?: string_ the ? symbolizes that the email property of the student type is optional
