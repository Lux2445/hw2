class Character {

    #name;
    #health;
  
    constructor(name, health) {
      this.#name = name;
      this.#health = health;
    }
 
    attack() {
      console.log(`${this.#name} атакует!`);
    }
  
    getName() {
      return this.#name;
    }
  }
  
  class Prince extends Character {
    constructor(name, health) {
      super(name, health);
    }
  
    attack() {
      console.log(`${this.getName()} наносит удар мечом!`);
    }
  }
  
  class Enemy extends Character {
    constructor(name, health) {
      super(name, health);
    }
  
    attack() {
      console.log(`${this.getName()} атакует с помощью заклинания!`);
    }
  }
  
  function executeAttack(character) {
    character.attack();
  }
  
  const prince = new Prince('Принц', 100);
  const enemy = new Enemy('Враг', 80);
  
  executeAttack(prince);
  executeAttack(enemy);
  