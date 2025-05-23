//1.
function filterOutFalsy(elem1, elem2) {
    return (!elem1) ? elem1 : elem2
}

console.log(filterOutFalsy(true, 'Dog'))

//2.
function arrLength(arr) {
    return arr.length
}

console.log(arrLength([1, 2, 3]))

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

//9. for loop method
function convertToZero (arr) {
    let newArr = []
    for (let i = 0; i < arr.length; ++i){
        newArr[i] = 0
    }
    return newArr;
}

console.log(convertToZero([1, 2, 3]))

// fill method
function convertToZero (arr) {
    return new Array (arr.length).fill(0);
}

console.log(convertToZero([1, 2, 3]))

//10. for loop method
function removeApples (arr) {
    let noApples = []
    for (let i = 0; i < arr.length; ++i){
        if (arr[i] !== 'Apple'){
            noApples.push(arr[i])
        }
    }
return noApples;
}

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))

// filter method
function removeApples (arr) {
    return arr.filter(elem => elem !== 'Apple')
}

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))


//11.
function filterOutFalsy (arr) {
    let truthyValues = [];
    for (let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true){
            truthyValues.push(arr[i]);
        }
    }
    return truthyValues;
}

console.log(filterOutFalsy(["", 20, 0, null, undefined, "0"]))

//12.
function convertToBoolean (arr) {
    return arr.map (elem => !!elem)
}

console.log(convertToBoolean([500, 0, "David", "", []]))