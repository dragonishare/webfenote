function range(start, end) {
    if (arguments.length < 2) {
        end = start;
        start = 0;
        console.log('start: ', start, 'end: ', end);
    }
    var result = [];
    for (var i = start; i <= end; i++) {
        result.push(i);
    }
    console.log('result: ', result);
    return result;
}

function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
// console.log(sum(range(1,10)));
