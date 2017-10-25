// How to declare variables not War :)
// Also some OOP concepts covered in the video

var move = {x:0} ;

function setup(){
    
    createCanvas(400,400);
    
}

function draw(){
    
    background('#111');
    ellipseMode(CENTER);
    rectMode(CENTER);
    
    fill('gold');
    rect(240+move.x,145,40,100);
    
    fill('green');
    ellipse(240+move.x,115,60,60);
    
    fill('orange');
    ellipse(221+move.x,115,16,16);
    ellipse(259+move.x,115,16,16);
    
    stroke('green');
    line(230+move.x,195,220+move.x,205);
    line(250+move.x,195,260+move.x,205);

    move.x = move.x+1;
}