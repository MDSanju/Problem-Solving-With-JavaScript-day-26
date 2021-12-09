function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let putNumbers = numbers[i];
        sum = sum + putNumbers;
    }
    return sum;
}

const numbers = [10, 20, 30, 15];
const total = arrayTotal(numbers);
console.log(total);








let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum = sum + i;
}
console.log(sum);