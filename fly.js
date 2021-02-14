class Fly{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA.body,
            pointB:pointB,
            length:100,
            stiffness:0.8
        } 
       this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
       display(){
        strokeWeight(3);
        line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y);
}
fly(){
    this.chain.bodyA=null;
}  
attach(body){
   this.chain.bodyA=body; 
}
} 

