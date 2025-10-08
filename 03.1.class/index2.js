/* In this version you can add as many users as you want by creating new instances of the User class. */
class User {
  // Array estático para almacenar todas las instancias de User
  static users = [];

  constructor(name, isOnline) {
    this.name = name;
    this.isOnline = isOnline;
    // Agrega automáticamente la nueva instancia al array estático
    User.users.push(this);
  }
}

// Crear instancias de usuarios
const user1 = new User("Alice", true);
const user2 = new User("Bob", false);
const user3 = new User("Charlie", true);
const user4 = new User("Diana", false);
const user5 = new User("Eve", true);

// Puedes crear más usuarios y se agregarán automáticamente
const user6 = new User("Frank", true);

// Función para mostrar los nombres de los usuarios en línea
function onlineUsersF(usersArray) {
  // Filtra los usuarios en línea y obtiene solo sus nombres
  const onlineUsers = usersArray
    .filter(user => user.isOnline)
    .map(user => user.name);

  console.log(`The online users are: ${onlineUsers.join(", ")}`);
}

// Llama la función usando el array estático de la clase User
onlineUsersF(User.users);