var ship,piship
function preload(){
     back=loadImage("images/background.jpg")
     sim=loadImage("images/ship.png")
     psim=loadImage("images/pirateship.jpg")
}

function setup(){
    createCanvas(1700,windowHeight)
    //policehShip
    ship=createSprite(670,470,20,20)
    ship.addImage(sim)
    ship.scale=0.8
    //pirateship
    piship=createSprite(1470,440,20,20)
    piship.addImage(psim)
    piship.scale=0.4
}

function draw(){
    background(back)
    textSize(20)
    text("x"+mouseX+"y"+mouseY,mouseX,mouseY)

    //moving policehShip
    if(keyDown(UP_ARROW)&&ship.y>=350){
        ship.y=ship.y-5
    }
    if(keyDown(DOWN_ARROW)&&ship.y<=600){
        ship.y=ship.y+5
    }
    if(keyDown(DOWN_ARROW)&&ship.y<=600){
        ship.y=ship.y+5
    }

    drawSprites()
}