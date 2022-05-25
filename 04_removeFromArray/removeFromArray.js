const removeFromArray = function(array, ...items) {
    items.forEach((item) => {
        if(array.includes(item)){
                array.splice(array.indexOf(item), 1);
    }
    })
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
