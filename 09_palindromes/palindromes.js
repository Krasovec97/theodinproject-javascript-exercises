const palindromes = function (string) {
    const CharArray = string.replace(/\W|_/g, '').toLowerCase().split('');
    const reverseCharArray = CharArray.slice().reverse();
    
    const reverseString = reverseCharArray.join('');
    const pureString = CharArray.join('');

    return pureString === reverseString ? true : false;

    
};

// Do not edit below this line
module.exports = palindromes;
