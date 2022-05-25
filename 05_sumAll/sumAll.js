const sumAll = function(fromNum, toNum) {
    if(checkNum(fromNum, toNum)){
    var numberContainer = [];

    if(toNum < fromNum) {
        for (var i = toNum; i <= fromNum; i++) {
            numberContainer.push(i);
        }
    } else {
        for (var i = fromNum; i <= toNum; i++) {
            numberContainer.push(i);
        }
    }        

    const sum = numberContainer.reduce((previousValue, nextValue) => previousValue + nextValue);
    return sum;
    } else {
        return "ERROR";
    }
};

const checkNum = (num1, num2) => {
    const validNumber = (Number.isFinite(num1) && Number.isFinite(num2)) && (num1 >= 0 && num2 >= 0);
    return validNumber;
}

// Do not edit below this line
module.exports = sumAll;
