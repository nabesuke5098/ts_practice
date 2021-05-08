"use strict";
const userName = "Max";
let age = 30;
age = 29;
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => {
        console.log(event);
    });
}
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.5);
console.log(addedNumbers);
//# sourceMappingURL=app.js.map