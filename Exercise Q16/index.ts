// task 16:Shrinking Guest list
var guests2 = [ 'danial', 'sahil', 'Ahmed', 'Mahad', 'Hassan', 'dawood' ]
console.log("I can only invite two people for dinner.");

while (guests2.length > 2) {
  const guest = guests2.pop();
  console.log(`Sorry, ${guest}, I can't invite you to dinner.`);
}
console.log(`I'm still inviting ${guests2[0]} and ${guests2[1]} to dinner.`);

guests2.pop();
guests2.pop();

console.log("My guest list is now empty.");

