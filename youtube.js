class YouTubeVideo {
    #title;
    #likes;
    #dislikes;
    #views;
  
    constructor(title) {
      this.#title = title;
      this.#likes = 0;
      this.#dislikes = 0;
      this.#views = 0;
    }
  
    like() {
      this.#likes++;
      console.log(`Видео "${this.#title}" получило лайк! Общее количество лайков: ${this.#likes}`);
    }
  
    dislike() {
      this.#dislikes++;
      console.log(`Видео "${this.#title}" получило дизлайк! Общее количество дизлайков: ${this.#dislikes}`);
    }
  
    addView() {
      this.#views++;
      console.log(`Видео "${this.#title}" просмотрено! Общее количество просмотров: ${this.#views}`);
    }
  
    getInfo() {
      return `
      Видео: ${this.#title}
      Лайков: ${this.#likes}
      Дизлайков: ${this.#dislikes}
      Просмотров: ${this.#views}
      `;
    }
  }
  
  const myVideo = new YouTubeVideo('Урок JavaScript');
  
  myVideo.like();
  myVideo.dislike();
  myVideo.addView();
  
  console.log(myVideo.getInfo());
  