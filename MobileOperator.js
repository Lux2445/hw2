class MobileOperator {
    constructor() {
      this.clients = [];
    }
  
    addClient(name, balance) {
      this.clients.push({ name, balance });
    }
  
    sortClientsByBalance() {
      this.clients.sort((a, b) => a.balance - b.balance);
    }
  
    reverseClientList() {
      return [...this.clients].reverse();
    }
  
    getClientList() {
      return this.clients.map(client => `${client.name}: баланс ${client.balance}`);
    }
  }
  
  const mobileOperator = new MobileOperator();
  mobileOperator.addClient('Иван', 100);
  mobileOperator.addClient('Анна', 200);
  mobileOperator.addClient('Сергей', 50);
  mobileOperator.addClient('Мария', 150);
  mobileOperator.sortClientsByBalance();
  console.log('Клиенты в обратном порядке:', mobileOperator.reverseClientList());
  console.log('Текущий список клиентов:', mobileOperator.getClientList());
  