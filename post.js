class Post {
    constructor(title, content, author) {
      this.title = title;
      this.content = content;
      this.author = author;
      this.likes = 0;
    }
  
    updateContent(newContent) {
      this.content = newContent;
      console.log(`Текст поста обновлен: ${newContent}`);
    }
  
    addLike() {
      this.likes++;
      console.log(`Посту добавлен лайк. Всего лайков: ${this.likes}`);
    }
  
    deletePost() {
      this.title = '';
      this.content = '';
      this.author = '';
      this.likes = 0;
      console.log('Пост был удален.');
    }
  
    displayPost() {
      if (this.title === '' && this.content === '' && this.author === '') {
        console.log('Пост был удален.');
      } else {
        console.log(`Пост: ${this.title}`);
        console.log(`Автор: ${this.author}`);
        console.log(`Текст: ${this.content}`);
        console.log(`Лайков: ${this.likes}`);
      }
    }
  }
  const post1 = new Post('Мой первый пост', 'Это мой первый пост в социальной сети!', 'Иван Иванов');
  post1.displayPost();
  post1.addLike();
  post1.updateContent('Обновленный текст моего первого поста.');
  post1.displayPost();
  post1.deletePost();
  post1.displayPost();
  