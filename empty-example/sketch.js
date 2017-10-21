function setup(){
    
    createCanvas(400,400);
    
}

function draw(){
    
    background(255,100,100,100);
    ellipseMode(CENTER);
    rectMode(CENTER);
    
    fill('gold');
    rect(240,145,40,100);
    
    fill('silver');
    ellipse(240,115,60,60);
    
    fill('orange');
    ellipse(221,115,16,16);
    ellipse(259,115,16,16);
    
    line(230,195,220,205);
    line(250,195,260,205);

}