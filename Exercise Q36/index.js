// Task 36:Large Shirt
function makeShirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt is size ".concat(size, " and has the message '").concat(message, "' printed on it."));
}
makeShirt();
makeShirt('Medium');
makeShirt('Small', 'Hello World!');
