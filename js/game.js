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
    if (this.timer % 60 === 0) {
      let newBrief = new Brief();
      this.briefArray.push(newBrief);
    }
  };

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

    // this.hero.resetPosition();

    // console.log("ejecutando gameLoop")
    //esta es la recursión
    this.timer++;
    requestAnimationFrame(this.gameLoop);
  };
}
