class Reel {
    constructor(title, duration) {
      this.title = title;
      this.duration = duration;
      this.likes = 0;
      this.views = 0;
    }
  
    like() {
      this.likes++;
      console.log(`Рилс "${this.title}" получил лайк! Общее количество лайков: ${this.likes}`);
    }
  
    addView() {
      this.views++;
      console.log(`Рилс "${this.title}" просмотрен! Общее количество просмотров: ${this.views}`);
    }
  
    getInfo() {
      return `Рилс: ${this.title}Длительность: ${this.duration} секундЛайков: ${this.likes}Просмотров: ${this.views}`;
    }
  }
  
  const myReel = new Reel('Мой первый рилс', 30);
  
  myReel.like();
  myReel.addView();
  console.log(myReel.getInfo());
  