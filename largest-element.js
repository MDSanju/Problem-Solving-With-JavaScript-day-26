// find the largest element of an array
function largestElement(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        let elements = numbers[i];
        if (elements > largest) {
            largest = elements
        }
    }
    return largest;
}

const numbers = [16, 23, 28, 37, 78, 48, 34];
const getResult = largestElement(numbers);
console.log(getResult);




// find the lowest element of an array
function findLowestElement(arrayNumbers) {
    let lowest = arrayNumbers[0];
    for (let i = 0; i < arrayNumbers.length; i++) {
        let element = arrayNumbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const arrayNumbers = [46, 74, 85, 51, 15, 89];
const getLowest = findLowestElement(arrayNumbers);
console.log(getLowest);