// task 16:changing guest list
var guests1 = ["Ahmed", "Ali", "Hassan"];
var newGuest = "Mahad";
var newGuest1 = "danial";
var newGuest2 = "sahil";
var newGuest3 = "dawood";
guests1.unshift(newGuest1);
guests1.splice(1, 0, newGuest2);
guests1.push(newGuest3);
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
console.log("I found a bigger dinner table, so I have invited three more guests!");
for (var _c = 0, guests1_4 = guests1; _c < guests1_4.length; _c++) {
    var guest1 = guests1_4[_c];
    var message2 = "Dear ".concat(guest1, ",\n\n    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.\n\n    Sincerely,\n    Daniyal\n  ");
    console.log(message2);
}
