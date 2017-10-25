// Usage of random()
// Usage of height & width

var spot ={
    x:0,
    y:0
    
};

var colors= {
    
    r:0,
    g:0,
    b:0
    };

function setup(){
    
    createCanvas(800,800);    
}

function draw(){

spot.x =random(0,width);
spot.y= random(0,height);

colors.r = random(0,255);
colors.g = random(0,255);
colors.b = random(0,255);
    
noStroke();
fill(colors.r,colors.g,colors.b,100);
ellipse(spot.x,spot.y,20,20);

}