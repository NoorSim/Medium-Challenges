//1.
function filterOutFalsy(elem1, elem2) {
    return (!elem1) ? elem1 : elem2
}

console.log(filterOutFalsy(true, 'Dog'))

//2.
function arrLength(arr) {
    return arr.length
}

console.log(arrLength([]))

//3.
function lastElem(arr) {
    return arr[arr.length - 1]
}

console.log(lastElem([null, 5, false]))

//4.
function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(arrSum([2, 2, 2]))

//5.
function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; ++i) {
        sum = sum + i;
    }
    return sum;
}

console.log(progressiveSum([3]))

//6.
function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }

    return timerMinutes + ':' + timerSeconds
}

console.log(calcTime(70))

//7.
function getMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMax([-300, -100, -200]))

//8.
function reverseString(str) {
    let reversedString = '';
    for (let i = 0; i < str.length; ++i) {
        reversedString = str[i] + reversedString
    }
    return reversedString;
}

console.log(reverseString('This is cool'))
