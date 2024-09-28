class Product {
    constructor(name, price, category) {
      this.name = name;
      this.price = price;
      this.category = category;
    }
  
    getDetails() {
      return `${this.name} — ${this.price}$ [Категория: ${this.category}]`;
    }
  }
  
  class Electronics extends Product {
    constructor(name, price, warranty) {
      super(name, price, 'Electronics');
      this.warranty = warranty; 
    }
  
    getDetails() {
      return `${super.getDetails()} [Гарантия: ${this.warranty} лет]`;
    }
  }

  class Clothing extends Product {
    constructor(name, price, size) {
      super(name, price, 'Clothing');
      this.size = size; 
    }
  
    getDetails() {
      return `${super.getDetails()} [Размер: ${this.size}]`;
    }
  }

  class Book extends Product {
    constructor(name, price, author) {
      super(name, price, 'Book');
      this.author = author; 
    }
  
    getDetails() {
      return `${super.getDetails()} [Автор: ${this.author}]`;
    }
  }
 
  class Store {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    listProducts() {
      this.products.forEach(product => {
        console.log(product.getDetails());
      });
    }
  
    filterByCategory(category) {
      return this.products.filter(product => product.category === category);
    }
  
    mapProducts() {
      return this.products.map(product => ({
        name: product.name,
        price: product.price
      }));
    }
  }

  const store = new Store();
  store.addProduct(new Electronics('Ноутбук', 1500, 2));
  store.addProduct(new Clothing('Футболка', 20, 'M'));
  store.addProduct(new Book('JavaScript для начинающих', 30, 'Джон Доу'));
  store.listProducts();
  const electronics = store.filterByCategory('Electronics');
  console.log('Электроника:');
  electronics.forEach(e => console.log(e.getDetails()));ами
  const productInfo = store.mapProducts();
  console.log('Названия и цены товаров:', productInfo);
  