// Task 41:Great Magician
function showMagicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
}

let magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];
makeGreat(magicians);
showMagicians(magicians);
