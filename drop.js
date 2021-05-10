class Drops{
constructor(x,y){

var options={
density:1
}

this.body=Bodies.circle(x,y,options);
World.add(world,this.body)

}
display(){
circle(this.x,this.y)

if (this.body.position.y>height){
Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
}

for (var i=0;i<MaxDrop;i++){
drops.push(new CreateDrop(random,(0,400)),(random(0,400)));

}
}

}
