class AuthSystem {
    constructor() {
      this.users = new Map();
    }
  
    register(username, password, name, email) {
      if (this.users.has(username)) {
        console.log(`Пользователь с логином "${username}" уже существует.`);
      } else {
        this.users.set(username, { password, name, email });
        console.log(`Пользователь "${username}" успешно зарегистрирован.`);
      }
    }
  
    login(username, password) {
      if (this.users.has(username)) {
        const user = this.users.get(username);
        if (user.password === password) {
          return `Добро пожаловать, ${user.name}! Вы успешно авторизованы.`;
        } else {
          return 'Неверный пароль.';
        }
      } else {
        return `Пользователь с логином "${username}" не найден.`;
      }
    }
  
    getUserInfo(username) {
      if (this.users.has(username)) {
        const { name, email } = this.users.get(username);
        return `Имя: ${name}, Email: ${email}`;
      } else {
        return `Пользователь с логином "${username}" не найден.`;
      }
    }
  }
  
  const authSystem = new AuthSystem();
  authSystem.register('user1', 'password123', 'Alice', 'alice@example.com');
  authSystem.register('user2', 'mypassword', 'Bob', 'bob@example.com');
  console.log(authSystem.login('user1', 'password123'));
  console.log(authSystem.login('user2', 'wrongpassword'));
  console.log(authSystem.getUserInfo('user1'));
  console.log(authSystem.getUserInfo('user3'));
  