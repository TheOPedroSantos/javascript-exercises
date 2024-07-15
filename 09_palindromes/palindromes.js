const palindromes = function(str) {
    str = str.replace(/\s/g, '').toLowerCase();
    const reverseString = str.split("").reverse().join("");
    return str === reverseString;
};

palindromes('racecar');

// Do not edit below this line
module.exports = palindromes;
