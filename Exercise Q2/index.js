// task 2 :store pesron name and print it in title case lower case and upper case
var name1 = ("ALi");
// to lower case
var lowercaseName = name1.toLowerCase();
console.log("Lower case:", lowercaseName);
// to upper case
var uppercaseName = name1.toUpperCase();
console.log("Upper case name:", uppercaseName);
// to title case
var firstChar = name1.slice(0, 1);
var firstCharUpperCase = firstChar.toUpperCase();
var restOfName = name1.slice(1, name1.length);
var titleCaseName = firstCharUpperCase + restOfName.toLowerCase();
console.log("Title Case Name:", titleCaseName);
