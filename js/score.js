class Score {
  constructor() {
    //Nodo

    this.node = document.createElement("img");
    this.node.src = "./images/SCORE.png";
    gameBoxNode.append(this.node);

    this.w = 100;
    this.h = 70;
    this.x = 25;
    this.y = 30;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.y}px`;
    this.node.style.top = `${this.x}px`;
  }
}
