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
    block.scaleToHeight(blockHeight);
    blockObject.set({
        top: playerY,  left: playerX
    });
    canvas.add(blockObject);
      }  );

}