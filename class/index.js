/* Since the instances are independent, they allow us to track data such as a large number of users on a website. In this example, we track 4 users and whether they are online. A real website could track hundreds... */

/* Since the instances are independent, they allow us to track data such as a large number of users on a website. In this example, we track 4 users and whether they are online. A real website could track hundreds... */

class User {
  constructor(name, isOnline) {
    this.name = name;
    this.isOnline = isOnline;
  }
}

const user1 = new User("Alice", true);
const user2 = new User("Bob", false);
const user3 = new User("Charlie", true);
const user4 = new User("Diana", false);
const user5 = new User("Eve", true);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

const users = [user1, user2, user3, user4, user5];

let onlineUsers = [];
function onlineUsersF(usersArray) {
  for (const user of usersArray) {
    if (user.isOnline) {
      onlineUsers.push(user.name);
    }
  }
  console.log(`The online users are: ${onlineUsers.join(", ")} `);
}

onlineUsersF(users);