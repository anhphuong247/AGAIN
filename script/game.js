/**
 * Created by Administrator on 24/05/2016.
 */
var context;
var player;
window.onload=function () {
    var canvas=document.createElement("canvas");
    context=canvas.getContext("2d");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    document.body.appendChild(canvas);
    gameStart();
    setInterval(gameLoop,17);
};
function gameStart() {
    player=new Tank(100,100);
}
function gameUpdate() {
    player.update();
}
function gameDrawer(context) {
    context.fillStyle = "black";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    player.draw(context);
}
function gameLoop() {
    gameUpdate();
    gameDrawer(context);
}
window.onkeydown = function (e)
{
      switch(e.keyCode){
        case 65://a
            player.move(3);
            break;
        case 68://d
            player.move(4);
            break;
        case 83://s
            player.move(2);
            break;
        case 87://w
            player.move(1);
            break;
    }
};