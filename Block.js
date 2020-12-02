class Block{
    constructor(x,y,img){

        var options = {
            restitution: 0.4,
            friction: 0.65,
            density: 0.2
        }
        this.x = x;
        this.y = y;
        
        this.image = loadImage(img);
        this.Visibility = 255;

        this.isHit = false;

        this.body = Bodies.rectangle(x,y,40,40,options);
        World.add(world,this.body);
        
    }
    display(){
        var angle = this.body.angle;
        if(this.body.speed >= 3){
            this.isHit = true;
        }
        if(this.isHit === true){
            this.Visibility = this.Visibility - 5;
        }
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        tint(255,this.Visiblity);
        image(this.image,0,0,40,40);
        pop();
        if(this.Visibility <= 0){
            World.remove(world,this.body);
        }
    }
}