class BMW {
    constructor(model, color, year) {
      this.model = model;
      this.color = color;
      this.year = year;
      this.mileage = 0;
    }
  
    paint(newColor) {
      this.color = newColor;
      console.log(`Цвет автомобиля изменен на: ${newColor}`);
    }
  
    drive(distance) {
      if (distance <= 0) {
        console.log("Расстояние должно быть положительным.");
        return;
      }
      this.mileage += distance;
      console.log(`Автомобиль проехал ${distance} км. Общий пробег: ${this.mileage} км.`);
    }
  
    startEngine() {
      console.log(`Двигатель автомобиля ${this.model} запущен.`);
    }
  
    displayInfo() {
      console.log(`Модель: ${this.model}`);
      console.log(`Цвет: ${this.color}`);
      console.log(`Год выпуска: ${this.year}`);
      console.log(`Пробег: ${this.mileage} км`);
    }
  }
  
  const myBMW = new BMW('X5', 'Черный', 2020);
  
  myBMW.displayInfo();
  myBMW.startEngine();
  myBMW.paint('Синий');
  myBMW.drive(120);
  myBMW.displayInfo();
  