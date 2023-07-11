// Task 42:Unchanged Magician
function showMagicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}

let magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];
let greatMagicians: string[] = makeGreat(magicians);

console.log('Original magicians:');
showMagicians(magicians);

console.log('Great magicians:');
showMagicians(greatMagicians);
