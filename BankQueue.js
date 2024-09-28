class BankQueue {
    constructor() {
      this.queue = [];
    }
  
    addClient(name) {
      this.queue.push(name);
    }
  
    serveClient() {
      if (this.queue.length > 0) {
        return this.queue.shift();
      } else {
        return 'Очередь пуста, нет клиентов для обслуживания.';
      }
    }
  
    getQueue() {
      return this.queue.length > 0 ? this.queue : 'Очередь пуста';
    }
  }
  
  const bankQueue = new BankQueue();
  bankQueue.addClient('Иван');
  bankQueue.addClient('Анна');
  bankQueue.addClient('Сергей');
  console.log(bankQueue.serveClient());
  console.log(bankQueue.getQueue());
  bankQueue.addClient('Мария');
  console.log(bankQueue.serveClient());
  console.log(bankQueue.getQueue());
  