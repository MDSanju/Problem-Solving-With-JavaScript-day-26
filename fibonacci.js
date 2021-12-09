function fibonacci(num) {
    if (typeof num != 'number') {
        return 'Please give me a valid number!';
    } else if (num < 2) {
        return 'Please enter a positive number greater than 1!';
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSeries = fibonacci(10);
console.log(fiboSeries);