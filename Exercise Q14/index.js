// task 14:changing guest list
var guests1 = ["Ahmed", "Ali", "Hassan"];
var newGuest = "Mahad";
for (var _i = 0, guests1_1 = guests1; _i < guests1_1.length; _i++) {
    var guest1 = guests1_1[_i];
    if (guest1 === "Ali") {
        guests1[guests1.indexOf(guest1)] = newGuest;
    }
}
for (var _a = 0, guests1_2 = guests1; _a < guests1_2.length; _a++) {
    var guest1 = guests1_2[_a];
    var message2 = "Dear ".concat(guest1, ",\n\n    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.\n\n    Sincerely,\n    Daniyal\n  ");
    console.log(message2);
}
console.log("Unfortunately, Ali can't make it to dinner");
console.log("I have invited ".concat(newGuest, " instead."));
for (var _b = 0, guests1_3 = guests1; _b < guests1_3.length; _b++) {
    var guest1 = guests1_3[_b];
    var message2 = "Dear ".concat(guest1, ",\n\n    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.\n\n    Sincerely,\n    Daniyal\n  ");
    console.log(message2);
}
