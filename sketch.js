var database;
var personCount,player;

function setup(){
  database = firebase.database();
  console.log(database);
   Game = new game()
   Game.Start()
}

function draw(){
  background("white");
    drawSprites();
  
}
