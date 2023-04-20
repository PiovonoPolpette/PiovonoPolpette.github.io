var game = document.querySelector(".game");
var pl = document.querySelector(".player");
var polpette = document.querySelector(".polpette");

var playerLeft = parseInt(window.getComputedStyle(pl).getPropertyValue("left"));
var playerBottom = parseInt(window.getComputedStyle(pl).getPropertyValue("bottom"));

var score;

function movePgLeft(){
    if(playerLeft > 0 ){
        playerLeft -= 15;
        pl.style.left = playerLeft + 'px';
    }
}

function movePgRight(){
    if(playerLeft < 598){
        playerLeft += 15;
        pl.style.left = playerLeft + 'px';
    }
}


function control(e){
    if(e.key == "ArrowLeft"){
        movePgLeft();
    }

    if(e.key == "ArrowRight"){
        movePgRight();
    }
}

var i = 0;
function generateMeatballs(){

    var polpettaBottom = 380;
    var polpettaLeft = Math.floor(Math.random()*678);
    i++;
    //genera div
    var mb=document.createElement('div');
    mb.setAttribute('class', 'mb mb'+i);
    polpette.appendChild(mb);
    
    //per generare l'img
    var img = document.createElement("img"); 
    img.src = "../img/clipart1924778.png"; 
    var src = document.querySelector(".mb"+i); 
    src.appendChild(img);

    //funzione per gestire polpette
   function fallDown(){
        polpettaBottom -= 5;
        mb.style.bottom = polpettaBottom + 'px';
        mb.style.left = polpettaLeft + 'px';
       
    }
    setInterval(fallDown, 30);
    
}

setInterval(generateMeatballs, 2000);

document.addEventListener("keydown" , control);

