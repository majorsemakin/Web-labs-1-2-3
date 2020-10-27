// вывод в консоль IDE vs 

'use strict';
// 1.1

function Square(Value) {
    return number;
}
// 1.2

function Sum(Value1, Value2) {
    if (isNaN(Value1)) {
        return ("a - not a number");
    }
    else {
        if (isNaN(Value2)) {
            return ("b - not a number");
        }
        else return Value1 + Value2;
    }
}

// 1.3

function Array() {
    let myArray = [30, 10, "Ulikp", 70, "Answer", 100, "Number", 5, 90];
    console.log('Input data: ');
    console.log(myArray);
    let myNewArray = myArray.map((value) =>
        isNaN(value) ? value = 0 : value *= value
    )
    console.log('Answer:');
    console.log(myNewArray);
}
