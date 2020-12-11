class Bin {
    constructor(x,y){
        var options={
            isStatic:true
        }

        this.image=loadImage("sprites/dustbingreen.png")


        this.x=x;
        this.y=y;
        this.width=200;
        this.height=100;
        this.thickness=20;
        this.angle=0;
        this.bottom= Bodies.rectangle(this.x,this.y,this.width,this.thickness,options)
        this.left= Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,options)
        Matter.Body.setAngle(this.left,this.angle)
        this.right= Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,options)
        Matter.Body.setAngle(this.left,-1*this.angle)

        World.add(world,this.bottom)
        World.add(world,this.left)
        World.add(world,this.right)
    }

    display(){
        
        push()
        translate(this.left.position.x,this.left.position.y)
        rotate(this.angle)
        //rect(0,0,this.thickness,this.height)
        pop()

        push()
        translate(this.right.position.x,this.right.position.y)
        rotate(-1*this.angle)
       // rect(0,0,this.thickness,this.height)
        pop()

        push()
        translate(this.bottom.position.x,this.bottom.position.y)
        //rect(0,0,this.width,this.thickness)
        image(this.image,0,-this.height/2,this.width,this.height)
        pop()
    }
   
    
}