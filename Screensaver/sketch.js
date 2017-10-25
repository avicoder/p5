// Conditional Statements contd...

var x=0;
var y=0;

var direction=1;
var speed = 3;

function setup(){
    
    createCanvas(400,400);    
}

function draw(){

    
    background('#fff');
    
    noStroke();
    
    fill('orange');
    
//  
    ellipse(30+x,30+y,60,60);
    
//Bounce Back logic
    
    if (x>(width-60)){
      direction = -1;
    }
    
    if (x<0){
      direction = 1;    
    }

    
    x=x+speed*direction;
}


//TODO make the movement in y diection and use randomizer.