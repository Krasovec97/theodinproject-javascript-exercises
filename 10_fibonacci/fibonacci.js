const fibonacci = function(num) {
    if(num < 0) {
        return "OOPS";
    }

    if(+num === 1) {
        return 1;
    }

    const convertedNumber = +num;
    let numArray = Array.from({length: convertedNumber}, (value, index) => index);

    const fibArray = numArray.reduce((prevValue, currentValue, curIndex) => {
        prevValue.push((curIndex <= 1) ? curIndex : prevValue[curIndex-2] + prevValue[curIndex-1])
        return prevValue;
    }, [])


    return fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
}

// Do not edit below this line
module.exports = fibonacci;
