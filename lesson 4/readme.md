# Learnings - Assertions

Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own.

```javascript
const addOrJoin = (
    a: number,
    b: number,
    action: "join" | "add"
): string | number => {
    if (action === "add") {
        return a + b;
    }
    return `${a}${b}`;
};
// if actions is 'join' then the function will return string
const result = addOrJoin(2, 3, "join") as string;
console.log(result);
```

In the above example we used type assertion for _result_ variable. Typescript infered the type of the result variable as _string | number_, but we knew that using 'join' as _action_ will return a string, therefore we told TS not to infer but use _string_ as type.

```javascript
const result = addOrJoin(2, 3, "join") as number;
```

In the above code sample, we know that the return type of _addOrJoin(2, 3, "join")_ will be a string, but we asserted the type to be _number_ and TS had no problem with it. Therefore, type assertions are useful in certain situations but we need to use them carefully.

### Use of assertions, while handling DOM

TS don't have an idea about the elements that we are using in the html, therefore when we select an element using the _id_ TS will provide it _HTMLElement | null_ type by default.
<br>
But we know that what the HTML element is and it surely exists in the DOM.<br>
Therefore, we would like to eliminate the _null_ type and provide the variable a more descriptive type.

```javascript
const myImg = document.getElementById("myImg");
```

```javascript
// giving 'myImg' variable HTMLImageElement type.
const myImg = document.getElementById("myImg") as HTMLImageElement;
```
