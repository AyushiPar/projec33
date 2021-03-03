var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var engine, world;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;

var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) 
  {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);

  textSize(20);
  text("Score : "+score,20,30);

  textSize(17);
  text("500", 25,520);
  textSize(17);
  text("500", 105,520);
  textSize(17);
  text("500", 185,520);

  textSize(17);
  text("100", 265,520);
  textSize(17);
  text("100", 345,520);
  textSize(17);
  text("100", 425,520);

  textSize(17);
  text("200", 505,520);
  textSize(17);
  text("200", 585,520);
  textSize(17);
  text("200", 665,520);
  textSize(17);
  text("200", 750,520);

  //if(frameCount%60===0){
    //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    //score++;
 //}

 if(particle!=null)
 {
   particle.display();
   if(particle.body.position.y>700)
   {
     if(particle.body.position.x<190)
     {
       score = score+500;
       particle=null;
       if(turn>=5)
       {
         gameState = "end";

       }
     } 
   }
 }

 if(particle!=null)
 {
   particle.display();
   if(particle.body.position.y>700)
   {
     if(particle.body.position.x>301 && particle.body.position.x<500)
     {
       score = score+100;
       particle=null;
       if(turn>=5)
       {
         gameState = "end";
       }
     } 
   }
 }

  if(particle!=null)
  {
    particle.display();
    if(particle.body.position.y>700)
    {
      if(particle.body.position.x>501 && particle.body.position.x<900)
      {
        score = score+200;
        particle=null;
        if(turn>=5)
        {
          gameState = "end";
        }
      } 
    }
  }
  
  if(turn>=5){
    textSize(30);
    fill("red");
    text("GAME OVER", width/2 - 50, height/2 - 50);
  }

   for (var i = 0; i < plinkos.length; i++) 
   {
     plinkos[i].display();
     
   }

 
  //for (var j = 0; j < particles.length; j++) {
   
    // particles[j].display();
  // }
   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }

   ground.display();

   
}

function mousePressed()
{
  if(gameState!=="end")
  {
    turn++;
    particle = new Particle(mouseX,10,10);
  }
}