class Brief {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/BRIEF.png";
    gameBoxNode.append(this.node);

    this.w = 35;
    this.h = 35;
    this.x = 75;
    this.y = 300 + Math.random() * 50;

    this.marginTop = 300;
    this.marginBottom = 400;

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

    if (this.y <= this.marginTop) {
      this.y = this.marginTop;
    } else if (this.y >= this.marginBottom) {
      this.y = this.marginBottom;
    }
    this.node.style.top = `${this.y}px`;
  };
}
