class Game {
  constructor() {
    this.hero = new Hero();
    this.boss = new Boss();

    this.memeArray = [];

    this.coffeeArray = [];

    this.briefArray = [];

    this.score = 0;

    this.damage = -10;
    this.bonus = 5;

    this.timer = 0;
    this.delayMeme = 240;
    this.delayCoffee = 180;

    this.GameOn = this.score > 0;

    this.currentLevel = 1;

    this.counter = 0;

    this.minutes = 0;

    this.seconds = 0;

    this.counterSeconds = 0;

    this.counterMinutes = 0;
  }

  // métodos

  memeSpawn = () => {
    if (this.timer % 600 === 0) {
      let newMeme = new Meme();
      this.memeArray.push(newMeme);
    }
  };

  memeSound = () => {
    const memeImpact = document.querySelector("#laugh-audio");
    memeImpact.volume = 0.8;
    memeImpact.play();
    // setTimeout(() => {
    //   memeImpact.pause();
    // }, 1000);
  };

  timeCounter = () => {
    this.seconds = Math.floor(this.counterSeconds / 60);
    this.minutes = Math.floor(this.counterMinutes / 3600);

    if (this.counterSeconds === 3600) {
      this.counterSeconds = 0;
    }

    const time1Element = document.querySelector("#time1");
    time1Element.innerText = `${this.minutes
      .toString()
      .padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`;

    const time2Element = document.querySelector("#time2");
    time2Element.innerText = `${this.minutes.toString().padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`;
  };

  addPlusFive = () => {
  
    const plusFiveImage = new Image();
    plusFiveImage.src = "./images/+5.png";
  
    plusFiveImage.style.position = "absolute";
    plusFiveImage.style.left = "198px";
    plusFiveImage.style.top = "30px";
    plusFiveImage.style.width = "45px";
    plusFiveImage.style.height = "50px";
  
    gameBoxNode.appendChild(plusFiveImage);
  
    setTimeout(() => {
      plusFiveImage.remove();
    }, 500);
  };
  


  addMinusFive = () => {
  
    const minusFiveImage = new Image();
    minusFiveImage.src = "./images/menos10.png";
  
    minusFiveImage.style.position = "absolute";
    minusFiveImage.style.left = "198px";
    minusFiveImage.style.top = "30px";
    minusFiveImage.style.width = "45px";
    minusFiveImage.style.height = "50px";
  
    gameBoxNode.appendChild(minusFiveImage);
  
    setTimeout(() => {
      minusFiveImage.remove();
    }, 500);
  };


  collisionHeroVsMeme = () => {
    this.memeArray.forEach((eachMeme) => {
      if (
        eachMeme.x < this.hero.x + this.hero.w &&
        eachMeme.x + eachMeme.w > this.hero.x &&
        eachMeme.y < this.hero.y + this.hero.h &&
        eachMeme.y + eachMeme.h > this.hero.y
      ) {
        this.score += this.bonus;
        console.log("bonus meme sumando");
        this.memeArray[0].node.remove();
        this.memeArray.shift();
        this.updateScore();
        this.memeSound();
        this.addPlusFive();
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

  coffeeSound = () => {
    const coffeeImpact = document.querySelector("#coffee-audio");
    coffeeImpact.volume = 0.7;
    coffeeImpact.play();
   
  };

  collisionHeroVsCoffee = () => {
    this.coffeeArray.forEach((eachCoffee) => {
      if (
        eachCoffee.x < this.hero.x + this.hero.w &&
        eachCoffee.x + eachCoffee.w > this.hero.x &&
        eachCoffee.y < this.hero.y + this.hero.h &&
        eachCoffee.y + eachCoffee.h > this.hero.y
      ) {
        this.score += this.bonus;
        console.log("bonus café");
        this.coffeeArray[0].node.remove();
        this.coffeeArray.shift();
        this.updateScore();
        this.coffeeSound();
        this.addPlusFive();
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
    let levelUp;
    if (this.score > 15 && this.score < 30) {
      if (this.currentLevel <= 2) {
        this.currentLevel = 2;
        levelUp = 90;
      } else {
        this.currentLevel = 3;
        levelUp = 60;
      }
    } else if (this.score >= 30) {
      levelUp = 60;
      this.currentLevel = 3;
    } else {
      if (this.currentLevel == 1) {
        levelUp = 120;
      } else if (this.currentLevel == 2) {
        levelUp = 90;
      } else {
        levelUp = 60;
      }
    }
    if (this.timer % levelUp === 0) {
      let newBrief = new Brief();
      this.briefArray.push(newBrief);
    }
  };

  hitSound = () => {
    const hitImpact = document.querySelector("#hit-audio");
    hitImpact.volume = 0.6;
    hitImpact.play();
   
  };

  collisionHeroVsBrief = () => {
    for (let i = 0; i < this.briefArray.length; i++) {
      const eachBrief = this.briefArray[i];
      if (
        eachBrief.x < this.hero.x + this.hero.w &&
        eachBrief.x + eachBrief.w > this.hero.x &&
        eachBrief.y < this.hero.y + this.hero.h &&
        eachBrief.y + eachBrief.h > this.hero.y
      ) {
        this.score += this.damage;
        eachBrief.node.remove();
        this.briefArray.splice(i, 1);
        this.updateScore();
        this.hitSound();
        this.addMinusFive();
        break;
      }
    }
  };

  briefScreenDissapear = () => {
    if (this.coffeeArray.length > 0) {
      if (this.coffeeArray[0].x > 800) {
        this.coffeeArray.shift();
      }
    }
  };

  playMusic() {
    const musicElement = document.querySelector("#game-audio");
    musicElement.volume = 0.1;
    musicElement.currentTime = 0;
    musicElement.play();
  }

  stopMusic() {
    const musicElement = document.querySelector("#game-audio");
    musicElement.pause();
  }

  updateScore() {
    const scoreElement = document.querySelector("#score");
    scoreElement.innerText = this.score;
  }

  evilLaugh() {
    const evil = document.querySelector("#game-evil");
    evil.volume = 0.5;
    evil.play();
  }

  gameOver = () => {
    if (this.score < 0) {
      gameScreenNode.style.display = "none";
      gameOverBoxNode.style.display = "flex";
      this.stopMusic();
      this.evilLaugh();
    }

    return this.score < 0;
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
    }
    if (this.timer > this.delayCoffee) {
      this.coffeeSpawn();
    }

    this.timeCounter();

    this.collisionHeroVsMeme();
    this.memeScreenDissapear();

    this.collisionHeroVsCoffee();
    this.coffeeScreenDissapear();

    this.briefSpawn();

    this.collisionHeroVsBrief();

    this.briefScreenDissapear();

    //esta es la recursión
    this.counter++;
    this.counterSeconds++;
    this.counterMinutes++;
    this.timer++;

    if (this.gameOver()) {
      return;
    }
    requestAnimationFrame(this.gameLoop);
  };
}
