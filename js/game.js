class Game {
  constructor() {
    this.hero = new Hero();
    this.boss = new Boss();

    
    this.memeArray = [];

    this.coffeeArray = [];

    this.briefArray = [];

    this.score = new Score();

    this.timer = 0;
    this.delayMeme = 240;
    this.delayCoffee = 180;

    this.damage = this.score - 5;

    this.GameOn = this.score >= 0;

    


  }

  // métodos

  memeSpawn = () => {
    if (this.timer % 600 === 0) {
      let newMeme = new Meme();
      this.memeArray.push(newMeme);
    }
  };

  coffeeSpawn = () => {
    if (this.timer % 350 === 0) {
      let newCoffee = new Coffee();
      this.coffeeArray.push(newCoffee);
    }
  };



  briefSpawn = () => {
    if (this.timer % 120 === 0) {
      let newBrief = new Brief();
      this.briefArray.push(newBrief);
    }
  };


  collisionHeroVsBrief = () => {

    this.briefArray.forEach((eachBrief) => {

      if (
        eachBrief.x < this.hero.x + this.hero.w &&
        eachBrief.x + eachBrief.w > this.hero.x &&
        eachBrief.y < this.hero.y + this.hero.h &&
        eachBrief.y + eachBrief.h > this.hero.y
      ) {
        this.damage
      } 

    })


  }

  gameOver () {

      this.isGameOn < 0;





  } 




  gameLoop = () => {
    this.hero.gravityEffect();

    this.memeArray.forEach((eachMeme) => {
      eachMeme.fallingMovement();
    });

    this.coffeeArray.forEach((eachCoffee) => {
      eachCoffee.fallingMovement();
    });

    this.briefArray.forEach((eachBrief) => {
      eachBrief.throwingMovement();
    });

    if (this.timer > this.delayMeme) {
      this.memeSpawn();
    } if (this.timer > this.delayCoffee) {
      this.coffeeSpawn();
    } 

    this.briefSpawn();


    this. collisionHeroVsBrief ()
    

    
    //esta es la recursión
    this.timer++;

    // if (this.GameOn === true) {
      requestAnimationFrame(this.gameLoop);
    
   
  };
}
