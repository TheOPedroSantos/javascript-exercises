const reverseString = function(str) {
    const reverseText = str.split("").reduce((acc, char) => char + acc, "");
    return reverseText;
};

reverseString("hello there");

// Do not edit below this line
module.exports = reverseString;
