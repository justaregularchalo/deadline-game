class Brief {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/BRIEF.png";
    gameBoxNode.append(this.node);

    this.w = 35;
    this.h = 35;
    this.x = 75;
    this.y = 295;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    this.speed = 4;
  }

  throwingMovement = () => {
    this.x += this.speed;
    this.node.style.left = `${this.x}px`;
  };
}
