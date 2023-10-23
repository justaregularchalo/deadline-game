class Coffee {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/COFFEE.png";
    gameBoxNode.append(this.node);

    this.w = 35;
    this.h = 55;
    this.x = 400;
    this.y = 0;

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
  };
}
