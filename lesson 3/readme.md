# Learnings - type aliases, literal types, functions, never type

**1. Type Aliases:**: Type aliases follows _DRY (don't repeat yourself)_. If we have a type that is being used at multiple places, we can create a type alias for the same and use it instead of repeating ourself.

```javascript
type stringOrNumber = string | number;
type student = {
    email: string,
    id: stringOrNumber,
    isActive: boolean,
};
type employee = {
    email: string,
    id: stringOrNumber,
};
```

**2. Literal Types:**: Literal Types are used when we want to assign a specific value to a variable from a set of values.<br>
In the example code below _user.type_ is of type _userType_ therefore, it can have only three values: <br>
"admin", "customer" or "user"

```javascript
type userType = "admin" | "customer" | "user";

type user = {
    id: stringOrNumber,
    name: string,
    type: userType,
    lastActive: Date,
};
```

**3. Optional Parameters:** Typescript also offers us to have optional parameters in the functions. <br>
In the code below, _c_ is an optional parameter.

```javascript
function sumThreeNums(a: number, b: number, c?: number): number {
    if (typeof c === "number") return a + b + c;
    return a + b;
}
```

**Remember:** Optional parameters are always right to (or at last) the required parameters in the function definition.

**4. Never type:**: Imagine you're writing a set of instructions (a function) for a computer. If you use the 'never' type, it means you're telling the computer, _"Hey, once you start doing this task, you're not coming back to the starting point, or you're going to encounter an issue (like an error) that will interrupt the process."_

```javascript
// case when there is an exception
const cannotHappen = (): never => {
    throw new Error("not possible");
};

// case when the function is not going to end executing
function keepProcessing(): never {
    while (true) {
        console.log("I always does something and never ends.");
    }
}
```
