// Task 32:Ordinal Number
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    if (number === 1) {
        console.log('1st');
    } else if (number === 2) {
        console.log('2nd');
    } else if (number === 3) {
        console.log('3rd');
    } else {
        console.log(`${number}th`);
    }
}
