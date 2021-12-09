// making positive or negative any number to positive number
const myNumber = -5;
const output = Math.abs(myNumber);
console.log(output);




// making any fractional number to upper integer number
const numberOne = 21.0001;
const getOutputOne = Math.ceil(numberOne);
// console.log(getOutputOne);




// making any fractional number to lower integer number
const numberTwo = 25.999999;
const getOutputTwo = Math.floor(numberTwo);
// console.log(getOutputTwo);




// making any fractional number to nearest integer number
const numberThree = 30.25;
const numberFour = 30.75;


const getOutputThree = Math.round(numberThree);
const getOutputFour = Math.round(numberFour);

// console.log(getOutputThree);
// console.log(getOutputFour);




// getting a random number

// it'll work (0-1)
const randomNumber = Math.random();
// console.log(randomNumber);

// it'll work within (1-6) ludo
const randomNumberTwo = Math.random() * 6;
const ludoMaker = Math.round(randomNumberTwo);
// console.log(ludoMaker);




// this is a lottary
const selected = [];
for (let i = 0; i < 10; i++) {
    const random = Math.random();
    const between = random * 100;
    const rounded = Math.round(between);
    if (selected.indexOf(rounded) == -1) {
        selected.push(rounded);
    } else {
        console.log('found duplicate', selected, rounded);
    }
}
// console.log(selected);