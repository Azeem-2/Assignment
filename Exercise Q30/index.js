// Question 30: Make a array of five or more usernames, including the name 'admin'
var usernames = ['admin', 'Eric', 'Alice', 'Bob', 'Charlie'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
