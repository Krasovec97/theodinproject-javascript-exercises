const removeFromArray = function(array, item, secondItem) {
    secondItem = secondItem ?? 0;

    if(secondItem === 0) {
        const getIndex = array.indexOf(item);
        array.splice(getIndex, 1);
    } else {
        const getFirstIndex = array.indexOf(item);
        const getSecondIndex = array.indexOf(secondItem);

        array.splice(getFirstIndex, 1) && array.splice(getSecondIndex, 1);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
