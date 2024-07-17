// Repeats a string a number of times
// and returns an 'ERROR' with negative numbers

const repeatString = function(str, num) {
    let result = '';
    if (num >= 1) {
        for (i = 0; i < num; i++) {
            result += str;
        } return result;
    } else if (num === 0) {
        result = '';
        return result;
    } else {
        result = 'ERROR';
        return result;
    }
};

repeatString("hey", 3);


// Do not edit below this line
module.exports = repeatString;
