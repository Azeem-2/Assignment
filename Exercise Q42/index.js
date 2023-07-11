// Task 42:Unchanged Magician
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
var magicians = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];
var greatMagicians = makeGreat(magicians);
console.log('Original magicians:');
showMagicians(magicians);
console.log('Great magicians:');
showMagicians(greatMagicians);
