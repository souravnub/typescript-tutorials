"use strict";
const addOrJoin = (a, b, action) => {
    if (action === "add") {
        return a + b;
    }
    return `${a}${b}`;
};
// if actions is 'join' then the function will return string
const result = addOrJoin(2, 3, "join");
console.log(result);
const myImg = document.getElementById("myImg");
