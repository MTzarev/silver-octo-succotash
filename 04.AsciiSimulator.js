function asciiSumator(input) {
    let text = input.pop();
    let newArr = [input[0].charCodeAt(), input[1].charCodeAt()];
    let sorted = newArr.sort((a, b) => a - b);
    let start = sorted[0];
    let end = sorted[1];
    let sum = 0;
    for (let char of text) {
        let value = char.charCodeAt();
        if (value > start && value < end) {
            sum += value;
        }
    }
    console.log(sum);
}
asciiSumator(['@',
    '1',
    'dsg12gr5653feee5'])