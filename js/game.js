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
    this.bonus = this.score + 5;

    this.GameOn = this.score >= 0;
  }

  // métodos

  memeSpawn = () => {
    if (this.timer % 600 === 0) {
      let newMeme = new Meme();
      this.memeArray.push(newMeme);
    }
  };

  collisionHeroVsMeme = () => {
    this.memeArray.forEach((eachMeme) => {
      if (
        eachMeme.x < this.hero.x + this.hero.w &&
        eachMeme.x + eachMeme.w > this.hero.x &&
        eachMeme.y < this.hero.y + this.hero.h &&
        eachMeme.y + eachMeme.h > this.hero.y
      ) {
        this.bonus;
        console.log("bonus meme");
        this.memeArray[0].node.remove();
        this.memeArray.shift();
      }
    });
  };

  memeScreenDissapear = () => {
    if (this.memeArray.length > 0) {
      if (this.memeArray[0].y > 385) {
        this.memeArray.shift();
      }
    }
  };



  coffeeSpawn = () => {
    if (this.timer % 350 === 0) {
      let newCoffee = new Coffee();
      this.coffeeArray.push(newCoffee);
    }
  };

  collisionHeroVsCoffee = () => {
    this.coffeeArray.forEach((eachCoffee) => {
      if (
        eachCoffee.x < this.hero.x + this.hero.w &&
        eachCoffee.x + eachCoffee.w > this.hero.x &&
        eachCoffee.y < this.hero.y + this.hero.h &&
        eachCoffee.y + eachCoffee.h > this.hero.y
      ) {
        this.bonus;
        console.log("bonus café");
        this.coffeeArray[0].node.remove();
        this.coffeeArray.shift();
      }
    });
  };

  coffeeScreenDissapear = () => {
    if (this.coffeeArray.length > 0) {
      if (this.coffeeArray[0].y > 385) {
        this.coffeeArray.shift();
      }
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
        this.damage;
        console.log("daño brief");
        this.briefArray[0].node.remove();
        this.briefArray.shift();
      }
    });
  };

  briefScreenDissapear = () => {
    if (this.coffeeArray.length > 0) {
      if (this.coffeeArray[0].x > 800) {
        this.coffeeArray.shift();
      }
    }
  };

  gameOver() {
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
    }
    if (this.timer > this.delayCoffee) {
      this.coffeeSpawn();
    }






    this. collisionHeroVsMeme();
    this.memeScreenDissapear ()


    this.collisionHeroVsCoffee();
    this.coffeeScreenDissapear();

    this.briefSpawn();

    this.collisionHeroVsBrief();

    this.briefScreenDissapear();

    //esta es la recursión
    this.timer++;

    // if (this.GameOn === true) {
    requestAnimationFrame(this.gameLoop);
  };
}
