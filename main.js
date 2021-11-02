var canvas = new fabric.Canvas("myCanvas");
playerX= 10;
playerY= 10;

blockHeight= 30;
blockWidth= 30;

var playerObject= "";
var blockObject= "";

function summonPlayer(){
    fabric.Image.fromURL("player.png", function(Img){
    playerObject=Img;
    playerObject.scaleToWidth(150);
    playerObject.scaleToHeight(140);
    playerObject.set({
        top: playerY,  left: playerX
    });
    canvas.add(playerObject);
      }  );

}

function getBlock(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    blockObject=Img;
    blockObject.scaleToWidth(blockWidth);
    blockObject.scaleToHeight(blockHeight);
    blockObject.set({
        top: playerY,  left: playerX
    });
    canvas.add(blockObject);
      }  );

}

window.addEventListener("keydown", keydown1);
function keydown1(e) {
keypressed=e.keyCode;
if(keypressed=="49") {
    getBlock("wall.jpg");
    console.log("1");
}
if(keypressed=="50") {
    getBlock("yellow_wall.png");
    console.log("2");
}
if(keypressed=="51") {
    getBlock("unique.png");
    console.log("3");
}
if(keypressed=="52") {
    getBlock("trunk.jpg");
    console.log("4");
}
if(keypressed=="53") {
    getBlock("roof.jpg");
    console.log("5");
}
if(keypressed=="54") {
    getBlock("light_green.png");
    console.log("6");
}
if(keypressed=="55") {
    getBlock("dirt.png");
    console.log("7");
}

if(keypressed=="56") {
    getBlock("dark_green.png");
    console.log("8");
}
if(keypressed=="57") {
    getBlock("cloud.jpg");
    console.log("9");
} 
if(keypressed=="119"){
    up();
    console.log("w");
}
if(keypressed=="38"){
    up();
    console.log("up");
}
if(keypressed=="65"){
    left();
    console.log("a");
}
if(keypressed=="37"){
    left();
    console.log("left");
}
if(keypressed=="83"){
    down();
    console.log("s");
}
if(keypressed=="40"){
    down();
    console.log("down");
}
if(keypressed=="68"){
    right();
    console.log("d");
}
if(keypressed=="39"){
    right();
    console.log("right");
}
if (keypressed=="08") {
    getBlock("clear.jpg")
    console.log("backspace")
}
if(e.shiftKey==true && keypressed=="187"){
    blockWidth= blockWidth+10;
    blockHeight= blockHeight+10;
    document.getElementById("currentHeight").innerHTML=blockHeight;
    document.getElementById("currentWidth").innerHTML=blockWidth;
}
if(e.shiftKey==true && keypressed=="189"){
     blockWidth= blockWidth-10;
     blockHeight= blockHeight-10;
     document.getElementById("currentHeight").innerHTML=blockHeight;
     document.getElementById("currentWidth").innerHTML=blockWidth;
 }
}

function up(){
    if(playerY >=0){
     playerY = playerY-blockHeight;
     console.log(blockHeight);
     canvas.remove(playerObject);
     summonPlayer();
    }
}

function down(){
    if(playerY <=600){
     playerY = playerY+blockHeight;
     console.log(blockHeight);
     canvas.remove(playerObject);
     summonPlayer();
    }
}

function right(){
    if(playerX <=1350){
     playerX = playerX+blockWidth;
     console.log(blockWidth);
     canvas.remove(playerObject);
     summonPlayer();
    }
}

function left(){
    if(playerX >=0){
     playerX = playerX-blockWidth;
     console.log(blockWidth);
     canvas.remove(playerObject);
     summonPlayer();
    }
}

