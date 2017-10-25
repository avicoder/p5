// Conditional Statments

function setup(){
    
    createCanvas(800,800);    
}

function draw(){

background('skyblue');

fill('black');
rect(395,450,10,400);    
rect(300,100,200,400);


ellipse(400,200,100,100);    
ellipse(400,300,100,100);
ellipse(400,400,100,100);

if (mouseX < 100){

    
    fill('red');
    ellipse(400,200,100,100)
    
}
   
    
if (mouseX > 100 & mouseX<500){

    
    fill('yellow');
    ellipse(400,300,100,100)
    
}

if (mouseX>500){

    fill('green');
    ellipse(400,400,100,100)
}

    stroke('gray');
    
    
}