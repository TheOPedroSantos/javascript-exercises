const sumAll = function(start, end) {
    if (start > end) {
        [start, end] = [end, start];
    }
    if (isNaN(start) || isNaN(end) || typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR'
    }
    if (start < 0 || end < 0) {
        return 'ERROR'
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// typeof start !== 'number' || typeof end !== 'number' || isNaN(start) || isNaN(end)

// Do not edit below this line
module.exports = sumAll;
