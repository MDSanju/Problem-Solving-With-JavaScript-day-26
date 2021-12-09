const businessMan = 450;
const minister = 350;
const ig = 550;

// compare between two numbers
// if (businessMan > minister) {
//     console.log('Business Man Won!');
// } else {
//     console.log('Minister Won!')
// }




// compare among three person or numbers
// if (businessMan > minister && businessMan > ig) {
//     console.log('Businessman won');
// } else if (minister > businessMan && minister > ig) {
//     console.log('Minister won');
// } else {
//     console.log('IG won');
// }




// another way to compare
var max = Math.max(businessMan, minister, ig);
console.log('Win Person Get:', max);


// another way with function
function getLargest(numberOne, numberTwo, numberThree) {
    if (numberOne > numberTwo && numberOne > numberThree) {
        return numberOne;
    } else if (numberTwo > numberOne && numberTwo > numberThree) {
        return numberTwo;
    } else {
        return numberThree;
    }
}

const getResult = getLargest(320, 560, 800);
console.log(getResult);


// my task
function getSmallest(smallOne, smallTwo, smallThree) {
    if (smallOne < smallTwo && smallOne < smallThree) {
        return smallOne;
    } else if (smallTwo < smallOne && smallTwo < smallThree) {
        return smallTwo;
    } else {
        return smallThree;
    }
}

const getTaskResult = getSmallest(320, 160, 500);
console.log(getTaskResult);