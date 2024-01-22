# Learnings

**_1. implicitly & explicitly assigning types:_**
If we donot explicitly assign a type to a variable then ts will automatically infer the type from the value.

```javascript
let a = 2; // a is number ,, implicitly assigned by ts
let b = "sourav"; // b is string ,, implicitly assigned by ts
let c: string = "hello world"; // c is string ,, explicitly assigned by us
```

**_2. type for un-assigned variables:_**
Creating a variable without giving it a value and type will give it **any** type by default.

```javascript
let a; // ts error
let b: string; // no error
```

**_3. *any* type defies rules of ts:_**
_any_ type let us set any of the types to a variable. This might cause problems if used constantly without giving a special care. But, for an example, if we don't know the type of data that we will be receiving we have to use _any_ type. <br>
So, rule of the thumb: <br>
_Don't use it often, but remember any type also exists_

**_4. Working with functions:_**
We have to declare types for the parameters that are being passed to a function.

```javascript
const multiply = (a: number, b: number) => {
    return a - b;
};
```

In the above code example, typescript will implicitly define the return type of the function. In this case it would be _number_ type.

_explicitly defining return type of a function_

```javascript
const multiply = (a: number, b: number): number => {
    return a - b;
};
```

**_5. Union type_**
Union type is the combination of types. Suppose we have a variable that can be both _number_ and _boolean_, then we can give it a type including union of number and boolean.

```javascript
const isLoading = boolean | number;
```
