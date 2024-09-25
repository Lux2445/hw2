class InstagramStory {
    static totalStories = 0;
  
    constructor(title) {
      this.#title = title;   
      this.#views = 0;    
      InstagramStory.totalStories+1; 
    }
    #title;
    #views;
  
    addView() {
      this.#views++;
      console.log(История `"${this.#title}" просмотрена! Общее количество просмотров: ${this.#views}`);
    }
  
    getInfo() {
      return `История: ${this.#title}Просмотров: ${this.#views}`;
    }
    static getTotalStories() {
      return `Общее количество созданных историй: ${InstagramStory.totalStories}`;
    }
  }
  
  const story1 = new InstagramStory('Мой первый день на море');
  const story2 = new InstagramStory('Закат на пляже');
  
  
  story1.addView(); 
  story2.addView(); 
  
  console.log(story1.getInfo()); 
  console.log(InstagramStory.getTotalStories()); 