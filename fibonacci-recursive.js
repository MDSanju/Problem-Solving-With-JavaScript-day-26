function fibonacciRecursive(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const fibonacciElement = fibonacciRecursive(6);
// console.log(fibonacciElement);


// recursive series
function recursiveSeries(n) {
    if (n == 0) {
        return [0];
    } else if (n == 1) {
        return [0, 1];
    }
    const fibo = recursiveSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}

const fibonacci = recursiveSeries(10);
console.log(fibonacci);