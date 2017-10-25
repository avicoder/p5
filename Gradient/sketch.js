//Usage of map()


colors= {
    
    r:0,
    g:0,
    b:0
    
    };

function setup(){
    
    createCanvas(400,400);    
}

function draw(){

colors.r = map(mouseX,0,400,255,0);
colors.g = map(mouseY,0,400,0,255);
colors.b = map(mouseX,0,400,0,0);
    
background(colors.r,colors.g,colors.b);
    
}