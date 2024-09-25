class Doll {
    #name
    #age
    #outfit 

    constructor(name, age, outfit){
        this.#name = name;
        this.#age = age;
        this.#outfit = outfit;
    }

    getInfo(){
        return `имя : ${this.#name}  возраст: ${this.#age} наряд: ${this.#outfit}`
    }

    changeOutfit(newOutfit) {
        this.#outfit = newOutfit;
        console.log(`Наряд изменён на: ${newOutfit}`);
      }
}

const barbie = new Doll('Барби', 25, 'розовое платье');
const ken = new Doll('Кен', 26, 'костюм');


console.log(barbie.getInfo()); 
console.log(ken.getInfo()); 

barbie.changeOutfit('синее платье');
console.log(barbie.getInfo());