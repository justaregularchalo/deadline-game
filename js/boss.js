class Boss {

    constructor () {

        this.node = document.createElement("img")
        this.node.src ="./images/BOSS.png";
        gameBoxNode.append(this.node);



        this.w =100;
        this.h = 125;
        this.x = 40; 
        this.y = 252; 

        this.node.style.width=`${this.w}px`;
        this.node.style.height=`${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.left = `${this.x}px`;
        this.node.style.top=`${this.y}px`;




        


    }





}