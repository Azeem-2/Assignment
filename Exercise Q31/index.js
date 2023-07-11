// Task 31: Checking Username
var currentUsers = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eric'];
var newUsers = ['Frank', 'George', 'Henry', 'Alice', 'BOB'];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    if (currentUsers.map(function (user) { return user.toLowerCase(); }).includes(newUser.toLowerCase())) {
        console.log("The username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
