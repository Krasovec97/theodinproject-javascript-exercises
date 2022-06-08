const palindromes = function (string) {
    const charArray = string.replace(/\W|_/g, '').toLowerCase().split('');
    const reverseCharArray = charArray.slice().reverse();
    
    const reverseString = reverseCharArray.join('');
    const pureString = charArray.join('');

    return pureString === reverseString;

    
};

// Do not edit below this line
module.exports = palindromes;
