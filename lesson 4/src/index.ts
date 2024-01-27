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

const myImg = document.getElementById("myImg") as HTMLImageElement;
