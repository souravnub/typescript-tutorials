"use strict";
// T is a generic type => T can be anything
const echo = (val) => {
    return val;
};
const echoAny = (val) => {
    return val;
};
const num = echo(123); // or echo(123 as number)
console.log(typeof num);
// echo("sourav");
// echo(false);
echoAny(123);
echo(123);
echo("sourav");
// echoAny("sourav");
// echoAny(false);
const isObj = (i) => typeof i === "object" && !Array.isArray(i) && i !== null;
const isObjWithTypes = (i) => {
    const isObj = typeof i === "object" && !Array.isArray(i) && i !== null;
    return {
        isObj,
        argType: typeof i,
        val: i,
    };
};
console.log(isObj("string"));
console.log(isObjWithTypes("string").val);
const processUser = (user) => {
    return user;
};
const users = [
    {
        id: 1,
        name: "sourav",
        address: {
            street: "234 street",
            suite: "appa",
        },
        email: "sourav@gmail.com",
        username: "sourav",
    },
    {
        id: 2,
        name: "dheeraj",
        address: {
            street: "244",
            suite: "base",
        },
        email: "dheeraj@gmail.com",
        username: "dheeraj",
    },
];
// without using generic constraints....
// const getUsersProperty = (usersArr: user[], prop: keyof user) => {
//     return usersArr.map((user) => user[prop]);
// };
// console.log(getUsersProperty(users, 'address'))
/*
T => user
K => key of user

getUsersProperty(users, key)
and returns forEach user => user[key]
*/
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
/*
T => user
k => key of user
N => key of user[key]

suppose,
k -> address
N would be 'key of address', i.e, suite or street

getSecondNestedProperty(users, key, nestedKey)
returns: forEach user => user[key][nestedKey]

ex.
user['address']['suite']
*/
const getSecondNestedProperty = (users, key, nestedKey) => {
    return users.map((user) => user[key][nestedKey]);
};
console.log(getUsersProperty(users, "username"));
console.log(getSecondNestedProperty(users, "address", "suite"));
