// Task 31: Checking Username
let currentUsers: string[] = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eric'];
let newUsers: string[] = ['Frank', 'George', 'Henry', 'Alice', 'BOB'];

for (let newUser of newUsers) {
    if (currentUsers.map(user => user.toLowerCase()).includes(newUser.toLowerCase())) {
        console.log(`The username '${newUser}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}
