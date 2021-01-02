class Roof{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,100,400,20,options)
        World.add(world,this.body)
     
    }
    display(){ 
        
        rectMode(CENTER)
        fill("red")
        rect(this.body.position.x,this.body.position.y,400,20);
       
      }
}