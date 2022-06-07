const findTheOldest = function(people) {

        return people.reduce((prevValue, currentValue) => {
            if(prevValue.hasOwnProperty('yearOfDeath') && currentValue.hasOwnProperty('yearOfDeath')){
                const getPrevYears = prevValue.yearOfDeath - prevValue.yearOfBirth;
                const getCurrentYears = currentValue.yearOfDeath - currentValue.yearOfBirth
                return getPrevYears > getCurrentYears ? prevValue : currentValue;
            } else {
                const today = new Date().getFullYear();
                const getPrevDateOfBirth = today - prevValue.yearOfBirth;
                const getCurrentDateOfBirth = today - currentValue.yearOfBirth;
                return getCurrentDateOfBirth > getPrevDateOfBirth ? currentValue : prevValue;
            }

        })
};

// Do not edit below this line
module.exports = findTheOldest;
