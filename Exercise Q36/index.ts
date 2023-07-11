// Task 36:Large Shirt
function makeShirt(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`The shirt is size ${size} and has the message '${message}' printed on it.`);
}

makeShirt();
makeShirt('Medium');
makeShirt('Small', 'Hello World!');
