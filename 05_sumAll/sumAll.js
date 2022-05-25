const sumAll = function (...num) {
    if(checkNum(...num)){
    const maxNumber = Math.max(...num);
    const filledArray = Array.from({length: maxNumber + 1}, (element, index) => index);

    return filledArray.reduce((previousValue, nextValue) => previousValue + nextValue);
    } else {
        return "ERROR";
    }
};

const checkNum = (...nums) => {
    const validNumber = nums.map((number) => {
    if(Number.isFinite(number) && (number >= 0)){
        return true;
        } else {
        return false;
        }
    });
    
    return validNumber.every(bool => bool);
};


// Do not edit below this line
module.exports = sumAll;
