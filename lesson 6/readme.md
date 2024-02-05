# Learnings - Generics

**1. When and Why to use Generic types?**
<br>
We might argue that using _any_ can also be solution for accepting a generic value in the _echoAny_ function below.

```js
const echoAny = (val: any): any => {
    console.log(val);
};
```

While using any is certainly generic, it will cause the function to accept any and all types for the type of val, we actually are losing the information about what that type was when the function returns.
<br>
Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned.
<br>
In the code below, we are using the generic type _T_ for assigning the type to the _val_ parameter as well as we are using the type as a return type of the function as well.
<br>

```js
const echo = <T>(val: T): T => {
    return val;
};
```

**2. Two Ways to call generic functions:**
<br>
The first way is to explicitly pass a type to the generic fuction, so that the generic can be assigned that type.

```
const echo = <T>(val: T): T => {
    return val;
};

echo<number>(123);
// or
echo(123 as number)
```

The second way is to let the compiler figure out the type. In the case below the compiler will assign _T_ the type that is passed in the argument, therefore, _123_ will be assigned to _T_

```
const echo = <T>(val: T): T => {
    return val;
};

echo(123);
```

**3. Using extends keyword with generic types || using generic constraints:**
with generic types we can pass any possible type

```js
const aFunction = <T>(obj: T) {
    return obj.length       // err: Property 'length' does not exist on type 'T'
}
```

There's an error when we try to access length property of the _obj_ parameter. This is because type _T_ is a generic type, and we can pass any value into it. Therefore, there is a chance that _obj_ or type _T_ donot have length prop.<br>
To overcome this we have to use generic constraints,i.e, putting a constraint on type _T_

```js
type Obj = {length : number}
const aFunction = <T extends Obj>(obj: T) {
    return obj.length // no error
}
```

There will be no error because we put a constraint on type _T_ that _T_ should always have _length_ prop.

<br>

###### Using generic constraints<br>

in the example below _T_ is a generic type, _K_ is a generic type that has a constraint: it should be key of T.<br>

```js
const getUsersProperty = <T, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map((user) => user[key]);
};
```

inside the function _getUsersProperty_:<br>
_users_: array of _T_<br>
_key_: key of _T_ => key of _user_
<br>
<br>
_return type: T[K][]_: array of T[K] => array of user[key]
<br>
if we pass 'address' as _key_ then T[K][] will be an array of address of the users
