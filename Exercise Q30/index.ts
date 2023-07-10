// Question 30: Make a array of five or more usernames, including the name 'admin'

const usernames = ['admin', 'Eric', 'Alice', 'Bob', 'Charlie'];

for (const username of usernames) {
  if (username === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
