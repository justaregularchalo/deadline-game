class Hero {
  constructor() {
    //Nodo

    this.node = document.createElement("img");
    this.node.src = "./images/CHALO.1.png";
    gameBoxNode.append(this.node);

    this.w = 75;
    this.h = 195;
    this.x = 650;
    this.y = 180;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    this.speedX = 30;
    this.jumpSpeed = 150;

    this.gravitySpeed = 3;
    this.bounce = 0;

    this.inAir = false;

    this.marginLeft = 372;
    this.marginRight = 690;
  }

  moveLeft = () => {
    if (this.x - this.speedX >= this.marginLeft) {
      this.x -= this.speedX;
      this.node.style.left = `${this.x}px`;
    }
  };

  moveRight = () => {
    if (this.x - this.speedX <= this.marginRight) {
      this.x += this.speedX;
      this.node.style.left = `${this.x}px`;
    }
  };

  jump = () => {
    if (!this.inAir) {
      this.y -= this.jumpSpeed;
      this.node.style.top = `${this.y}px`;
      this.inAir = true;
    }
  };

  gravityEffect = () => {
    if (this.inAir) {
      this.y += this.gravitySpeed;
      this.node.style.top = `${this.y}px`;

      if (this.y >= 180) {
        this.y = 180;
        this.node.style.top = `${this.y}px`;
        this.inAir = false;
      }
    }
  };

  resetPosition() {
    this.y = 180; //
    this.node.style.top = `${this.y}px`;
    this.inAir = false;
  }
}
