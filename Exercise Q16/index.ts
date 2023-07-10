// task 16:changing guest list
var guests1 = ["Ahmed", "Ali", "Hassan"]

var newGuest = "Mahad"
var newGuest1 = "danial"
var newGuest2 = "sahil"
var newGuest3 = "dawood"

guests1.unshift(newGuest1);
guests1.splice(1, 0, newGuest2);
guests1.push(newGuest3);

for (var guest1 of guests1) {
  if (guest1 === "Ali") {
    guests1[guests1.indexOf(guest1)] = newGuest
  }
}
for (var guest1 of guests1){
    var message2 =  `Dear ${guest1},

    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.

    Sincerely,
    Daniyal
  `;
  console.log(message2)
}
console.log("Unfortunately, Ali can't make it to dinner")
console.log(`I have invited ${newGuest} instead.`)
for (var guest1 of guests1){
    var message2 =  `Dear ${guest1},

    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.

    Sincerely,
    Daniyal
  `;
  console.log(message2)
}
console.log("I found a bigger dinner table, so I have invited three more guests!");
for (var guest1 of guests1){
    var message2 =  `Dear ${guest1},

    I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.

    Sincerely,
    Daniyal
  `;
  console.log(message2)
}