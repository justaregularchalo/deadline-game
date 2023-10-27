class Meme {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/MEME.png";

    gameBoxNode.append(this.node);

    this.w = 35;
    this.h = 35;
    this.x = Math.random() * 700;
    this.y = 0;

    this.marginLeft = 400;
    this.marginRight = 780;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    this.speed = 1;
  }

  fallingMovement = () => {
    this.y += this.speed;
    this.node.style.top = `${this.y}px`;

    if (this.x <= this.marginLeft) {
      this.x = this.marginLeft;
    } else if (this.x >= this.marginRight) {
      this.x = this.marginRight;
    }

    this.node.style.left = `${this.x}px`;
  };
}
