// task 15:More guests
var guests = ['Ahmed', 'Ali', 'Hassan'];
console.log('I found a bigger dinner table!');
// Add one new guest to the beginning of the array
guests.unshift('Usman');
// Add one new guest to the middle of the array
guests.splice(2, 0, 'Faizan');
// Add one new guest to the end of the array
guests.push('Waleed');
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ",\n\n  I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.\n\n  Sincerely,\n  Daniyal\n"));
}
