class CashRegister {
    constructor() {
      this.items = [];
    }
  
    addItem(name, price, quantity) {
      this.items.push({ name, price, quantity });
    }
  
    removeItem(name) {
      const index = this.items.findIndex(item => item.name === name);
      if (index !== -1) {
        this.items.splice(index, 1);
      } else {
        console.log(`Товар "${name}" не найден в кассе.`);
      }
    }
  
    calculateTotal() {
      return this.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    }
  
    getReceipt() {
      let receipt = 'Чек:\n';
      this.items.forEach(item => {
        receipt += `${item.name}: ${item.price} x ${item.quantity} = ${item.price * item.quantity}\n`;
      });
      receipt += `Итого: ${this.calculateTotal().toFixed(2)}\n`;
      return receipt;
    }
  }
  
  const cashRegister = new CashRegister();
  cashRegister.addItem('Яблоки', 1.5, 3);
  cashRegister.addItem('Бананы', 1.2, 5);
  cashRegister.addItem('Апельсины', 2.0, 2);
  cashRegister.removeItem('Бананы');
  console.log(cashRegister.getReceipt());
  