const userName = "Max";
// userName = "Maximilian";
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result = a + b;
//   return result;
// }

// const add = (a: number, b: number) => a + b;

// const printOutput: (output: string | number) => void => output => {
//   console.log(output);
// }

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.5);
console.log(addedNumbers);

const hobbies = ["Running", "Workout"];
const [hobby1, hobby2] = hobbies;
console.log(hobbies, hobby1, hobby2);
