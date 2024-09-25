class Transport {
    move() {
      console.log("Транспорт движется");
    }
  }
  
  class Car extends Transport {
    move() {
      console.log("Машина едет по дороге");
    }
  }
  
  class Bicycle extends Transport {
    move() {
      console.log("Велосипед едет по тротуару");
    }
  }
  
  function startTransport(transport) {
    transport.move();
  }
  
  const myCar = new Car();
  const myBicycle = new Bicycle();
  
  startTransport(myCar);   
  startTransport(myBicycle); 