var player;
var entry;
var exit;
var treasure,treasureImage;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall17,wall18,wall19,
wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall26,wall27,wall28,wall29,wall30,wall31, wall32,wall33;

var wall34,wall35,wall36,wall37,wall38,wall39,wall40,wall41,wall42,wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50,wall51,wall52,
wall53,wall54,wall55,wall56,wall57,wall58,wall59,wall60,wall61,wall62,wall63,wall64,wall65,wall66,wall67;

var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6;

var level1walls = [];
var level2walls = [];

var retryButton

var gameState= "PLAY";

var level= 1;

function preload(){

  treasureImage=loadImage("trophy_image.png");
}


function setup(){
  createCanvas(450,400);
  entry=createSprite(304,16,60,50);
  entry.shapeColor=rgb(3,252,23);

  exit=createSprite(21,375,50,50);
  exit.shapeColor="yellow";

  treasure=createSprite(176,145);
  treasure.shapeColor="cyan";
  treasure.addImage(treasureImage);
  treasure.scale=0.2

 /* treasure.setCollider("rectangle",0,0,50,50);
  treasure.debug=true;*/

  
  
  
  edges=createEdgeSprites();

  //wallls starting here 
  wall1=createSprite(180,34,181,10);
  
  wall2=createSprite(50,80,100,10)

  wall3=createSprite(43,34,10,100);

  wall4=createSprite(158,130,10,100);

  wall5=createSprite(89,118,130,10);

  wall6=createSprite(300,128,10,100);
  
  wall7=createSprite(232,128,10,100);

  wall8=createSprite(195,122,65,10)

  wall9=createSprite(50,160,100,10)
  
  wall10=createSprite(100,250,10,100);

  wall11=createSprite(90,540,175,10)

  wall12=createSprite(150,252,100,10);

  wall13=createSprite(250,257,10,100);

  wall14=createSprite(40,295,110,10);

  wall15=createSprite(25,205,50,10);

  wall16=createSprite(45,235,10,50);

  wall17=createSprite(281,118,35,10);

  wall18=createSprite(245,155,30,10);

  wall19=createSprite(69,160,170,10);

  wall20=createSprite(250,332,10,50)

  wall21=createSprite(188,352,115,10)

  wall22=createSprite(135,380,10,50);

  wall23=createSprite(185,319,10,56);

  wall24=createSprite(122,295,50,10);

  wall25=createSprite(76,328,10,56)

  wall26=createSprite(296,265,10,100);

  wall27=createSprite(271,310,40,10);

  wall28=createSprite(200,207,10,100)

  wall29=createSprite(200,54,10,50);
  
  wall30=createSprite(-111,-122,10,10);

  wall31=createSprite(-111,-112,10,10);



//level 2 walls
wall32=createSprite(340,130,10,1000);
  wall33=createSprite(400,81,110,10);
 wall34=createSprite(270,40,10,100);
  wall35=createSprite(320,80,40,10);
  wall36=createSprite(298,200,10,150);
  wall37=createSprite(214,191,100,10);
  wall38=createSprite(215,158,10,58);
  wall39=createSprite(255,308,100,10);
  wall40=createSprite(240,220,10,50);
  wall41=createSprite(246,271,50,10);
  wall42=createSprite(235,65,10,80);
  wall43=createSprite(160,30,140,10);
  wall44=createSprite(168,80,10,100);
  wall45=createSprite(188,77,40,10);
  wall46=createSprite(50,365,10,100);
  wall47=createSprite(226,288,10,40);
  wall48=createSprite(265,370,10,60);
  wall49=createSprite(300,330,10,50);
  wall50=createSprite(107,191,10,100);
  wall51=createSprite(142,162,60,10);
  wall52=createSprite(169,225,10,60);
  wall53=createSprite(140,309,80,10);
  wall54=createSprite(141,306,10,100);
  wall55=createSprite(20,281,55,10);
  wall56=createSprite(200,345,60,10);
  wall57=createSprite(199,371,10,60);
  wall58=createSprite(47,50,10,100);
  wall59=createSprite(83,63,70,10);
  wall60=createSprite(69,189,70,10);
  wall61=createSprite(39,235,10,85);
  wall62=createSprite(75,146,100,10);
  wall63=createSprite(93,350,90,10);
  wall64=createSprite(125,100,80,10);


  //enemy
  enemy1=createSprite(250,170,15,15);
  enemy1.shapeColor=rgb(255,0,0)
  enemy1.velocityX=Math.random(5,10);
  enemy1.velocityY=Math.random(5,10);
 
  enemy2=createSprite(182,115,15,15);
  enemy2.shapeColor=rgb(255,0,0)
  enemy2.velocityX=Math.random(10,15);
  enemy2.velocityY=Math.random(10,15);

  enemy3=createSprite(120,290,15,15);
  enemy3.shapeColor=rgb(255,0,0)
  enemy3.velocityX=Math.random(10,15);
  enemy3.velocityY=Math.random(10,15);

  enemy4=createSprite(70,377,15,15);
  enemy4.shapeColor=rgb(255,0,0)
  enemy4.velocityX=Math.random(10,15);
  enemy4.velocityY=Math.random(10,15);

  enemy5=createSprite(142,50,15,15);
  enemy5.shapeColor=rgb(255,0,0)
  enemy5.velocityX=Math.random(10,15);
  enemy5.velocityY=Math.random(10,15);
  

level1walls.push(wall1);
level1walls.push(wall2);
level1walls.push(wall3);
level1walls.push(wall4);
level1walls.push(wall5);
level1walls.push(wall6);
level1walls.push(wall7);
level1walls.push(wall8);
level1walls.push(wall9);
level1walls.push(wall10);
level1walls.push(wall11);
level1walls.push(wall12);
level1walls.push(wall13);
level1walls.push(wall14);
level1walls.push(wall15);
level1walls.push(wall16);
level1walls.push(wall17);
level1walls.push(wall18);
level1walls.push(wall19);
level1walls.push(wall20);
level1walls.push(wall21);
level1walls.push(wall22);
level1walls.push(wall23);
level1walls.push(wall24);
level1walls.push(wall25);
level1walls.push(wall26);
level1walls.push(wall27);
level1walls.push(wall28);
level1walls.push(wall29);
level1walls.push(wall30);
level1walls.push(wall31)
  
  //score walls
  wall32=createSprite(340,130,10,1000);
  wall33=createSprite(400,81,110,10);

  //player
  player=createSprite(300,15,10,10);
  player.shapeColor="pink"
  player.setCollider("rectangle",0,0,player.width,player.height);
  player.debug=true;

  
  wall32.visible= false;
  wall33.visible= false;

  wall34.visible= false;
  wall35.visible= false;
  wall36.visible= false;
  wall37.visible= false;
  wall38.visible= false;
  wall39.visible= false;
  wall40.visible= false;
  wall41.visible= false;
  wall42.visible= false;
  wall43.visible= false;
  wall44.visible= false;
  wall45.visible= false;
  wall46.visible= false;
  wall47.visible= false;
  wall48.visible= false;
  wall49.visible= false;
  wall50.visible= false;
  wall51.visible= false;
  wall52.visible= false;
  wall53.visible= false;
  wall54.visible= false;
  wall55.visible= false;
  wall56.visible= false;
  wall57.visible= false;
  wall58.visible= false;
  wall59.visible= false;
  wall60.visible= false;
  wall61.visible= false;
  wall62.visible= false;
  wall62.visible= false;
  wall63.visible= false;
  wall64.visible= false;

}
function draw(){
  background("black");
 drawSprites();

  text(mouseX+","+mouseY,mouseX,mouseY);

  text("YOUR SCORE",352,20)
  text("GOLD=5:14mins",345,120);
  text("SILVER=5:30mins",345,150);
  text("BRONZE=6:03mins",345,180);

  if(gameState==="PLAY"){
touchingWalls(player,wall1);
touchingWalls(player,wall2);
touchingWalls(player,wall3);
touchingWalls(player,wall4);
touchingWalls(player,wall5);
touchingWalls(player,wall6);
touchingWalls(player,wall7);
touchingWalls(player,wall8);
touchingWalls(player,wall9);
touchingWalls(player,wall10);
touchingWalls(player,wall11);
touchingWalls(player,wall12);
touchingWalls(player,wall13);
touchingWalls(player,wall14);
touchingWalls(player,wall15);
touchingWalls(player,wall16);
touchingWalls(player,wall17);
touchingWalls(player,wall18);
touchingWalls(player,wall19);
touchingWalls(player,wall20);
touchingWalls(player,wall21);
touchingWalls(player,wall22);
touchingWalls(player,wall23);
touchingWalls(player,wall24);
touchingWalls(player,wall25);
touchingWalls(player,wall26);
touchingWalls(player,wall27);
touchingWalls(player,wall28);
touchingWalls(player,wall29);
touchingWalls(player,wall30);
touchingWalls(player,wall31);



  player.bounce(wall30);

  if(player.isTouching(treasure)){
    treasure.visible=false;
  };

  player.bounce(edges[0]);
  player.bounce(edges[1]);
  player.bounce(edges[2]);
  player.bounce(edges[3]);
  player.bounce(wall31);
  player.bounce(wall32);

  enemy1.bounceOff(edges[0]);
  enemy1.bounceOff(edges[1]);
  enemy1.bounceOff(edges[2]);
  enemy1.bounceOff(edges[3]);
  enemy1.bounceOff(wall31);
  enemy1.bounceOff(wall32);

  enemy2.bounceOff(edges[0]);
  enemy2.bounceOff(edges[1]);
  enemy2.bounceOff(edges[2]);
  enemy2.bounceOff(edges[3]);
  enemy2.bounceOff(wall31);
  enemy2.bounceOff(wall32);

  enemy3.bounceOff(edges[0]);
  enemy3.bounceOff(edges[1]);
  enemy3.bounceOff(edges[2]);
  enemy3.bounceOff(edges[3]);
  enemy3.bounceOff(wall31);
  enemy3.bounceOff(wall32);

  enemy4.bounceOff(edges[0]);
  enemy4.bounceOff(edges[1]);
  enemy4.bounceOff(edges[2]);
  enemy4.bounceOff(edges[3]);
  enemy4.bounceOff(wall31);
  enemy4.bounceOff(wall32);

  enemy5.bounceOff(edges[0]);
  enemy5.bounceOff(edges[1]);
  enemy5.bounceOff(edges[2]);
  enemy5.bounceOff(edges[3]);
  enemy5.bounceOff(wall31);
  enemy5.bounceOff(wall32);




  if(keyDown("RIGHT_ARROW")){
    //player.velocityX=5;
    player.x=player.x+5
   // player.velocityY=0;
  };
  if(keyDown("LEFT_ARROW")){
    //player.velocityX=-5;
    player.x=player.x-5;    
    //player.velocityY=0;
  };
  if(keyDown("UP_ARROW")){
    //player.velocityY=-5;
    player.y=player.y-5;
  };
   if(keyDown("DOWN_ARROW")){
    //player.velocityY=5;
    player.y=player.y+5;
   };


   if(level === 2){
    if(player.isTouching(enemy1) || player.isTouching(enemy2) || player.isTouching(enemy3) || player.isTouching(enemy4) || player.isTouching(enemy5)){
        gameState = "END";
        GameOver();
    }
  }

   if(player.isTouching(exit)){
     level= 2;  
    createLevel2();
   
    }
   
    createLevel1();
   
     } 
  }



function touchingWalls(player,wall){

  if(player.isTouching(wall)){
    wall.visible=true;
    player.bounce(wall);
  }
  else {
    wall.visible=false;
  };

}


function createLevel1(){
enemy1.visible= false;
enemy2.visible= false;
enemy3.visible= false;
enemy4.visible= false;
enemy5.visible= false;
//enemy6.visible= false;
};


function createLevel2(){

  level=2;

  wall1.destroy();
  wall2.destroy();
  wall3.destroy();
  wall4.destroy();
  wall5.destroy();
  wall6.destroy();
  wall7.destroy();
  wall8.destroy();
  wall9.destroy();
  wall10.destroy();
  wall11.destroy();
  wall12.destroy();
  wall13.destroy();
  wall14.destroy();
  wall15.destroy();
  wall16.destroy();
  wall17.destroy();
  wall18.destroy();
  wall19.destroy();
  wall20.destroy();
  wall21.destroy();
  wall22.destroy();
  wall23.destroy();
  wall24.destroy();
  wall25.destroy();
  wall26.destroy();
  wall27.destroy();
  wall28.destroy();
  wall29.destroy();
  wall30.destroy();
  wall31.destroy();
  
 
  wall34.visible= true;
  wall35.visible= true;
  wall36.visible= true;
  wall37.visible= true;
  wall37.visible= true;
  wall38.visible= true;
  wall37.visible= true;
  wall39.visible= true;
  wall40.visible= true;
  wall41.visible= true;
  wall42.visible= true;
  wall43.visible= true;
  wall44.visible= true;
  wall45.visible= true;
  wall46.visible= true;
  wall47.visible= true;
  wall48.visible= true;
  wall49.visible= true;
  wall50.visible= true;
  wall51.visible= true;
  wall52.visible= true;
  wall53.visible= true;
  wall54.visible= true;
  wall55.visible= true;
  wall56.visible= true;
  wall57.visible= true;
  wall58.visible= true;
  wall59.visible= true;
  wall60.visible= true;
  wall61.visible= true;
  wall62.visible= true;
  wall62.visible= true;
  wall63.visible= true;
  wall64.visible= true;

  

   
enemy1.visible= true;
enemy2.visible= true;
enemy3.visible= true;
enemy4.visible= true;
enemy5.visible= true;

player.x=300;
player.y=15;

touchingWalls(player,wall32);
touchingWalls(player,wall33);
touchingWalls(player,wall34);
touchingWalls(player,wall35);
touchingWalls(player,wall36);
touchingWalls(player,wall37);
touchingWalls(player,wall38);
touchingWalls(player,wall39);
touchingWalls(player,wall40);
touchingWalls(player,wall41);
touchingWalls(player,wall42);
touchingWalls(player,wall43);
touchingWalls(player,wall44);
touchingWalls(player,wall45);
touchingWalls(player,wall46);
touchingWalls(player,wall47);
touchingWalls(player,wall48);
touchingWalls(player,wall49);
touchingWalls(player,wall50);
touchingWalls(player,wall51);
touchingWalls(player,wall52);
touchingWalls(player,wall53);
touchingWalls(player,wall54);
touchingWalls(player,wall55);
touchingWalls(player,wall56);
touchingWalls(player,wall57);
touchingWalls(player,wall58);
touchingWalls(player,wall59);
touchingWalls(player,wall60);
touchingWalls(player,wall61);
touchingWalls(player,wall62);
touchingWalls(player,wall63);
touchingWalls(player,wall64);

player.bounceOff(wall32);
player.bounceOff(wall33);
player.bounceOff(wall34);
player.bounceOff(wall35);
player.bounceOff(wall37);
player.bounceOff(wall38);
player.bounceOff(wall39);
player.bounceOff(wall40);
player.bounceOff(wall41);
player.bounceOff(wall42);
player.bounceOff(wall43);
player.bounceOff(wall44);
player.bounceOff(wall45);
player.bounceOff(wall46);
player.bounceOff(wall47);
player.bounceOff(wall48);
player.bounceOff(wall49);
player.bounceOff(wall50);
player.bounceOff(wall51);
player.bounceOff(wall52);
player.bounceOff(wall53);
player.bounceOff(wall54);
player.bounceOff(wall55);
player.bounceOff(wall56);
player.bounceOff(wall57);
player.bounceOff(wall58);
player.bounceOff(wall59);
player.bounceOff(wall60);
player.bounceOff(wall61);
player.bounceOff(wall62);
player.bounceOff(wall63);
player.bounceOff(wall64);



};

function GameOver()
{
  enemy1.velocityX=0;
  enemy1.velocityY=0;

  enemy2.velocityX=0;
  enemy2.velocityY=0;

  enemy3.velocityX=0;
  enemy3.velocityY=0;

  enemy4.velocityX=0;
  enemy4.velocityY=0;

  enemy5.velocityX=0;
  enemy5.velocityY=0;

  player.velocityY=0;
  player.velocityX=0;

  
  textSize(56);
  textFont("Bahnschrift SemiLight SemiConde"); 
  text("GameOver",170,175);


}








