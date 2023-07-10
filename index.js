// Task 1 : Store person name in variable and print message to that person
var namee = "Eric";
console.log("Hello ".concat(namee, ", would you like to learn some python today?"));
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
// task 3: Print the name and qoute of author
var qoute = '\"A person who never made a mistake never tried anything new.\"';
var author = 'Albert Einstein';
console.log(author, 'once said,', qoute);
// task 4: repeat task 3 but this time store prson name in famous_person and store message in message variable
var famous_person = 'Albert Einstein';
var qoute = '\"A person who never made a mistake never tried anything new.\"';
var message = (famous_person + " once said, " + qoute);
console.log(message);
// task 5: Stripping Name
var name3 = "\t Hamza \n";
console.log("Name with white space:", name3);
// stripping Name
var stippedName = name3.trim();
console.log("Name without white space:", stippedName);
// task 6: write mul,sub,add and div operator that all result in 8 
function numberEight() {
    console.log(2 + 6);
    console.log(10 - 2);
    console.log(4 * 2);
    console.log(16 / 2);
}
numberEight();
// task 7 : write four lines with the number 8 appearing once on each line
for (var i = 0; i < 4; i++) {
    console.log(5 + 3);
}
// task 8: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message
var favouriteNumber = "99";
var message = "My Favourite number is ".concat(favouriteNumber, ".");
console.log(message);
// task 9:Adding Comments
// This program prints my favorite number.
//
// Author: Azeem
// Date: 2023-07-09
// This program print favourite number
var favoriteNumber = 23;
console.log("My favorite number is ".concat(favoriteNumber, "."));
// task 10: names of a few of your friends in a array called names
var friendNames = ["Ali", "Hamza", "Haider", "Muzamil"];
for (var _i = 0, friendNames_1 = friendNames; _i < friendNames_1.length; _i++) {
    var names = friendNames_1[_i];
    console.log(names);
}
// task 11:Greetings messages
var friendNames = ["Ali", "Hamza", "Haider", "Muzamil"];
for (var _a = 0, friendNames_2 = friendNames; _a < friendNames_2.length; _a++) {
    var names = friendNames_2[_a];
    var message = ("Hello ".concat(names, ", how are you today?"));
    console.log(message);
}
// task 12:Motor cycle lsit array
var motorcycles = ["Honda", "Suzuki", "Kawasaki", "Yamaha"];
for (var _b = 0, motorcycles_1 = motorcycles; _b < motorcycles_1.length; _b++) {
    var motorcycle = motorcycles_1[_b];
    var favorite = "I would like to own a ".concat(motorcycle, " motorcycle");
    console.log(favorite);
}
// task 13:Guest invite list
var guests = ["Ahmed", "Ali", "Hassan"];
for (var _c = 0, guests_1 = guests; _c < guests_1.length; _c++) {
    var guest = guests_1[_c];
    var message1 = "Dear ".concat(guest, ",\n\n    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.\n\n    Sincerely,\n    Daniyal\n  ");
    console.log(message1);
}
// task 14:changing guest list
var guests1 = ["Ahmed", "Ali", "Hassan"];
var newGuest = "Mahad";
for (var _d = 0, guests1_1 = guests1; _d < guests1_1.length; _d++) {
    var guest1 = guests1_1[_d];
    if (guest1 === "Ali") {
        guests1[guests1.indexOf(guest1)] = newGuest;
    }
}
for (var _e = 0, guests1_2 = guests1; _e < guests1_2.length; _e++) {
    var guest1 = guests1_2[_e];
    var message2 = "Dear ".concat(guest1, ",\n\n    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.\n\n    Sincerely,\n    Daniyal\n  ");
    console.log(message2);
}
console.log("Unfortunately, Ali can't make it to dinner");
console.log("I have invited ".concat(newGuest, " instead."));
for (var _f = 0, guests1_3 = guests1; _f < guests1_3.length; _f++) {
    var guest1 = guests1_3[_f];
    var message2 = "Dear ".concat(guest1, ",\n\n    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.\n\n    Sincerely,\n    Daniyal\n  ");
    console.log(message2);
}
// task 15:
var guests = ["Ahmed", "Ali", "Hassan"];
for (var _g = 0, guests_2 = guests; _g < guests_2.length; _g++) {
    var guest = guests_2[_g];
    var message1 = "Dear ".concat(guest, ",\n\n    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.\n\n    Sincerely,\n    Daniyal\n  ");
    console.log(message1);
}
// task 14:changing guest list
var guests1 = ["Ahmed", "Ali", "Hassan"];
var newGuest = "Mahad";
var newGuest1 = "danial";
var newGuest2 = "sahil";
var newGuest3 = "dawood";
guests1.unshift(newGuest1);
guests1.splice(1, 0, newGuest2);
guests1.push(newGuest3);
for (var _h = 0, guests1_4 = guests1; _h < guests1_4.length; _h++) {
    var guest1 = guests1_4[_h];
    if (guest1 === "Ali") {
        guests1[guests1.indexOf(guest1)] = newGuest;
    }
}
for (var _j = 0, guests1_5 = guests1; _j < guests1_5.length; _j++) {
    var guest1 = guests1_5[_j];
    var message2 = "Dear ".concat(guest1, ",\n\n    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.\n\n    Sincerely,\n    Daniyal\n  ");
    console.log(message2);
}
console.log("Unfortunately, Ali can't make it to dinner");
console.log("I have invited ".concat(newGuest, " instead."));
for (var _k = 0, guests1_6 = guests1; _k < guests1_6.length; _k++) {
    var guest1 = guests1_6[_k];
    var message2 = "Dear ".concat(guest1, ",\n\n    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.\n\n    Sincerely,\n    Daniyal\n  ");
    console.log(message2);
}
console.log("I found a bigger dinner table, so I have invited three more guests!");
for (var _l = 0, guests1_7 = guests1; _l < guests1_7.length; _l++) {
    var guest1 = guests1_7[_l];
    var message2 = "Dear ".concat(guest1, ",\n\n    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.\n\n    Sincerely,\n    Daniyal\n  ");
    console.log(message2);
}
// task 17: 
var guests2 = ['danial', 'sahil', 'Ahmed', 'Mahad', 'Hassan', 'dawood'];
console.log("I can only invite two people for dinner.");
while (guests.length > 2) {
    var guest_1 = guests.pop();
    console.log("Sorry, ".concat(guest_1, ", I can't invite you to dinner."));
}
console.log("I'm still inviting ".concat(guests[0], " and ").concat(guests[1], " to dinner."));
guests.pop();
guests.pop();
console.log("My guest list is now empty.");
